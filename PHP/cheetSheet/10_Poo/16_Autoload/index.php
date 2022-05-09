<?php

# para usar los documentos los importamos 

use Controllers\CourseController;
use Models\Course;

/* require_once("Controllers/CourseController.php");
require_once("Models/Course.php"); */

# Pero a medida que vaya creciendo nuestro proyecto estos require van a crecer mucho
# por eso sería interesante que se importara automáticamente el require en el momento 
# en que llamamos a una clase
# para eso usamos una funcion de PHP que detecta cada vez que nosotros llamamos a una clase
spl_autoload_register(function($clase){
    // echo $clase; 
    # esto me imprime el namespace. Pero tenemos que cambiar el slash de orientación xq así no vale
    # y añadir .php para completar la ruta al documento.
    // echo str_replace("\\", "/", $clase) . ".php";
    # escapamos el primer slash por ser un carácter especial y lo queremos como string.
    # una vez tenemos la cadena pedimos que nos traiga el archivo
    require_once(str_replace("\\", "/", $clase) . ".php");
});

$course = new Course;
# Al haber ejecutado la función con la llamada a la clase ya hemos importado el documento y podemos 
# usar los métodos de la clase
$course->saludar();

/*  OJO!! PARA QUE ESTO FUNCIONE EL ARCHIVO Y LA CLASE QUE ESTÁ DENTRO DEBEN LLEVAR EL MISMO NOMBRE
    ESTA ES LA RAZÓN POR LA CUAL EN LOS FRAMEWORKS COMO SYMFONY O LARAVEL SIEMPRE EL ARCHIVO Y LA 
    CLASE LLEVAN EL MISMO NOMBRE Y LOS NAMESPACE DE ESTOS COINCIDEN CON LAS CARPETAS DONDE ESTÁN INCLUIDOS
*/

# Vemos si funciona con una clase de otro archivo:
$course_controller = new CourseController;
echo "<br>";
$course_controller->saludar();
