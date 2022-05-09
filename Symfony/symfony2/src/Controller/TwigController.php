<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/twig")
 */
class TwigController extends AbstractController
// La clase AbstractController nos la da Symfony con muchas herramientas o utilidades que podemos usar en nuestro controlador
// que nos ayudan mucho. No es obligatorio, pero x ej para renderizar páginas con Twig o cualquier motor de plantillas
// que tengamos configurado en Symfony, viene muy bien. Se usan los $this como en las clases de javaScript para acceder a esas herramientas
{
    /**
     * @Route("/test1")
     */
    public function test1()
    {
        // Esto Es lo mismo que lo de abajo en el render pero en formato json
        $json = '{"param1":"VALOR1","array":{"valor1":{"key":"value1json1"},"valor2":{"key":"value2json1"}}}';
        /* Decodificamos en un array */
        $json2 = json_decode('{"param1":"VALOR1","array":{"valor1":{"key":"value1json2"},"valor2":{"key":"value2json2"}}}', true);

        $array2 = [
            'key1' => [
                'key11' => 'value11',
                'key12' => 'value12',
                'key13' => 'value13'
            ],
            'key2' => [
                'key21' => 'value21',
                'key22' => 'value22'
            ]
        ];
        // render nos pinta la vista. Pide una cadena, con la vista que quiero pintar, mas un Array de parámetros
        // La vista Symfony la busca en el directorio templates. 
        //En lugar de devolver una resùesta nuestra, devolvemos la respuesta que genera la función render,
        //que está dentro de abstractcontroller que renderiza un twig.
        return $this->render(
            'clases2y3/test1.html.twig'/* esto es la vista */,
            [/* y esto el array */
                'param1' => 'VALOR1',
                'array' => [
                    'valor1' => [
                        'key' => 'value1array'
                    ],
                    'valor2' => [
                        'key' => 'value2array'
                    ]
                ],
                'array2' => $array2,
                //Así cambiamos el json para despues pintarlo en pantalla como queramos
                'json' => json_decode($json),
                //si ya estuviera decodificado sería así
                'json2' => $json2,
                'fecha' => new \DateTime(),
                /* para una fecha que no sea la actual */
                'fecha2' => \DateTime::createFromFormat('Y-m-d H:i:s', '2012-04-07 7:37:02'),
                /*para renderizar html hay que usar el filtro raw  */
                'html' => '<h4>Titulo</h4><p><b>prueba</b> de html</p>',
            ]
        );
    }

    /**
     * @Route("/test2")
     */
    public function test2()
    {
        return $this->render('clases2y3/test2.html.twig', [
            'param1' => 'VALOR2'
        ]);
    }
}
