<?php

# Una interfaz es una plantilla para clases, con métodos definidos pero no desarrollados y siempre públicos.
# Obliga a las clases que la implementen a generar al menos los métodos definidos en ella. 

interface iTemplate
{
    public function setVariable();
    public function getHtml();
}

class Template implements iTemplate
{
    # si no ponemos los métodos de la interface en la clase nos da un error
    public function setVariable()
    {
    }
    public function getHtml()
    {
    }
}

# Las interfaces también se pueden extender

interface a
{
    public function pruebaA();
}

interface b extends a
{
    public function pruebaB();
}
# Si creamos una clase que implementa la interface b tendríamos que definir en ella 
# los dos modos de b, el propio y el heredado. Si no dará error
class clase implements b
{
    public function pruebaA()
    {
    }
    public function pruebaB()
    {
    }
}

# Las interfaces tb aceptan herencia múltiple

interface c
{
    public function pruebaC();
}
interface d extends a, c
{
    public function pruebaD();
}
# Así la classe que implemente d tendrá que llevar obligadotoriamente los tres métodos de la interfaz
# prueba A,C y D. Pero además puede tener más métodos si lo necesitamos
class claseMultiple implements d
{
    public function pruebaA()
    {
    }
    public function pruebaC()
    {
    }
    public function pruebaD()
    {
    }
    public function pruebaPropia()
    {
    }
}
