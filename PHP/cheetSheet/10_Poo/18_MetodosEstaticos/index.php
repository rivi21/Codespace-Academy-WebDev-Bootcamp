<?php

# Podemos definir propiedades y métodos en una clase que para ser 
# usados no necesiten instanciar un objeto

class Humano
{
    public static $nombre = "Javier Rivas";

    public static function saludar()
    {
        echo "Hola soy un método estático";
    }

    public function saludoPersonalizado()
    {
        echo "Hola " . self::$nombre;
    }
}

# para usar los estáticos solo hace falta referenciar la clase, poner :: y el nombre 
# del método o la propiedad.
echo Humano::$nombre . "<br>";
echo Humano::saludar() . "<br>";

# Si instanciamos un objeto de esa clase, este no dispone de las propiedades ni
# de los métodos estáticos, que solo pertenecen a la clase.
# Si accedemos a un método no estático, que usa una propiedad estática, para 
# referenciarla usaremos "self::nombre de la propiedad", porque si usamos $this,
# php entiende que hacemos referencia a una propiedad del objeto, y como esta es
# estática, no le pertenece a este y nos dará error.
$humano = new Humano;
$humano->saludoPersonalizado();
echo "<br>";

# Para acceder a una prop estática de la clase padre desde una clase hija usamos 
# "parent::nombre de la prop."
class Peruano extends Humano
{
    public function saludoPeruano()
    {
        echo "Hola desde Peru, " . parent::$nombre;
    }
}
$peruano = new Peruano;
$peruano->saludoPeruano();