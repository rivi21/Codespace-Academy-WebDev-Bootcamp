<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class MakeExampleController extends AbstractController
{
    /**
     * @Route("/make/example", name="make_example")
     */
    public function index(): Response
    {
        return $this->render('make_example/index.html.twig', [
            'controller_name' => 'MakeExampleController',
        ]);
    }
}
