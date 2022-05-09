<?php
    $nombre = "Javier Rivas Navarro";
    $Nombre = "otro nombre";

    define("CURSO", "php 8 desde cero");
    define("USUARIO_1", "Javi");
    define("ANIMALES", [
        "perro",
        "loro",
        "gato",
    ]);
    /* echo ANIMALES[2]; */
    if(defined("CURSO")){
        echo "si se ha definido";
    }
    echo"<br>";
    /* variables globales definidas por PHP */
    echo "Mi versión de PHP es " . PHP_VERSION;
    echo"<br>";
    echo " Mi Sistema operativo es " . PHP_OS;
    echo"<br>";
    echo PHP_EXTENSION_DIR;/* nos da la ruta de las extensiones */
    echo"<br>";
    echo PHP_SAPI;/* NOS DA LA API DEL SERVIDOR */
    echo"<br>";
    echo __LINE__;/* nos retorna en que linea se está ejecutando la */
    echo"<br>";
    echo __FILE__;/* directorio del archivo en el cual me encuentro */
?>

