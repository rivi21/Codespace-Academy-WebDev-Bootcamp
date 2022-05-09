<?php

namespace App\Controller\Blog;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;

//Este es el  controlador de la Api y por eso devolvemos un json, no un render, para hacer el CRUD.
// por eso no haría falta realmente que extendiera de AbstractController
class ApiController extends AbstractController
{
    /**
     *@Route("/api/entrada", methods={"GET"})
     */
    public function list() //Muestra todas las entradas
    {
        //devuelve un json.
        return new JsonResponse(['method' => 'GET']);
    }

    /**
     *@Route("/api/entrada", methods={"POST"})
     */
    public function add() //Crea una entrada
    {
        return new JsonResponse(['method' => 'POST']);
    }

    /**
     *@Route("/api/entrada/{id}", methods={"GET"})
     */
    public function detail($id) //devuelve la información de una entrada
    {
        return new JsonResponse(['function' => 'detail']);
    }

    /**
     *@Route("/api/entrada/{id}", methods={"PUT"})
     */
    public function update() //Actualiza una entrada
    {
        return new JsonResponse(['function' => 'update']);
    }

    /**
     * @Route("/api/entrada/{id}", methods={"DELETE"})
     */
    public function delete() //Borra una entrada
    {
        return new JsonResponse(['function' => 'delete']);
    }
}
