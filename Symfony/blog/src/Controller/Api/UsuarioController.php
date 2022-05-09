<?php

namespace App\Controller\Api;

use App\Entity\Usuario;
use App\Repository\UsuarioRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class UsuarioController extends AbstractController
//NOTA: SI ESCRIBIMOS LA RUTA EN EL NAVEGADOR, COGERÁ LA PRIMERA FUNCIÓN PORQUE EL 
//NAVEGADOR SOLO HACE PETICIONES GET
{
    /**
     * @Route("/api/usuario", name="api_usuario", methods={"GET"})
     */
    public function index(UsuarioRepository $usuarioRepository): Response
    {   //Rellenamos la variable con el array de entidades(objetos de tipo usuario) que nos da el findAll()
        $usuarios = $usuarioRepository->findAll();
        //Esto nos da un array  de objetos vacios xq no sabe interpretarlo.  
        //Para solucionarlo creamos nuestra propia respuesta:
        //Creamos un array vacio
        $response = [];
        //Recorremos nuestra lista de entidades
        foreach ($usuarios as $usuario) {
            //Para cada entidad de la lista creamos un array con los campos que yo quiera dar(el password no lo pasamos xej.)
            $response[] = [
                'id' => $usuario->getId(),
                'email' => $usuario->getEmail(),
                'nombre' => $usuario->getNombre(),
                'perfil' => $usuario->getPerfil()
            ]; //Esto como hacer un push.
        }
        return new JsonResponse([
            'result' => 'ok con GET',
            'content' => $response
        ]);
    }
    //NOTA VIP: PARA GENERAR CONSULTAS DOCTRINE TIENE TRES FORMAS: LAS FUNCIONES find(), EL QUERYBUILDER,
    //Y EL LENGUAJE DQL

    //COMO NORMA NUNCA DEBERÍAMOS CREAR UNA CONSULTA FUERA DE LOS REPOSITORIES. EN EL CONTROLADOR SOLO 
    //IMPORTAREMOS LA CONSULTA PARA USARLA, COMO EL find(), PERO LA RESPONSABILIDAD DE GESTIONARLA SERÁ DEL 
    //REPOSITORY (SEGUN EL MVC)

    //Modelo: Clase Repository: Gestiona las consultas y peticiones
    //Vista: Clase Twig: Diseña la vista
    //Controlador: Clase Controller: Recibe la petición, prepara la vista y lanza la vista

    //-------------EJEMPLO CON FUNCIONES FIND()----------------

    /**
     * @Route("/api/usuario/lf", methods={"GET"})
     */
    public function listFind(Request $request, UsuarioRepository $usuarioRepository): Response
    {
        $perfil = $request->query->get('perfil');
        //Si es null, no le paso ningún parámetro, me dará la lista completa ordenada por nombre y 
        //si no lo es, filtrará por el valor del perfil, ordenando tb por nombre los resultados filtrados.
        //$usuarios = $usuarioRepository->findByPerfilDql($perfil)---con dql---
        if ($perfil == null) {
            $usuarios = $usuarioRepository->findBy([], ['nombre' => 'ASC']);
        } else {
            $usuarios = $usuarioRepository->findBy(['perfil' => $perfil], ['nombre' => 'ASC']);
        }
        $response = [];
        foreach ($usuarios as $usuario) {
            $response[] = [
                'email' => $usuario->getEmail(),
                'nombre' => $usuario->getNombre(),
                'perfil' => $usuario->getPerfil()
            ];
        }
        return new JsonResponse([
            'result' => 'ok con GET',
            'content' => $response
        ]);
    }

    //EJEMPLO CON -----QUERYBUILDER----- EN EL UsuarioRepository() PARA HACER UN FILTRO DE BÚSQUEDA:
    /**
     * @Route("/api/usuario/qb", methods={"GET"})
     */
    //Obtenemos el parámetro del objeto Request. En Request tenemos, entre otras, la colección query(query string) 
    //que nos da la lista de parametros que le estoy pasando en la url.(Lo que hay después de "?")
    public function listIWant(Request $request, UsuarioRepository $usuarioRepository): Response
    {
        //En la url pasamos un parámetro (?perfil = asd) que lo guarda en la variable perfil
        $perfil = $request->query->get('perfil');
        //pasamos la variable como parámetro a la función findByPerfil
        $usuarios = $usuarioRepository->findByPerfil($perfil);
        $response = [];
        foreach ($usuarios as $usuario) {
            $response[] = [
                'email' => $usuario->getEmail(),
                'nombre' => $usuario->getNombre(),
                'perfil' => $usuario->getPerfil()
            ];
        }
        return new JsonResponse([
            'result' => 'ok con GET',
            'content' => $response
        ]);
    }

    //------------------------------Creamos la funcion Añadir (POST)------------------------------------

    /**
     * @Route("/api/usuario", methods={"POST"})
     */
    public function añadir(Request $request, EntityManagerInterface $em)
    {
        //Obtenemos el contenido de la petición, lo decodificamos, y lo guardamos en una variable
        //Después creamos el nuevo usuario y le pasamos los contenidos. Json_decode tiene dos opciones 
        //para entregar los datos de la petición: Objeto / Array.

        //Objeto:
        // $content = json_decode($request->getContent());
        // $usuario = new Usuario();
        // $usuario->setEmail($content->email);

        //Array:
        $content = json_decode($request->getContent(), true);

        $usuario = new Usuario();
        $usuario->setEmail($content['email']);
        $usuario->setNombre($content['nombre']);
        $usuario->setPassword($content['password']);
        $usuario->setPerfil($content['perfil']);
        $usuario->setRoles($content['roles']);

        //Necesitamos tener acceso al EntityManager para hacer el persist y el flush.Hay dos formas: 
        //O hacemos el constructor global a la clase y así lo tenemos disponible para todas las funciones
        // del controlador, o se lo pasamos especificamente a cada función.
        $em->persist($usuario);
        $em->flush();

        return new JsonResponse([
            'result' => 'ok',
            'content' => $content //Aquí mostramos el contenido
        ]);
    }

    //----------------------------Creamos la funcion Modificar (PUT):----------------------------------

    /**
     * @Route("/api/usuario/{id}", methods={"PUT"}) 
     */
    public function mofificar($id, Request $request, UsuarioRepository $usuarioRepository,  EntityManagerInterface $em)
    {

        $content = json_decode($request->getContent(), true);
        $usuario = $usuarioRepository->find($id);
        //Para comprobar los campos que vienen con información uso la función isset()
        //Hay una clave email dentro de este content(el json que recibo)? hago el set : no hago nada
        //comprobamos todos los campos uno a uno y si tienen valor lo modificamos y si no, no hacemos nada
        if (isset($content['email'])) {
            $usuario->setEmail($content['email']);
        }
        if (isset($content['nombre'])) {
            $usuario->setNombre($content['nombre']);
        }
        if (isset($content['perfil'])) {
            $usuario->setNombre($content['perfil']);
        }
        if (isset($content['password'])) {
            $usuario->setPassword($content['password']);
        }
        if (isset($content['roles'])) {
            $usuario->setRoles($content['roles']);
        }
        $em->flush();

        return new JsonResponse([
            'result' => 'ok'
        ]);
    }

    // -------------------Creamos la función DELETE / BORRAR---------------------------

    /**
     * @Route("/api/usuario/{id}", methods={"DELETE"})
     */
    public function borrar($id, UsuarioRepository $usuarioRepository, EntityManagerInterface $em)
    {
        $usuario = $usuarioRepository->find($id);
        $em->remove($usuario);
        $em->flush();

        return new JsonResponse([
            'result' => 'ok'
        ]);
    }
}

//NOTA FINAL: ESTAS SON LAS CUATRO OPERACIONES BÁSICAS DEL CRUD A TRAVÉS DE LA API. 
//SOLO FALTARÍA AÑADIRLE LA SEGURIDAD PARA QUE AL HACER LA PETICIÓN A LA API, ME TRAIGA UNA CABECERA
//CON EL TOKEN QUE NECESITO Y YA TENDRÍAMOS UN BACKEND LISTO PAR IR A PRODUCCIÓN.
