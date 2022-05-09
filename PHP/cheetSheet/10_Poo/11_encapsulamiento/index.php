<?php

class MyClass
{
    public $public = "public";
    protected $protected = "protected";
    private $private = "private";

    function printHello()
    { # si no definimos el tipo del método, PHP lo considera público
        # Podemos definir los métodos tb como públicos, protegidos o privados
        echo $this->public . "<br>";
        echo $this->protected . "<br>";
        echo $this->private . "<br>";
    }
}

$obj = new MyClass;
# No podemos acceder directamente a ninguna propiedad o método privado o protegido
# Tendremos que acceder a través de un método público

$obj->printHello();

# El proceso de definir como público, protegido o privado se llama ENCAPSULAMIENTO

/* DIFERENCIA PROTEGIDA/PRIVADA */

class MyClass2 extends MyClass
{

    public $public = "public 2";
    protected $protected = "protected 2";

    function printHello()
    {
        echo $this->public . "<br>";
        echo $this->protected . "<br>";
        echo $this->private . "<br>";
    }
}

$obj2 = new MyClass2;
$obj2->printHello(); 
# Al hacer esto no se imprime la private. La otras si.

# La PRIVADA solo puede ser accedida desde la clase padre. 
# Al querer acceder a ella desde un método sobreescrito. 
# que pertenece a la hija, no nos deja.

# La PROTEGIDA puede ser accedida desde las clases hijas o extendidas además de la clase padre

# La PÚBLICA desde cualquier punto

# Podemos modificar propiedades públicas y protegidas pero no las privadas
