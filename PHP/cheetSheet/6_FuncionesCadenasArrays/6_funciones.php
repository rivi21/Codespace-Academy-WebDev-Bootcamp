<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
# Las funciones nos permiten agrupar una serie de acciones y darles un nombre.
# y así usarlas en cualquier momento del programa sin tener qu escribirlas de nuevo

# Funciones predefinidas por el lenguaje

echo "marca de tiempo" . time() . "<br>";
echo "raiz cuadrada de 9: " . sqrt(9) . "<br>";
echo "número aleatorio entre 90 y 100: " . rand(90, 100) . "<br>";
echo "número pi: " . pi() . "<br>";

#Esto ha sido una intro. Mirar el resto de funciones predefinidas en la documentación

# Definir nuestras propias funciones

# 9! = 1 * 2 * 3 * 4 * 5 * 6 * 7 * 8 * 9

function factorial($n)
{
    $resultado = 1;

    for ($i = 1; $i <= $n; $i++) {
        $resultado *= $i;
    }
    echo "el factorial de $n es: $resultado <br>";
}

factorial(4);
# Esta función no retorna un valor, solo ejecuta una acción. 
# si queremos usar el valor para usarlo mas tarde tendríamos que retornar un valor,
# no imprimirlo y guardarlo en una variable:

function factorialRetornado($n)
{
    $resultado = 1;

    for ($i = 1; $i <= $n; $i++) {
        $resultado *= $i;
    }
    return $resultado;
}

$resultado = factorialRetornado(6);

echo "el factorial de 6 es: $resultado <br>";

/* AMBITO DE LAS VARIABLES */

# Las funciones se consideran bloques de código independientes por eso para usar una variable global
# dentro de una función hay que especificarla con la palabra reservada global. Podemos incluso cambiarle el valor

$a = 5;
$b = 10;

function test()
{
    global $a;
    $a = 10;
}
test();
echo $a . "<br>";

# Para cambiar el valor de forma dinámica:

$c = 5;
$d = 10;

function testDos($n)
{
    $n = $n + 10;
}
testDos($c);
testDos($d);
echo $c . "<br>";
echo $d . "<br>";

# Si hacemos esto, los valores de las variables globales no cambian, porque le estamos pasando a la función
# los parámetros por valor y la función almacena ese valor/es de forma local. Si queremos pasar
# la variable completa, y no solo su valor; hemos de pasarle los parámetros por referencia.
# Para hacerlo por referencia hay que poner el símbolo & antes del parámetro:

$e = 5;
$f = 10;

function testTres(&$n)
{
    $n = $n + 10;
}
# Y así guardará en las variables los nueos valores
testTres($e);
testTres($f);
echo $e . "<br>";
echo $f . "<br>";

/* ARGUMENTOS FIJOS Y VARIBLES DE UNA FUNCIÓN */

function valoracion($nombre, $rating)
{
    echo "El $nombre tiene un rating de $rating <br> ";
}
valoracion("Curso PHP 8 desde cero", 5);

# podemos hacer que el segundo parámetro sea opcional asignándole un valor que tomará 
# por defecto si no se lo pasamos al llamar a la función

function valoracionDos($nombre, $rating = 5)
{
    echo "El $nombre tiene un rating de $rating <br>";
}
valoracionDos("Curso PHP 8 desde cero", 4);

# A veces no sabemos cuantos parámetros queremos pasar a la función.
# En estos casos usamos los tres ... y definimos una variable. Entonces php juntará
# todos los parámetros que le pasemos a la función en un array. Después lo que tenemos que hacer
#es recorrer ese array e ir concatenando cada uno de los parámetros
function concatenar(...$palabras)
{
    $resultado = "";

    foreach ($palabras as $palabra) {

        // $resultado = $resultado . $palabra . " ";
        $resultado .= $palabra . " ";
    }
    echo $resultado;
}

concatenar("curso", "php", "8", "desde", "cero");
echo "<br>";

/* FUNCIONES CON TIPADO DEFINIDO */

#para ser mas estrictos en el tipo de dato que esperamos recibir como parámetro

function sumarEnteros(int $entero1, int $entero2)
{
    return $entero1 + $entero2;
}
$resultadoSuma1 = sumarEnteros(2, 5.8);
# Si hacemos esto php tratará de convertir el 2º param float en int y dará un resultado redondeado a la baja
#pero tb. un warning "Deprecated implicit conversion" ----MEJOR NO USAR----
echo $resultadoSuma1;

$resultadoSuma2 = sumarEnteros(2, "asdasd");
# Aquí no puede concvertirlo y me daría un error
#echo $resultadoSuma2;

/* -----Si queremos que nos de un error en el caso de que le pasemos 
un parámetro de tipo diferente al que hemos definido, usaremos al ppio del archivo
lo siguiente : declare(strict_types=1);----- */

# Tb podemos especificar el tipo de dato que esperamos recibir de la función. Para esto después de
# los () ponemos : seguido del tipo de dato que esperamos recibir. Se pueden poner varios tipos

// Los tipos que se pueden especificar son int, float, string, bool, array, object y null

function recibirEntero(int $entero1, int $entero2): int #| float
{
    return $entero1 + $entero2;
    // return ($entero1 + $entero2)/2;
}
$resultadoRecibir = recibirEntero(2, 5);
