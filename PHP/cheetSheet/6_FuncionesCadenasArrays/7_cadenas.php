<?php

$cadena = "Hola mundo, como estás";
# Una cadena es una sucesión de caracteres. Como es una sucesió podemos acceder
# acceder si queremos a uno de dud caracteres de manera independiente.

echo $cadena[5] . "<br>";

# Para saber la longitud de una cadena:

echo mb_strLen($cadena) . "<br>";

"NOTA: La función strLen() no da el nº de caracteres si no el nº de bits. Xej si en la cadena la letra e
llevase tilde ocuparía dos bits, no uno y el resultado sería 6 en lugar de 5. Para evitar
posibles problemas mejor usar la función mb_strLen() para sacar el nº de caracteres";

#Para saber el índice de un carácter en concreto:

echo strpos($cadena, "o") . "<br>"; # Devuelve la 1ª coincidencia de izqda. a drcha.
echo strrpos($cadena, "o") . "<br>"; # Devuelve la 1ª coincidencia de drcha a izqda.

# Para saber si la cadena contiene otra cadena

echo str_contains($cadena, "mundo") . "<br>"; # nos devuelve un booleano 1 ó 0. Siqueremos una cadena, haremos:
echo str_contains($cadena, "mundo") ? 'Si se encuentra' : 'No se encuentra';
echo "<br>";

# Para saber si la cadena empieza o termina con una cadena concreta:

echo str_starts_with($cadena, "mundo") ? 'Si empieza' : 'No empieza';
echo "<br>";
echo str_ends_with($cadena, "estás") ? 'Si termina' : 'No termina';
echo "<br>";

# Comparar si dos cadenas son iguales:
# La función strcmp() devuelve "0" si son iguales, un entero positivo con el valor de la diferencia si la 1ª cadena es mayor
# y un entero negativo con la diferencia si la 2ª cadena es mayor.

$cadena1 = "Prueba";
$cadena2 = "prueba";

echo strcmp($cadena1, $cadena2) . "<br>";

if(strcmp($cadena1, $cadena2) == 0){
    echo "Las dos cadenas son iguales";
}else{
    echo "Las cadenas son diferentes";
}
echo "<br>";

# Esta función diferencia mayúsculas y minúsculas. Para que no las tenga en cuenta usaremos:
echo strcasecmp($cadena1, $cadena2) . "<br>"; 

# Para substraer cierta porción de la cadena y que ignore el resto.  Tb hasta que indice queremos que nos traiga. Ambos incluidos

echo substr($cadena, 3) . "<br>"; # El 2º param es el índice a partir del cual queremos que comience.
echo substr($cadena, 3, 6) . "<br>"; # el 3º donde queremos que acabe.
echo mb_substr($cadena, -4) . "<br>"; # Las 4 últimas. Sin mb_... cuenta la tilde como un carácter mas.
echo mb_substr($cadena, -5, 2) . "<br>"; # Devuelve las 2 letras siguientes a partir de la -5

# Para cambiar unos caracteres por otros.

echo str_replace("mundo", "asdasdas", $cadena) . "<br>";

# Para pasar de mayúsculas a minúsculas y al revés

echo mb_strtolower($cadena) . "<br>"; # todo en minúsculas incluida la que tiene tilde ( sin mb_ no la cambia ).
echo mb_strtoupper($cadena) . "<br>"; # todo en mayúsculas incluida la que tiene tilde ( sin mb_ no la cambia ).
echo ucfirst($cadena) . "<br>"; # La primera letra en mayúscula ( lcfirst() la 1ª letra en minúscula ).
echo ucwords($cadena) . "<br>"; # La primera letra de cada palabra en mayúscula.

// NOTA: HAY MAS FUNCIONES PARA CADENAS PERO ESTAS SON LAS MAS USADAS. MIRAR DOCUMENTACIÓN





