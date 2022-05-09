<?php

/* promoción de las propiedades del constructor */

class Trabajador
{
    # Hasta PHP7 definíamos así las propiedades de una clase: 1º las guardamos en una variable
    # y despues las asignamos a las propiedades:
    // public $nombre, $apellido1, $apellido2, $dni;
    // public function __construct($nombre, $apellido1, $apellido2, $dni)
    // {
    //     $this->nombre = $nombre;
    //     $this->apellido1 = $apellido1;
    //     $this->apellido2 = $apellido2;
    //     $this->dni = $dni;
    // }
    
    # En PHP8 podemos definir el tipo de las props y almacenarlas dentro del constructor.
    # sin tener que asignarlas luego, ahorrando lineas de código
    public function __construct(public $nombre, public $apellido1, public $apellido2, public $dni)
    {
    }
    public function imprimirDatos()
    {
        echo "Nombre: " . $this->nombre . "<br>";
        echo "Apellido 1º: " . $this->apellido1 . "<br>";
        echo "Apellido 2º: " . $this->apellido2 . "<br>";
        echo "Dni: " . $this->dni . "<br>";
    }
}

/* Atributos con nombre */

# Hasta PHP7 tenía que respetar el orden al instanciar el objeto
$trabajador = new Trabajador("Javi", "Navarro", "Rivas", "987654321");
$trabajador->imprimirDatos();
echo "<br>";
# En PHP8 aunque cambiemos el orden de los atributos al hacer la instancia, como van nombrados, me los imprime bien
$trabajadorPHP8 = new Trabajador(apellido1:"Rivas", apellido2:"Navarro", nombre:"Javi",  dni:"987654321");
$trabajadorPHP8->imprimirDatos();