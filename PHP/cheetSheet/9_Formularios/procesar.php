<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

# Siempre que mandamos info desde un formulario queda almacenada en unas variables globales
# Si usamos el método GET la info se almacena en $_GET si es POST queda en $_POST
# y podremos recuperarla si queremos usando el atributo name.

// $nombre = $_GET["name"];
// $nombre = $_POST["name"];

#Si no estamos seguros del método que usaremos para enviar la info entonces usamos la
# variable global $_REQUEST

$nombre = $_REQUEST["name"]; # esta forma es la mas recomendable
$edad = $_REQUEST["age"];
$sexo = $_REQUEST["sex"];
$roles = $_REQUEST["roles"]; #Aquí no hace falta indicar que es un array
$turno = $_REQUEST["turno"];
$mensaje = $_REQUEST["mensaje"];

# Para recuperar los archivos enviados usamos la variable global $_FILES
$image = $_FILES["image"];
# para indicar donde quiero que guarde los archivos enviados( en este caso
# en la carpeta imágenes) accedemos a la variable global $_SERVER y le pedimos
# que recupere la información es decir los archivos, en la ruta que le indiquemos.
# Es decir [DOCUMENT_ROOT] nos da el directorio donde estamos(/var/www/html) y a eso
# le concatenamos la ruta exacta de la carpeta donde queremos guardar el archivo
# y el nombre del archivo

$patch = $_SERVER["DOCUMENT_ROOT"] . "/curso_php8/cheetSheet/formularios/img" . "/" . $image["name"] ;

echo "<p> El nombre del usuario es: $nombre</p>";
echo "<p> La edad del usuario es: $edad</p>";
echo "<p> El sexo del usuario es: $sexo</p>";
// para mostrar todos los datos enviados en el array roles
echo "<p> Roles: </p>";

echo "<ul>";
    foreach($roles as $rol){
        echo "<li>$rol</li>";
    }
echo "</ul>";

echo "<p> El turno de trabajo es de: $turno</p>";
echo "<p> Mensaje enviado: $mensaje</p>";

/* echo $patch . "<br>"; */

/* var_dump($image); */
# Para mover la imagen de la carpeta temporal a la que yo he elegido 
# previamente en $patch usamos la función move_uploaded_file("donde está","donde quiero moverla"):
# OJO!! cambiar los permisos de la carpeta de destino a lectura y escritura
move_uploaded_file($image["tmp_name"], $patch);