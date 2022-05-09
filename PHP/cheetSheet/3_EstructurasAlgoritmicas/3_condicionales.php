<?php

$a = 4;
$b = 4;

echo "primer parrafo <br>";

if($a > $b){
    echo "el valor de a es mayor que el valor de b <br>";
}elseif($a < $b){
    echo "el valor de a es menor que el valor de b <br>";
}else{
    echo "el valor de a es igual que el valor de b <br>";
}

echo "tercer parrafo <br>";
/* OPERADORES TERNARIOS */
    # nos permiten escribir condicionales en menos lineas de código
    $valor = $a > $b ? 'mayor' : 'menor';
    # condicionales anidadas con operadores ternarios
    # abrimos un paréntesis en la seguna respuesta y escribimos otro condicional ternario
    $valorDos = $a > $b ? 'mayor' : ($a < $b ? 'menor' : 'igual');

    echo "el valor de a es $valorDos que el valor de b <br>";

?>