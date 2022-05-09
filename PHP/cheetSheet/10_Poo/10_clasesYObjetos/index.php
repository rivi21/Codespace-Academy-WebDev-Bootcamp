<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

/* ---COMO CREAR UN OBJETO--- */

# para instanciar objetos, primero tenemos que importar la clase: 

require_once("clases/Persona.php");

#para instanciar el objeto hacemos:
# Al haber descrito el método constructor hemos de pasarle los parámetros al hacer la instancia. Si no, 
# podríamos otorgar valores a las propiedades como en la linea 12
$persona1 = new Persona("JAvieR", "Rivas", 45);

/*# para asignar valores a las propiedades;
$persona1->setNombre("JAvieR"); # Me guardará el nombre en minúscula "javier"
$persona1->apellido = "Rivas";
$persona1->edad = 45; 
var_dump($persona1);# así vemos la estructura del objeto
echo "<br>";*/
$persona1->setNombre("Francisco JAvieR");# Ahora podríamos usar esto para cambiar el valor del nombre
#instanciamos otro objeto de la misma clase

$persona2 = new Persona("Carmen", "Cárdenas", 34);

/* $persona2->nombre = "Carmen";
$persona2->apellido = "Cárdenas";
$persona2->edad = 34; */

echo "El nombre de la persona1 es: " . $persona1->getNombre() . "<br>";
echo "El nombre de la persona2 es; " . $persona2->nombre . "<br>";

# NOTA: Mejor acceder a las propiedades usando los getters y setters para tener controlado
# el formato de como se guardan y devuelven los datos

/* ---HERENCIA--- */

$chileno = new Chileno;

$chileno->setApellidos('Rivas', "Navarro");
echo "Ahora me imprime los apellidos al revés: " . $chileno->getApellidos() . "<br>";
var_dump($chileno);

echo "<br>";

$peruano = new Peruano;

$peruano->setApellidos("Cárdenas", "Gómez"); # Esto me imprime "Los apellidos se asignaron..."
echo "<br>";
var_dump($peruano);
echo "<br>";
