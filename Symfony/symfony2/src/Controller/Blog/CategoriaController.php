<?php

namespace App\Controller\Blog;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

/**
* @Route("/admin/categoria")
*/
class CategoriaController extends AbstractController
{
    /**
     *@Route("")
     */
    public function index()
    {
        return $this->render('admin/index.html.twig');
    }
    /**
     *@Route("/add")
     */
    public function add()
    {
        return $this->render('admin/add.html.twig');
    }
    /**
     *@Route("/edit/{id}")
     */
    public function edit($id)
    {
        return $this->render('admin/edit.html.twig');
    }
    /**
     *@Route("/delete/{id}")
     */
    public function delete($id)
    {
        //redirigimos a la ruta de index. Esta ruta "app_blog_etc...la podemos ver en debug:router
        return $this->redirectToRoute('app_blog_categoria_index');
    }
}  
