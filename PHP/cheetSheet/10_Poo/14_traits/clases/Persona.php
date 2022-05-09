<?php

class Persona
{
    public $nombre, $edad;
    public $apellido1, $apellido2;
    
    public function setNombre($nombre)
    {   
        $this->nombre = mb_strtolower($nombre);
    }

    public function getNombre()
    {
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

/* HERENCIA MÚLTIPLE CON TRAITS */

trait LatinoAmericano
{
    public function saludoLatinoAmericano(){
        echo "Este es un saludo Latinoamericano";
    }
    public function saludo(){
        echo "Hola desde el trait LatinoAmericano";
    }
}

class Colombiano extends Persona
{
    use LatinoAmericano;
    public function saludo()
    {
        echo " Hola desde la clase hija Colombiano";
    }
}

# OJO!!! LOS TRAIT NO SE PUEDEN INSTANCIAR. 
# SOLO SIRVEN PARA EXTENDER PROPIEDADES Y MÉTODOS DE UNA DETERMINADA CLASE

/* PRECEDENCIA */

# Cuando implementamos un trait este sobreescribe cualquier método de la clase padre 
# con el mismo nombre: Si imprimimos la función saludo() dará Hola mundo y no Hola.
# Si definimos otro método saludo() en la clase hija, Este precede a los otras dos

# PRECEDENCIA: Metodo hija > Método trait > Método padre

#Tb se puede usar varios trait en una sola clase:

trait A
{
    public function decirHola()
    {
        echo "Hola";
    }
    public function saludoTrait()
    {
        echo "Hola desde el trait A";
    }
}
trait B
{
    public function decirMundo()
    {
        echo " mundo";
    }
    public function saludoTrait()
    {
        echo "Hola desde el trait B";
    }
}
# Si dos trait tienen métodos con el mismo nombre, hay que elegir uno xq si no entran 
# en conflicto. Para ello 
class Argentino extends Persona
{
    use A, B {
        B::saludoTrait insteadof A;
    }
}
#Tb. podemos cambiar la visibilidad de un método de un trait
trait C
{
    protected function saludoProtegido()
    {
        echo "Hola protegido cambiado a público";
    }
}
class Boliviano extends Persona
{
    use C {
        saludoProtegido as public;
    }
}

# Tb podemos hacer uso de traits compuestos de otros traits

trait D{
    use A, C{
        saludoProtegido as public;
    }   
}

class Uruguayo extends Persona
{
    use D;
}

# Tb podemos definir métodos abstractos en los traits

trait E{
    public function decirHola()
    {
        echo "Hola";
    }   
}
trait F{
    public function decirMundo()
    {
        echo " mundo";
    }
    abstract public function saludar();
}
trait G{
    use E, F;
    public function saludar(){
        $this->decirHola();
        $this->decirMundo();
    }
}

class Panameño extends Persona
{
    use G;
}