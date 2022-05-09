<?php

namespace App\Controller\Blog;

use App\Repository\CategoriaRepository;
use App\Repository\EntradaRepository;
use App\Repository\EspacioRepository;
use App\Repository\UsuarioRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class DefaultController extends AbstractController
{
    /**
    * @Route("/blog")
    */
    public function index(EntradaRepository $entradaRepository)
    // Usamos la funcion para encontrar las últimas entradas que hemos creado en EntradaRepository
    {
        $entradas = $entradaRepository->findLatestEntries(4);
        //como 2º param. le pasamos al twig lo que queremos que pinte
        return $this->render('blog/index.html.twig', [
            'entradas' => $entradas
        ]);
    }

    /**
    * @Route("/test1/{idEspacio}")
    */
    public function test1($idEspacio, EntradaRepository $entradaRepository, EspacioRepository $espacioRepository)
    //LISTADO DE ENTRADAS PARA UN ESPACIO
    {    
        // onsulta para obtener ael espacio 
        $espacio = $espacioRepository->find($idEspacio);
        //Obtengo las entradas vinculadas a ese espacio
        $entradas = $entradaRepository->findByEspacio($espacio);
        //como 2º param. le pasamos al twig lo que queremos que pinte
        return $this->render('blog/index.html.twig', [
            'entradas' => $entradas
        ]);
    }

    /**
    * @Route("/test2")
    */
    public function test2(EntradaRepository $entradaRepository, CategoriaRepository $categoriaRepository)
    //LISTADO DE ENTRADAS PARA VARIAS CATEGORIAS
    {    
        
        $categoria1 = $categoriaRepository->find(1);
        $categoria2 = $categoriaRepository->find(2);
        $categorias = [$categoria1, $categoria2]; 
        //Obtengo las entradas vinculadas alas categorias
        $entradas = $entradaRepository->findByCategoria($categorias);
        //como 2º param. le pasamos al twig lo que queremos que pinte
        return $this->render('blog/index.html.twig', [
            'entradas' => $entradas
        ]);
    }

    /**
    * @Route("/test3/{idEspacio}/{idUsuario}")
    */
    public function test3($idEspacio, $idUsuario, EntradaRepository $entradaRepository, EspacioRepository $espacioRepository, UsuarioRepository $usuarioRepository)
    {    
        //LISTADO DE ENTRADAS DE UN USUARIO EN UN ESPACIO
        $usuario = $usuarioRepository->find($idUsuario);
        $espacio = $espacioRepository->find($idEspacio);
        $entradas = $entradaRepository->findByUsuarioEspacio($usuario, $espacio);
        
        return $this->render('blog/index.html.twig', [
            'entradas' => $entradas
        ]);
    }


    /**
     * @Route("/blog/{slug}", name="blog_entrada")
     */
    public function entrada($slug, EntradaRepository $entradaRepository)
    {   //obtenemos los datos de una entrada a partir del slug
        $entrada = $entradaRepository->findOneBy(['slug' => $slug]);
        //si muestar un error 500 para que no lo vea el usuario le lanzamos la excepción con el throw 
        if ($entrada == null) {
            throw $this->createNotFoundException('Entrada no encontrada');//
        }
        return $this->render('blog/entrada.html.twig', [
            'entrada' => $entrada
        ]);
    }
    /**
     * @Route("/admin/login")
     */
    public function login()
    {
    }
}
