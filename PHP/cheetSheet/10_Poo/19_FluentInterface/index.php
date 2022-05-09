<?php

# Para poder llamar a varios métodos pero solo una vez al objeto, basta
# con retornar this en cada método, e ir concatenándolos. De esta manera al devolvernos al objeto
# cada método, no tenemos que volver a llamarlo cada vez. El código queda mas limpio y legible
# Así es  como trabajan los frameworks 

class Humano
{
    public $nombre, $apellido1, $apellido2, $dni;

    public function setNombre($nombre)
    {
        $this->nombre = $nombre;
        return $this;
    }

    public function setApellidos($apellido1, $apellido2)
    {
        $this->apellido1 = $apellido1;
        $this->apellido2 = $apellido2;
        return $this;
    }

    public function setDni($dni)
    {
        $this->dni = $dni;
        return $this;
    }

    public function imprimirDatos()
    {
        echo "Nombre: " . $this->nombre . "<br>";
        echo "Apellido 1º: " . $this->apellido1 . "<br>";
        echo "Apellido 2º: " . $this->apellido2 . "<br>";
        echo "Dni: " . $this->dni . "<br>";
    }
}

$humano = new Humano;
$humano->setNombre("Javier")
    ->setApellidos("Rivas", "Navarro")
    ->setDni("987654321")
    ->imprimirDatos();
