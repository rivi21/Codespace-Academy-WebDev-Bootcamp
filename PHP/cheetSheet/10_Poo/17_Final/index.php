<?php

# Para que una clase no pueda ser extendida por otra clase le ponemos delante 
# la palabra reservada final

final class Casa
{
    public $calor, $seguridad;
}

# Si queremos que no se pueda sobreescribir un método por una clase hija, 
# le ponemos la palabra final al método
class Hogar
{
    final public function saludar()
    {
        echo "Bienvenido a mi hogar";
    }
}
