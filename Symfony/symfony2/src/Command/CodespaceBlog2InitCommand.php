<?php

namespace App\Command;

use App\Entity\Categoria;
use App\Entity\Espacio;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputArgument;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Input\InputOption;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Console\Style\SymfonyStyle;

class CodespaceBlog2InitCommand extends Command
{
    protected static $defaultName = 'codespace:blog2:init';
    protected static $defaultDescription = 'Add a short description for your command';

    /* sobreescribimos el constructor por defecto de la clase command para que haga lo que necesitamos */
    // Necesitamos el Entity Manager que nos da utilidades. Es un servicio  que ya ha creado doctrine. Symfony tiene un motor de
    // inyección de dependencias que nos permite instanciar ese servivio o dependencia y usarlo. Podemos incluso crear nuestros propios
    // servicios.
    private $em;//
    //Creamos el constructor de la clase:
    public function __construct(EntityManagerInterface $em)
    {
        //Para poder usar la variable $em del EntityManagerInterface fuera de la función, Creamos la variable global $em
        // fuera de la función (arriba) a nivel de clase y le asignamos el valor de la variable $em que hemos creado dentro
        // Así la tendremos disponible fuera
        $this->em = $em;
        //LLamamos al constructor padre
        parent::__construct();/* incluye lo que hacia la clase command */
    }
    //con esta función hacemos las operaciones en la base de datos
    protected function execute(InputInterface $input, OutputInterface $output): int
    // el int es para definir la respuesta que tiene que devolver
    {
        $espacio = new Espacio();
        $espacio->setNombre('ESPACIO1');//setLoquesea() Establecemos los datos. Pero aun no los hemos añadido a la db.   

        $categoria1 = new Categoria();
        $categoria1->setNombre('CATEGORIA 1');
        $categoria1->setDescripcion('Esta es la primera categoria');
        $categoria1->setEspacio($espacio);
        
        $categoria2 = new Categoria();
        $categoria2->setNombre('CATEGORIA 2');
        $categoria2->setDescripcion('Esta es la segunda categoria');
        $categoria2->setEspacio($espacio);

        $this->em->persist($espacio);//persist() persiste el objeto nuevo ($espacio) y lo pone en la cola
        $this->em->persist($categoria1);// para que el EntityManager lo inserte en la base de datos
        $this->em->persist($categoria2);

        $this->em->flush();// flush() le indica al Entitymanager que coja todo lo pendiente y lo inserte en la base de datos
        $output->writeln('ok');// writeln() muestra un ok en la consola. Vabien para saber nosotros si ha funcionado
        
        return Command::SUCCESS;/* esto es necesario porque tiene que devolver algo */
    }
}
