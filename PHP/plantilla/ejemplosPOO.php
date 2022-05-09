<?php
//-------------Clases--------------------

$cuadrado = new Rectangulo(); //se puede instanciar el objeto antes de declarar la clase
class Rectangulo
{
    public $x, $y; //Hay que especificar el nivel de acceso a la propiedad: Public, Private o Protected
    //public: da acceso ilimitado a la propiedad
    function calcularArea($a, $b)
    {
        return $a * $b;
    }
    function obtenerArea()
    {
        return $this->calcularArea($this->x, $this->y);
    }
}
$obj = new Rectangulo();
//var_dump($obj) muestra el contenido de la variable

$obj->x = 4;
$obj->y = 5;
echo 'El area es ' . $obj->obtenerArea(); //el "." es para concatenar

$cuadrado->x = 3;
$cuadrado->y = 3;
echo '<br> El area del cuadrado es ' . $cuadrado->obtenerArea();

class EasyClass
{
    // Declaraciones de propiedades válidas:
    public $var1 = 'hola' . 'mundo';
    public $var2 = <<<EOD
    hola mundo 
    EOD;
    public $var3 = 1 + 2;
    public $var5 = [true, false];
    public $var6 = <<<'EOD'
    hello world 
    EOD;
    // Declaración de propiedad no válida en futuras versiones (warning): 
    //public $var7 = MY_CONSTANT; 
    // Declaraciones de propiedades no válidas: 
    //public $var8 = self::miMetodoEstatico(); 
    //public $var9 = $myVar; 
}
//$obj = new EasyClass();

class Usuario
{
    public $dni, $nombre, $edad, $tel;

    function __construct($a, $b, $c, $d)
    { //se le puede dar parámetros
        $this->dni = $a;
        $this->nombre = $b;
        $this->edad = $c;
        $this->tel = $d;
        echo "<br>Constructor inicializado";
    }
}
// $this -> dni = '12345678A';
// $this ->nombre = 'Jhon Doe';
// $this->edad = 25;
// $this ->tel = 612345789;
$usuario1 = new Usuario('1111', 'pepe', 23, 123456789);

echo $usuario1->nombre;
echo '<br>';

//----------------Herencia--------------------

class MyClass
{
    public $myPublic = 'public';
    //allowed
    protected $myProtected = 'protected';
    // allowed
    private $myPrivate = 'private';
    //allowed
    function test()
    {
        echo $this->myPublic;
        echo $this->myProtected;
        echo $this->myPrivate;
    }
}
//si el constructor no tiene parametros no hacen falta los ()
$public = new MyClass;
$public->test();
echo '<br>';
class MyChild extends MyClass
{
}
//Podemos acceder a las propiedades de MyClass desde MyChild
$heritage = new MyChild;
$heritage->test();

echo '<br>';

//------------Comparación de objetos------------------

class Flag
{
    public $flag = true;
}

$flagOne = new Flag;
$flagTwo = new Flag;
$compare = ($flagOne == $flagTwo);
var_dump($compare); //var_dump muestra info sobre una variable

echo '<br>';
//setter y getter

class MyClass2
{
    private $myPrivate;
    function setPrivate($obj, $val)
    {
        $obj->myPrivate = $val;
        return $this->myPrivate;
    }
    function getPrivate()
    {
        return $this->myPrivate;
    }
}
$a = new MyClass2();
$b = new MyClass2();
$a->setPrivate($b, 10); //ok
//echo $b->myPrivate; //si descomento esto da error xq no puedo acceder a una prop privada
//error accesing private member
echo $b->getPrivate(); //10

//----------SobreEscribir miembros---------

// Un miembro de una clase secundaria puede redefinir un miembro de su clase principal 
// para darle una nueva implementación
//      palabras clave: parent / operador de resolución de ámbito (::) / final / static

//      Para acceder a un método estático desde dentro de la clase (self::propiedad o método)
//      Para acceder desde fuera (NombreDeLaClase::propiedad o método)

//-------------Constantes-------------
// Son propiedades cuyo valor es inmutable. 

const CA = [1, 2, 3]; //ámbito global

define('DA', [4, 5, 6]);//ámbito local

//---------------Interfaces---------------

//---------------Clases Abstractas-------------
