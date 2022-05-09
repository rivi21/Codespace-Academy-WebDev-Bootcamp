<?php
/* WHILE / DO WHILE */

$i = 8;

/* while($i <= 10){
    echo "hola mundo $i <br>";
    $i++;
} */

# Si queremos que se ejecute al menos una vez, así no cumpla la condición, usamos do while

do{
    echo "hola mundo $i <br>";
    $i++;
} while($i < 10);

echo "Has salido del bucle <br>";

/* FOR */

$filas = 10;

for ($i = 1; $i < $filas; $i++) { 
    for($j = 1; $j <= $i; $j++){
        echo "*";
    }
    echo "<br>";
}

/* FOREACH */

$nombres = [ "Victor" , "Javi" , "Carmen", "Marina"];

foreach ($nombres as $nombre) {
    echo $nombre . "<br>";
}

# Si queremos saber el índice, en el segundo parámetro ponemos una variable que almacene la clave
# y otra con que almacene el valor

foreach ($nombres as $key => $value) {
   echo $value . " se encontraba en el índice $key <br>";
}
#Podemos cambiar los nombres de key y value para hacerlos mas descriptivos:
foreach ($nombres as $indice => $nombre) {
    echo $nombre . " se encontraba en el índice $indice <br>";
}

/* BREAK */

# Para interrumpir un bucle cuando se cumpla una segunda condición

for ($i = 1; $i <= 20 ; $i++) { 
    if($i == 11){
        break;
    }
    echo $i . '<br>';
}

/* CONTINUE */

# Para ignorar una iteración en concreto pero no las demas

for ($i = 1; $i <= 20; $i++) { 
    if($i == 7 || $i == 15){
        continue;
    }
    echo $i . '<br>';
}

/* EXIT Ó DIE */

#Para terminar el programa. Ambos hacen lo mismo

for ($i = 1; $i < 20; $i++) { 
    if($i == 10){
        die();
        // exit();
    }
    echo $i . '<br>';
}
echo "saliste del bucle";