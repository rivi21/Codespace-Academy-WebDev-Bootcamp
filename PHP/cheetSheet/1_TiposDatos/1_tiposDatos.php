<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

/* INTEGER */
    $numero = 123;
/* FLOAT */
    $decimal = 123.45;
/* DOUBLE */
    $doble = 123.456567567567567567534542346567456343;
/* STRING */
    $cadena = "Hola mundo";
    /* Si queremos interpolar una variable en una cadena, usamos comillas dobles, 
    Si usamos simples, php la interpretará como cadena */
    $interpolacion = "El número elegido es el $numero";
    $cadena = 'El número elegido es el $numero';
    /* Si quiero imprimir comillas dentro de la cadena, 
    las comillas exteriores serán distintas */
    $comillas = 'El número "123" es mi favorito';
    $comillasTbVale = "El número '123' es mi favorito";
    /* si quiero imprimir dos tipos de comillas en la cadena, hay que escapar
    las que sean como las exteriores con una barra invertida delante de ellas */
    $comillasEscapadas = "Mi nombre es 'Javier' y tengo \"45\" años";
    /* Tb nos dará un error el dolar delante de una letra o palabra xq lo considera
    una variable. Lo escapamos igual */
    $variableEscapada = "Las variables se representan con \$nombre";
/* BOOLEAN */
    $bool = true;#equivale a 1 false a 0
    echo $bool;
