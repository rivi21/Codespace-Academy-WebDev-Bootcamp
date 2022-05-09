<?php

namespace App\Controller\Blog;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class DefaultController extends AbstractController
{
    /**
     * @Route("/blog")
     */
    public function index()
    {
        return $this->render('blog/index.html.twig');
    }
    /**
     * @Route("/blog/{slug}")
     */
    public function entrada($slug)
    {
        return $this->render('blog/entrada.html.twig');
    }
    /**
     * @Route("/admin/login")
     */
    public function login()
    {
        
    }
}
