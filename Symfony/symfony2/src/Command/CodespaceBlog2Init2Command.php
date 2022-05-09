<?php

namespace App\Command;

use App\Entity\Espacio;
use App\Repository\CategoriaRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputArgument;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Input\InputOption;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Console\Style\SymfonyStyle;

class CodespaceBlog2Init2Command extends Command
{
    protected static $defaultName = 'codespace:blog2:init2';
    protected static $defaultDescription = 'Add a short description for your command';

    private $em;
    private $categoriaRepository;

    public function __construct(EntityManagerInterface $em, CategoriaRepository $categoriaRepository)
    {
        $this->em = $em;
        $this->categoriaRepository = $categoriaRepository;
        parent::__construct();
    }

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        // Hay varias formas de hacer consultas a la db. Esta es con la función getRepository() que nos da el repositorio que
        // queremos. Ese repo tiene una función find() que necesita un parámetro y nos permite buscar por "id" dentro de la db. 
        // En la variable $espacio me guardará una instancia de la entidad Espacio que se corresponde con el registro
        // que hay en la tabla Espacio con el id "2"
        $espacio = $this->em->getRepository(Espacio::class)->find(2);
        $output->writeln($espacio->getNombre());

        // consulta en la entidad categoria sin referenciar al repositorio aquí xq ya lo hemos añadido
        // en el constructor mas arriba.Accedemos directamente al repo añadimos el find().
        $categoria = $this->categoriaRepository->find(1);
        $output->writeln($categoria->getNombre());

        if ($categoria != null) {
            $categoria->setNombre('CATEGORIA CON NOMBRE MODIFICADO'); //modificamos el registro
            // no se pone persist xq aqui no vamos a insertar nada, solo modificamos

            $this->em->flush();
            $output->writeln('modificado');
        }

        return Command::SUCCESS;
    }
}
