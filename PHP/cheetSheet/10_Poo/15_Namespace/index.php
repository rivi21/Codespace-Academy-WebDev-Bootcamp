<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

# El namespace se usa cuando nuestro proyecto crece y tenemos que distribuirlo 
# por diferentes carpetas y subcarpetas.

# Si queremos usar los documentos Humano.php dentro de mi documento principal, los incluimos
require_once("Carpeta1/Humano.php");
require_once("Carpeta2/Prueba/Humano.php");
# pero esto nos da un conflicto porque las dos clases se llaman igual.
# Para solucionarlo podemos cambiar el nombre de la 2ª clase, pero esto no es aconsejable porque
# al crecer la aplicación vamos a tener que usar nombres cada vez más complejos, y eso es poco práctico.
# La mejor solución es  usar los namespace ("espacios de nombre")
# por convención, el namespace de un archivo será el de su directorio raiz

# Para hacer referencia a una clase u otra hay que hacerlo conjuntamente con su namespace

$humano1 = new Carpeta1\Humano;
$humano1->saludar();
echo "<br>";
# Si no queremos poner el namespace delante, podemos definirlo globalment así y valdrá para el resto
# del documento.
# Si quisiéramos usar tb. la clase Humano de la Carpeta2 cambiamos el nombre de la segunda para que no 
# entre en conflicto. 
# Así con los namespace las clases se siguen llamndo igual en todo el proyecto y solo cambiamos nombre 
# en aquellos docus donde entren en conflicto. 
use Carpeta1\Humano;
use Carpeta2\Prueba\Humano as Humano2;

$humano2 = new Humano;
$humano2->saludar();
echo "<br>";
$humano2 = new Humano2;
$humano2->saludar();



