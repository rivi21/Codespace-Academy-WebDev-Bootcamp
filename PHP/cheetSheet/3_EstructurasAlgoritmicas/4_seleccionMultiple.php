<?php
/* ESTRUCTURAs ALGORÍTMICA DE SELECCIÓN MÚLTIPLE */
# Sirven para comparar el valor de una variable sin usar condicionales anidades

# --SWITCH--

$a = 5;

switch ($a) {
    case '1':
        echo "Lunes <br>";
        break;
    case '2':
        echo "Martes <br>";
        break;
    case '3':
        echo "Miercoles <br>";
        break;
    case '4':
        echo "Jueves <br>";
        break;
    case '5':
        echo "Viernes <br>";
        break;
    case '6':
        echo "Sabado <br>";
        break;
    case '7':
        echo "Domingo <br>";
        break;
        # Esta última se ejecuta si el valor no coincide con algún caso de los descritos           
    default:
        echo " El valor de la variable a no es un valor válido <br>";
        break;
}

# --MATCH-- NUEVA DE PHP 8

# nos permite simplificar mucho el código si solo queremos imprimir algo en pantalla. Es más legible

echo match ($a) {
    1 => "Lunes",
    2 => "Martes",
    3 => "Miercoles",
    4 => "Jueves",
    5 => "Viernes",
    6 => "Sábado",
    7 => "Domingo",
    default => "El valor de la variable a no es un valor válido <br>"
};
