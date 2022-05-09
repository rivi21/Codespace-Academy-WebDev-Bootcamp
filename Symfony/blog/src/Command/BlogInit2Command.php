<?php

namespace App\Command;

use App\Repository\CategoriaRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputArgument;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Input\InputOption;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Console\Style\SymfonyStyle;

//NOTA: EN ESTE COMANDO VAMOS A HACER --ACTUALIZACIONES/MODIFICACIONES-- EN LA BASE DE DATOS

class BlogInit2Command extends Command
{
    protected static $defaultName = 'blog:init2';
    protected static $defaultDescription = 'Add a short description for your command';

    private $em;
    private $categoriaRepository;

    public function __construct(EntityManagerInterface $em, CategoriaRepository $categoriaRepository)
    //Necesitamos el repository sobre el que vamos a hacer consultas
    {
        $this->em = $em;
        $this->categoriaRepository = $categoriaRepository;
        parent::__construct();
    }

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        //consulta por id de una categoria (SELECT)
        $categoria = $this->categoriaRepository->find(1);

        //Hacemos una comprobación por si no encuentra el id, para dar una respuesta u otra
        if ($categoria != null) {
            $categoria->setNombre('CATEGORIA CON NOMBRE MODIFICADO');
            //Aquí no hace falta el persist() porque no vamos a insertar nada, solo modificamos
            $this->em->flush();
            $output->writeln(('modificado'));
        }

        return Command::SUCCESS;
    }
}
//NOTA: EL PROCESO PARA LAS ACTUALIZACIONES ES: CONSULTA + MODIFICACIÓN + FLUSH  