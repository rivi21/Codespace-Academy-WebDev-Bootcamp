<?php
//  1. Escribir un programa que muestre el nombre del día de la semana según el número de
// día. Además nos dirá si es fin de semana (sábado y domingo).

/* $semana = ['Domingo','Lunes','Martes','Miercoles','Jueves','Viernes','Sabado']; */
$diaSemana = date('N');
switch ($diaSemana) {

  case 1:
    echo 'Hoy es Lunes';
    break;
  case 2:
    echo 'Hoy es Martes';
    break;
  case 3:
    echo 'Hoy es Miércoles';
    break;
  case 4:
    echo 'Hoy es Jueves';
    break;
  case 5:
    echo 'Hoy es Viernes';
    break;
  case 6:
    echo 'Fin de semana: Hoy es Sábado ';
    break;
  case 7:
    echo 'Fin de semana: Hoy es Domingo';
    break;
}
echo "<br>";

/* 2. Escribir un programa que nos diga si un año es bisiesto. Año bisiesto es el divisible entre
4, salvo que sea año secular -último de cada siglo, terminado en «00»-, en cuyo caso
también ha de ser divisible entre 400. */

$año = date("Y");

if ($año % 4 === 0 || $año % 400 === 0) {
  echo "$año es año bisiesto";
} else {
  echo "$año no es año bisiesto";
};

echo "<br>";

/* 3. Escribir un programa que nos diga el nombre del mes según el número de mes y además
nos diga cuantos días tiene ese mes. */

$mes = date('m');

switch ($mes) {
  case 1:
    echo date('F') . ' tiene ' . date('t') . ' dias';
    break;
  case 2:
    echo date('F') . ' tiene ' . date('t') . ' dias';
    break;
  case 3:
    echo date('F') . ' tiene ' . date('t') . ' dias';
    break;
  case 4:
    echo date('F') . ' tiene ' . date('t') . ' dias';
    break;
  case 5:
    echo date('F') . ' tiene ' . date('t') . ' dias';
    break;
  case 6:
    echo date('F') . ' tiene ' . date('t') . ' dias';
    break;
  case 7:
    echo date('F') . ' tiene ' . date('t') . ' dias';
    break;
  case 8:
    echo date('F') . ' tiene ' . date('t') . ' dias';
    break;
  case 9:
    echo date('F') . ' tiene ' . date('t') . ' dias';
    break;
  case 10:
    echo date('F') . ' tiene ' . date('t') . ' dias';
    break;
  case 11:
    echo date('F') . ' tiene ' . date('t') . ' dias';
    break;
  case 12:
    echo date('F') . ' tiene ' . date('t') . ' dias';
    break;
}
echo "<br>";

/* 4. Escribir un programa que calcule el promedio de 4 notas: 55, 71, 46, 87, y nos diga si el
promedio es matrícula (+ de 9), aprobado o suspenso. */

$nota1 = 5.5;
$nota2 = 7.1;
$nota3 = 4.6;
$nota4 = 8.7;

echo 'Nota media = '.$notaMedia = ($nota1 + $nota2 + $nota3 + $nota4) / 4;
if ($notaMedia > 9) {
  echo ' matrícula de honor';
} else if ($notaMedia >= 5) {
  echo ' Aprobado';
} else {
  echo ' Suspenso';
};
echo "<br>";

/* 5. Escribir un programa que dada una temperatura en grados celsius o farenheit la
convierta a la otra escala, teniendo en cuenta que:
• Para convertir de Celsius a Fahrenheit, primero multiplica por 180/100, después suma 32
• Para convertir de Fahrenheit a Celsius, primero resta 32, después multiplica por 100/180 */

$temperaturaCelsius = 16;
$temperaturaFahrenheit = 70;

$aFahrenheit = round(($temperaturaCelsius * 180 / 100 + 32), 2);
echo "La temperatura $temperaturaCelsius grados Celsius equivale a $aFahrenheit grados Fahrenheit";

echo "<br>";

$aCelsius = round((($temperaturaFahrenheit - 32) * 100 / 180), 2);
echo "La temperatura $temperaturaFahrenheit grados Fahrenheit equivale a $aCelsius grados Celsius";
