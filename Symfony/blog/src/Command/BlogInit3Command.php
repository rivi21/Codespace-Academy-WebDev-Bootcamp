<?php

namespace App\Command;

use App\Entity\Entrada;
use App\Repository\CategoriaRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputArgument;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Input\InputOption;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Console\Style\SymfonyStyle;
use Symfony\Component\String\Slugger\AsciiSlugger;

//  NOTA:EeN ESTE COMANDO HACEMOS --INSERCIONES Y CONSULTAS--

class BlogInit3Command extends Command
{
    protected static $defaultName = 'blog:init3';
    protected static $defaultDescription = 'Add a short description for your command';

    private $em;
    private $categoriaRepository;

    public function __construct(EntityManagerInterface $em, CategoriaRepository $categoriaRepository)
    {
        $this->em = $em;
        $this->categoriaRepository = $categoriaRepository;
        parent::__construct();
    }

    protected function configure(): void
    {
        $this
            // Dejamos esta función configure() xq necesitamos el argumento para pasarselo. El argumento que
            // vamos a recibir es el título.
            ->addArgument('titulo', InputArgument::OPTIONAL, 'Argument description')
            //  La segunda linea que es la opción, la podemos borrar:
            // ->addOption('option1', null, InputOption::VALUE_NONE, 'Option description')
        ;
    }

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        // Para crear una entrada necesitamos consultar una categoria xq es un campo obligatorio. 
        // Por eso necesitamos el repositorio de categoria en el constructor. No necesitamos el persist
        // xq no vamos a insertar nada en la categoria. Consultamos la "1".
        $categoria = $this->categoriaRepository->find(1);

        //  Para el slug usamos el componente String de Symfony que tiene dentro el componente Slugger. Hacemos una nueva instancia
        //de Slugger y se le hace un slug de una cadena. 
        //  El slug() limpia esa cadena de caracteres extraños sustituyendo los espacios por guiones, quitando tildes y todo lo que
        //le suene a extraño que no se vea bonito en la url. 
        //  Los slug se usan mucho en entornos reales. Normalmente nunca se le da al cliente tu id d la base de datos sino que se crea
        //una cadena  que es la que se le pasa como referencia para hacer las consultas en la base de datos
        //  Nosotros aprovecharemos el titulo que nos sirve porque en cada entrada será único y ya lo tenemos disponible.   
        $slugger = new AsciiSlugger();
        $slug = $slugger->slug($input->getArgument('titulo'));

        $entrada = new Entrada();
        // --NOVEDAD-- EL título lo pasamos como parámetro al comando y para obtener el argumento del comando,
        // usamos el objeto $input que tiene la función getArgument(). Entonces lo que ponga en el comando
        // lo meterá dentro del título.
        $entrada->setTitulo($input->getArgument('titulo'));
        $entrada->setFecha(new \DateTime());
        $entrada->setEstado(1); //estado "1" significa que está activo
        $entrada->setResumen('RESUMEN');
        $entrada->setCategoria($categoria); // Y aquí establecemos la categoria relacionada con esta entrada
        $entrada->setSlug($slug);//este debe ser único. 
        $this->em->persist($entrada);

        $this->em->flush();
        $output->writeln('ok');
        return Command::SUCCESS;
    }
}
// NOTA VIP: AL HACER EL php bin/console blog:etc... AÑADIREMOS EL TÍTULO QUE QUERAMOS PARA LA ENTRADA QUE ESTAMOS INSERTANDO:
// ASI:  php bin/console blog:init3 "Entrada de prueba 1"