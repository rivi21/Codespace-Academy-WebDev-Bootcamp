<?php

namespace App\Command;

use App\Entity\Categoria;
use App\Entity\Entrada;
use App\Entity\Espacio;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputArgument;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Input\InputOption;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Console\Style\SymfonyStyle;

// NOTA: EN ESTE COMANDO HACEMOS --INSERCIONES--  NUEVAS EN LA BASE DE DATOS

class BlogInitCommand extends Command
{
    protected static $defaultName = 'blog:init';
    protected static $defaultDescription = 'Add a short description for your command';

    private $em;

    public function __construct(EntityManagerInterface $em)
    {
        $this->em = $em;
        parent::__construct();
    }

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $espacio = new Espacio();
        $espacio->setNombre('ESPACIO 3');
        $this->em->persist($espacio);

        $categoria3 = new Categoria();
        $categoria3->setNombre('CATEGORIA 3');
        $categoria3->setDescripcion('Esta es la categoria 3');
        $categoria3->setEspacio($espacio);
        $this->em->persist($categoria3);

        $categoria4 = new Categoria();
        $categoria4->setNombre('CATEGORIA 4 ');
        $categoria4->setDescripcion('Esta es la categoria 4');
        $categoria4->setEspacio($espacio);
        $this->em->persist($categoria4); //se persiste cada instancia por separado

        $this->em->flush(); //se guardan todas las instancias juntas.
        $output->writeln('ok');
        return Command::SUCCESS;
    }
}
// NOTA: EL PROCESO PARA LAS INSERCIONES ES: NUEVA INSTANCIA + SETDATOS + PERSIST + FLUSH