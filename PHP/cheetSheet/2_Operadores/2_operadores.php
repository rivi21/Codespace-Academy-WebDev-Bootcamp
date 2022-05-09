
<?php
/*  OPERADORES MATEMÁTICOS Y DE ASIGNACIÓN */

    # Operador de asignación "="
    "sirve para asignarle un valor booleano, cadena, número,... a una variable";
    # valores unarios "-"
    "para cambiar de signo el valor asignado a una variable";
    # operadores aritméticos " + , - , * , / , %"
    "orden de los operadores aritméticos:
    primero multiplicaciones y divisiones y luego sumas y restas";
     #echo 5 * 4 + 3 - 2 + 1 * 0; esto daría 21
    "Si colocamos paréntesis van por delante de todo ";
    echo "<br>";
    # echo 5 * (4 + 3) - 2 + 1 * 0; esto daría 33

/* OPERADORES DE COMPARACIÓN Y LÓGICOS */
    $a = 5;
    $b = 2;
    "los operadores de comparación nos comparan y nos devuelven un valor booleano 1 o 0";
    $a != $b;
    "podemos usar la función var_dump() para que nos devuelva el tipo y el valor del resultado";
    var_dump($a > $b); "con var_dump no hace falta echo";
    "Estos son: == , != (o <>) , > , < , >= , <= ";

/* OPERADORES LÓGICOS SIRVEN PARA COMPARAR DOS VALORES BOOLEANOS*/    
    # && operador "y" Retorna true si ambos valores son verdaderos.
    'Los valores que retornan false son; false, null, "" y 0. El resto retornan true.'; 
    $c = "";
    $d = null;
    var_dump($c && $d); # ambos son false y retorna false.
    # || operador "o". Retorna true si uno de los dos es true

/* OPERADORES DE ASIGNACIÓN COMBINADOS */
    # ++ Aumenta en una unidad el valor de la variable
    # -- Disminuye en una unidad el valor de la variable 
    $e = 10;
    $f = $e++;
    #si imprimimos $f nos dará 10 xq primero se hace la asignación.
    # Si imprimimos ahora $e nos dará 11 xq tras la asignaciónse aumenta el valor de $e en una unidad
    # Si quiero que primero se haga el aumento y luego la asignación
    $f = ++$e;
    #Ahora ambos valdrían 11
    # +=, -=, *=, /=, %= Guarda el resultado de la operación de si mismo con el siguiente valor
    $g = 10;
    $h = 5;
    $g = $g + $h; /* esto es lo mismo que */ $g += $h;

    
?>