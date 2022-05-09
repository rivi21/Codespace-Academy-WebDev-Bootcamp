<?php

namespace App\Controller\Api;

use App\Entity\Entrada;
use App\Repository\CategoriaRepository;
use App\Repository\EntradaRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\String\Slugger\AsciiSlugger;

/**
 * @Route("/api/entrada")
 */
class EntradaController extends AbstractController
{
    private $entradaRepository;
    private $em;

    public function __construct(EntradaRepository $entradaRepository, EntityManagerInterface $em)
    {
        $this->entradaRepository = $entradaRepository;
        $this->em = $em;
    }

    /**
     * @Route("", methods={"GET"})
     */
    public function index(): Response
    {
        /**  @var Usuario $usuario */ //Definimos el tipo del usuario con el @var
        $usuario = $this->getUser(); //obtenemos el usuario de la sesión (el autenticado con el token y lo asignamos a una variable)

        // Añadimos la condición de que consulte por el usuario que le pasamos.
        $entradas = $this->entradaRepository->findBy(['usuario' => $usuario], ['titulo' => 'ASC']);
        $resultado = [];
        foreach ($entradas as $entrada) {
            $resultado[] = [
                'id' => $entrada->getId(),
                'slug' => $entrada->getSlug(),
                'titulo' => $entrada->getTitulo(),
                //mostramos el usuario si no es null, es decir si existe
                'usuario' => $entrada->getUsuario() == null ? '' : $entrada->getUsuario()->getNombre(),
                //mostramos al usuario que viene en el token. El que está autenticado
                'usuarioLogin' => $usuario->getEmail() 
            ];
        }
        return new JsonResponse($resultado);
    }

    /**
     * @Route("", methods={"POST"})
     */
    public function add(Request $request, CategoriaRepository $categoriaRepository): Response
    {
        //obtenemos el content decodificando el json que nos viene en el body de la petición
        $content = json_decode($request->getContent(), true);
        //creamos la entrada
        $entrada = new Entrada();
        //Obtenemos la entidad relacionada categoria por el nombre xej, usando la funcion finOneBy(que devuelve un solo objeto)
        $categoria = $categoriaRepository->findOneBy(['nombre' => $content['categoria']]);
        //establecemos la categoria en entrada
        $entrada->setCategoria($categoria);
        //necesitamos tb el título, resumen, texto, fecha, estado y slug 
        $entrada->setTitulo($content['titulo']);
        $entrada->setResumen($content['resumen']);
        $entrada->setTexto($content['texto']);
        //para la fecha tengo que crear un objeto fecha.
        $entrada->setFecha(\DateTime::createFromFormat('Y-m-d', $content['fecha']));
        $entrada->setEstado(1);
        //El slug lo generamos dinámicamente a partir del título
        $slugger = new AsciiSlugger();
        $slug = $slugger->slug($content['titulo']);
        $entrada->setSlug($slug);
        //persistimos la entrada
        $this->em->persist($entrada);
        //la mandamos a la base de datos
        $this->em->flush();

        return new JsonResponse(['respuesta' => 'ok']);
    }

    /**
     * @Route("/{id}", methods={"GET"})
     */
    public function detail($id): Response
    {
        $entrada = $this->entradaRepository->find($id);
        return new JsonResponse([
            'ìd' => $entrada->getId(),
            'titulo' => $entrada->getTitulo(),
            'resumen' => $entrada->getResumen(),
            'texto' => $entrada->getTexto(),
            //la fecha hay que formatearla como cadena para que la coja bien
            'fecha' => $entrada->getFecha()->format('Y-m-d'),
            'slug' => $entrada->getSlug(),
            //categoria es un objeto hay que seleccionar que propiedad suya queremos mostrar como texto.
            'categoria' => $entrada->getCategoria()->getNombre()
        ]);
    }

    /**
     * @Route("/{id}", methods={"PUT"})
     */
    public function update($id, Request $request, CategoriaRepository $categoriaRepository): Response
    {
        //obtenemos el content 
        $content = json_decode($request->getContent(), true);
        //Buscamos una entrada en concreto por id.
        $entrada = $this->entradaRepository->find($id);
        //modificamos lo que queramos
        if (isset($content['texto'])) {
            $entrada->setTexto($content['texto']);
        }
        if (isset($content['resumen'])) {
            $entrada->setResumen($content['resumen']);
        }
        //Como el slug depende del titulo si modificamos este, tb tenemos que refrescar el slug
        if (isset($content['titulo'])) {
            $entrada->setTitulo($content['titulo']);
            $slugger = new AsciiSlugger();
            $slug = $slugger->slug($content['titulo']);
            $entrada->setSlug($slug);
        }
        //como antes he de convertir la cadena fecha que recibo en un objeto fecha. Y así ya se lo puedo asignar a la entrada
        if (isset($content['fecha'])) {
            $fecha = \DateTime::createFromFormat('Y-m-d', $content['fecha']);
            $entrada->setFecha($fecha);
        }
        //Aquí recibo una cadena tb, no un objeto que es lo que necesito para asignarlo a la entrada.
        if (isset($content['categoria'])) {
            $categoria = $categoriaRepository->findOneBy(['nombre' => $content['categoria']]);
            $entrada->setCategoria($categoria);
        }
        $this->em->flush();

        return new JsonResponse(['update' => 'ok']);
    }

    /**
     * @Route("/{id}", methods={"DELETE"})
     */
    public function delete($id): Response
    {
        $entrada = $this->entradaRepository->find($id);
        $this->em->remove($entrada);
        $this->em->flush();

        return new JsonResponse(['delete' => 'ok']);
    }
}
