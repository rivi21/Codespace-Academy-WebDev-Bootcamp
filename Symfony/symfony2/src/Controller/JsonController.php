<?php

namespace App\Controller;

use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/test")
 */
class JsonController
{
    #Para devolver una respuesta json, a partir de un array, usaremos JsonResponse.
    //las rutas se pueden nombrar (name="api"). Mirar en php bin/console debug:router)
    //Tb se les puede asignar métodos específicos: methods=("PUT")
    /**
     * @Route("/api/{param}", name="api", methods={"GET","POST"}) 
     */
    public function json(Request $request, $param = 'xxxxxx')
    // con el objeto Request pasamos parámetros de la query
    {
        $response = [
            'data1' => 'valor1',
            'data2' => 'valor2',
            'array' => [
                'v1' => 2,
                'v2' => false,
            ],
            'query' => $request->query->all(), //El query del Request es la colección de parámetros que le pasamos en la url
            //La función all() devuelve un array con todos los parámetros del query

            'param' => $param, //Tb podemos psaarle parámetros dentro de la propia url
            //Si no le pongo nada en la url, me cogerá el que tiene por defecto (Aquí 'xxxxxx')

            'post' => json_decode($request->getContent(), true)
            //para capturar los parámetros POST que van dentro del body
            //json_encode codifica a formato json
            //json_decode coge un json y decodifica a: objetos con false y array con true
        ];
        return new JsonResponse($response);
    }
    #ejemplo para capturar info que viene dentro del objeto Request: Hacer un controlador que reciba parametros de GET, POST(en el body) 
    //y vamos a devolver un json que escriba la url completa, el método usado, que parámetros vienen en la url
    //que hay en el body, las cookies, datos de la cache, etc. Mirar la documentación
    /**
     * @Route("/info")
     */
    public function test(Request $request)
    {
        $response = [
            'url' => $request->getUri(),
            'method' => $request->getMethod(),
            'query' => $request->query->all(),
            'body' => json_decode($request->getContent(), true),
            'cookies' => $request->cookies->all(),
            'attributes' => $request->attributes->all(),
            'server' => $request->server->all()
        ];
        return new JsonResponse($response);
    }
    //para convertir los resultados en una cadena, el Request tiene el método __toString
    /**
     * @Route("/test2")
     */
    public function test2(Request $request)
    {
        return new Response( $request->__toString());
    }

    //-----NOTA: aqui lo que estamos haciendo es capturar la info que nos viene en una url-----

    # ejemplo para redirigir a otra página usamos RedirectResponse que devuelve un código 300 redirigiendo a la url
    # que le hemos indicado. Aquí nos mandaría a google
    /**
     * @Route("/google")
     */
    public function redirect()
    {
        return new RedirectResponse('https://google.com');
    }
    
    #ejemplo de formulario (Usamos el Form.html en la carpeta public. Esto no cumple el esquema MVC,
    # para renderizar html desde el servidor usaremos el motor de plantillas Twig)
    # El método para un form es el POST xq si lo hacemos con GET enviará la info del formulario
    # como parámetros dentro de la url, a la vista de cualquiera porque la url no se encripta. Con POST se envía en el body, que 
    # si es un protocolo https se encriptaría y nadie podría verlo. En http no se encripta tampoco, por eso el protocolo http 
    # no es seguro.
    /**
     * @Route("/form")
     */
    public function form(Request $request)
    {
        return new JsonResponse([

            'response' => 'ok',
            'form' => $request->request->all(),//aqui mostramos los datos del formulario
            'query' => $request->query->all(),//aquí una segunda colección con los parámetros de la url          
        ]);
    }
}
