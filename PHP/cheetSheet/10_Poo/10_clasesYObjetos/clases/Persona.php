<?php

# Lo primero es construir una clase (plantilla de objetos)

class Persona
{
    # definimos las propiedades de la clase

    public $nombre, $edad;
    public $apellido1, $apellido2;

    #Todos los objetos que instanciemos a partir de esta clase tendran estas tres propiedades

    # Los métodos constructores se ejecutan nada más crear el objeto. Si no tiene los parámetros 
    # esperados, no se creará el objeto
    /* public function __construct($nombre, $apellido, $edad)
    {
        $this->nombre = mb_strtolower($nombre);
        $this->apellido = mb_strtolower($apellido);
        $this->edad = mb_strtolower($edad);
    } */

    # Para controlar la forma en que guardamos los datos usamos los setters, 
    public function setNombre($nombre)
    {
        # Queremos xej. que nos guarde todo en minúsculas
        $this->nombre = mb_strtolower($nombre);
        # accedemos a la propiedad dentro de la clase usando $this
    }

    # para controlar la forma en que devolvemos los datos usamos los getters
    public function getNombre()
    {
        # Queremos xej. que nos devuelva la primera letra de cada palabra en mayúscula
        return ucwords($this->nombre);
    }

    public function setApellidos($apellido1, $apellido2)
    {
        $this->apellido1 = $apellido1;
        $this->apellido2 = $apellido2;
    }

    public function getApellidos()
    {
        return $this->apellido1 . " " . $this->apellido2;
    }
    public function saludo(){
        echo "Hola desde la clase madre Persona";
    }
}
# Estas heredan todas las propiedades y métodos de Persona y añaden sus propias propiedades.

class Chileno extends Persona
{
    public $comuna, $region;

    #Si nos interesa podemos sobreescribir métodos. 
    public function setApellidos($apellido1, $apellido2)
    {
        $this->apellido1 = $apellido2;
        $this->apellido2 = $apellido1;
    }
    # Ahora el método getApellidos() en un objeto de la clase
    # Chileno hará referencia al setApellidos de la clase Chileno y no al de la clase Persona
}

class Peruano extends Persona
{
    public $departamento, $ciudad;

    # Tb podemoes extender un método en lugar de sobreescribirlo
    public function setApellidos($apellido1, $apellido2)
    {
        parent::setApellidos($apellido1, $apellido2);
        # Extiende de la clase parent el método setApellidos añadiendo el echo siguiente
        echo "Los apellidos se asignaron con éxito";
    }
}