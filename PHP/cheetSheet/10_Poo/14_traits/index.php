<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

require_once("clases/Persona.php");

/* HERENCIA MÚLTIPLE SIMULADA CON TRAITS */

# La herencia múltiple consiste en que una clase hija pueda heredar de distintas clases padre
# Esto no es posible en PHP (si en C++). En PHP la herencia es simple.
# Para simular herncia múltiple hacemos uso de los TRAITS

$colombiano = new Colombiano;
echo $colombiano->saludoLatinoAmericano() . "<br>";

$argentino = new Argentino;

$argentino->decirHola();
$argentino->decirMundo();
echo "<br>";
$argentino->saludoTrait();
echo "<br>";
$boliviano = new Boliviano;
$boliviano->saludoProtegido();
echo "<br>";
$uruguayo = new Uruguayo;
$uruguayo->saludoTrait();
$uruguayo->saludoProtegido();
echo "<br>";
$panameño = new Panameño;
$panameño->saludar();