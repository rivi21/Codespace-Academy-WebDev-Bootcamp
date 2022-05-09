<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

$array = [10, 20, 30, 40];
echo $array[2] . "<br>";

# Agrgar un elemento al array

$array[4] = 50;
echo $array[4] . "<br>";

# PHP es lo bastante inteligente como para no necesitar el indice que le queremos
# asignar y deduce que el índice es el siguiente que tocaría.

$array[] = 60;
echo $array[5] . "<br>";

# Así podemos definir el mismo array de esta manera.

$arrayBis[] = 10;
$arrayBis[] = 20;
$arrayBis[] = 30;
$arrayBis[] = 40;
$arrayBis[] = 50;
$arrayBis[] = 60;

# PHP nos permite almacenar en un array distintos tipos de datos

$arrayMix = ["Javi", 45, 1976, true];

# PHP nos permite tb. usar índices de tipo string dentro de nuestro array. En 
# este caso ya no podemos usar los índices por número.
# Esto es muy útil para recuperar datos de la BBDD

$datos = [
    "nombre" => "Javier Rivas",
    "email" => "javiojitos@gmail.com",
    "móvil" => "664958233"
];
echo $datos["email"] . "<br>";

/* ---ARRAYS MUTIDIMENSIONALES--- */

# Para almacenar datos de varias personas en un array

$data = [
    [
        "nombre" => "Javier Rivas",
        "email" => "javi@gmail.com",
        "móvil" => "666111111",
        "direccion" => [
            "país" => "España",
            "ciudad" => "Valencia"
        ]
    ],

    [
        "nombre" => "Marina Navarro",
        "email" => "marina@gmail.com",
        "móvil" => "666222222"
    ],

    [
        "nombre" => "Carmen Cárdenas",
        "email" => "carmen@gmail.com",
        "móvil" => "666333333"
    ]
];
# Para recuperar el nombre del primer registro 
# Las primeras [] son para el índice del elemento que queramos del array exterior
# Las otras segun profundicemos en cada nivel

echo $data[1]["móvil"], "<br>";
echo $data[0]["direccion"]["ciudad"] . "<br>";

# para imprimir los datos de todos los usuarios uno debajo de otro

foreach ($data as $item) {
    echo $item["nombre"] . "<br>";
    echo $item["email"] . "<br>";
    echo $item["móvil"] . "<br>";

    echo "<hr>";
}

/* ---FUNCIONES PARA ARRAYS--- */

$arrayFunc = [1, 2, 3];

# para guardar cada elemento de una array en una variable distinta

list($a, $b, $c) = $arrayFunc;
echo $b . "<br>";

# para almacenar en nuestroa rray un intervalo de números. 

$arrayFunc = range(10, 20); # colocamos los extremos en los params
var_dump($arrayFunc);
echo "<br>";
echo $arrayFunc[5] . "<br>";

# para saber el nº de elementos de un array

echo count($arrayFunc) . "<br>";

# para saber si algún elemento se encuentra dentro del array

$arrayFunc = ["javi", "Carmen", "Marina", "Santiago"];

if(in_array("Marina", $arrayFunc)){
    echo "El valor buscado está dentro del array <br>";
}else{
    echo "El valor buscado no está en el array <br>";
}

# para borrar algun elemento del array

unset($arrayFunc[2]); # Si no ponemos el índice se elimina todo el array.

if(in_array("Marina", $arrayFunc)){
    echo "El valor buscado está dentro del array <br>";
}else{
    echo "El valor buscado no está en el array <br>";
}

/* NOTA: MIRAR EL RESTO DE FUNCIONES EN LA DOCUMENTACIÓN */