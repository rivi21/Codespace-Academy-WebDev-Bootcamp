<?php

namespace App\Controller\Blog;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;

class ApiController extends AbstractController
{
    /**
     *@Route("/api/entrada", methods={"GET"})
     */
    public function list()
    {
        return new JsonResponse(['method' => 'GET']);
    }
    /**
     *@Route("/api/entrada", methods={"POST"})
     */
    public function add()
    {
        return new JsonResponse(['method' => 'POST']);
    }
    /**
     *@Route("/api/entrada/{id}", methods={"GET"})
     */
    public function detail($id)
    {
        return new JsonResponse(['function' => 'detail']);
    }
    /**
     *@Route("/api/entrada/{id}", methods={"PUT"})
     */
    public function update()
    {
        return new JsonResponse(['function' => 'update']);
    }
    /**
     * @Route("/api/entrada/{id}", methods={"DELETE"})
     */
    public function delete()
    {
        return new JsonResponse(['function' => 'delete']);
    }
}
