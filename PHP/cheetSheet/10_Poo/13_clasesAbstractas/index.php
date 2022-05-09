<?php

# Las clases abstractas son parecidas a las interfaces pero permiten ir un paso mś allá:
# Permiten definir métodos protegidos, no solo públicos y tb
# extender su funcionalidad, desarrollar su lógica interna.

abstract class claseAbstracta
{
    # Al definir un método con la pakabra abstract no hace falta desarrollar su
    # contenido. Simplemente dejo especificado que todas las clases que se extiendan
    # deben definir este método
    abstract protected function getValor();
    # Tb. podemos definir métodos abstractos que esperan un valor
    abstract public function valorPrefijo($prefijo);
    abstract public function nombre($nombre);
    #Tb. podemos extendernos en algún método desarrollando su contenido
    public function imprimir(){
        echo $this->getValor();
    }
}

# Las clases abstractas no se pueden instanciar en un objeto. Solo nos sirven
#para ser extendidas desde otra clase

class claseConcreta extends claseAbstracta{
    
    protected function getValor(){
        return "clase Concreta";
    }
    public function valorPrefijo($prefijo){
        return $prefijo . "clase Concreta";
    }
    # Podemos añadir más parámetros a un método. Solo obliga a los definidos
    public function nombre($nombre, $separador = "."){
        return $nombre . $separador . "com";
    }
}

$clase1 = new claseConcreta;
$clase1->imprimir();
echo "<br>";
echo $clase1->valorPrefijo("prefijo ");
echo "<br>";
echo $clase1->nombre("rivaladiva");
