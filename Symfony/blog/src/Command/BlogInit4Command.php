<?php

namespace App\Command;

use App\Repository\CategoriaRepository;
use App\Repository\EntradaRepository;
use App\Repository\EspacioRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputArgument;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Input\InputOption;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Console\Style\SymfonyStyle;

//--NOTA-- ESTE COMANDO ES PARA HACER CONSULTAS DE LAS PRUEBAS QUE HEMOS HECHO EN LOS COMANDOS ANTERIORES

class BlogInit4Command extends Command
{
    protected static $defaultName = 'blog:init4';
    protected static $defaultDescription = 'Add a short description for your command';

    //ponemos los tres repositorios como variables globales de la clase
    private $espacioRepository;
    private $categoriaRepository;
    private $entradaRepository;
    private $em;

    public function  __construct(EspacioRepository $espacioRepository, CategoriaRepository $categoriaRepository, 
    EntradaRepository $entradaRepository, EntityManagerInterface $em)
    {
        $this->espacioRepository = $espacioRepository;
        $this->categoriaRepository = $categoriaRepository;
        $this->entradaRepository = $entradaRepository;
        $this->em = $em;
        parent::__construct();
    }

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        //consulta para que me de todo lo que haya en una tabla de la db
        $entradas = $this->entradaRepository->findAll(); //Nos crea un array de todos los objetos de tipo entrada
        //recorremos el array/lista
        foreach ($entradas as $entrada) {
            //imprimirá por consola los títulos y los slug (títulos tranformados) de todas las entradas.
            $output->writeln($entrada->getTitulo() . ' changed to ' . $entrada->getSlug());
        }
        $output->writeln('------------------------------');

        //consulta por orden. findBy() acepta parametros: 1º criterio de búsqueda [clave=>valor], 2º[orden: aquí por título ascendente]       
        $entradas = $this->entradaRepository->findBy([], ['titulo' => 'ASC']);
        foreach ($entradas as $entrada) {
            $output->writeln($entrada->getTitulo() . ' changed to ' . $entrada->getSlug());
        }
        $output->writeln('------------------------------');

        //Consultar un objeto: findOneBy(). Se le pasa tb un criterio de búsqueda
        //Aquí ponemos $entrada no $entradas xq solo buscamos una.
        $entrada = $this->entradaRepository->findOneBy(['slug' => 'Entrada-2']);
        $output->writeln($entrada->getTitulo());
        $output->writeln('------------------------------');

        //Consultar la lista de categorias de un espacio:
        $espacio = $this->espacioRepository->findOneBy(['nombre' => 'ESPACIO 2']);
        //consultamos las categorias
        $categorias = $this->categoriaRepository->findBy(['espacio' => $espacio]);
        foreach ($categorias as $categoria) {
            $output->writeln($categoria->getNombre());
        } //Me dará los nombres de las categorias que pertenecen  a ese espacio
        $output->writeln('------------------------------');

        //Como habíamos definido en espacio la propiedad categorias que era oneToMany, esta consulta anterior
        // podemos hacerla directamente con getCategorias() que me dará la lista de categorias vinculadas con ese espacio:
        $categoriasBis = $espacio->getCategorias();
        foreach ($categoriasBis as $categoria) {
            $output->writeln($categoria->getNombre());
        }
        $output->writeln('------------------------------');

        //Consultas usando el lenguaje --DQL--
        // Similar a SQL. Hace implicitamente la transformación a SQL lo ejecuta en la db y te devuelve un resultado.
        //No accedemos a la tabla, xq dql no entiende de tablas, sino al objeto. Y le ponemos el alias que necesito de la tabla
        //Para ejecutar DQL necesitamos el EntityManagerInterface. Lo añadimos al constructor
        //En SQL sería: SELECT * FROM Entrada
        //EN DQL sería: 'SELECT entrada FROM App\Entity\Entrada entrada'

        $dql = 'SELECT entrada FROM App\Entity\Entrada entrada';
        $query = $this->em->createQuery($dql);//esto me crea un objeto que referencia a la consulta, al query.
        //Ahora solo lo ejecutamos pero se le pueden pasar parámetros
        $entradas = $query->execute();//este $entradas será igual al $entradas de arriba con el finAll() 
        foreach ($entradas as $entrada) {
            $output->writeln($entrada->getTitulo() . ' changed to ' . $entrada->getSlug());
        }
        $output->writeln('------------------------------');

        $dql = 'SELECT e FROM App\Entity\Entrada e ORDER BY e.titulo ASC';
        $query = $this->em->createQuery($dql);
        $entradas = $query->execute();//este $entradas será igual al de findBy() de arriba
        foreach ($entradas as $entrada) {
            $output->writeln($entrada->getTitulo() . ' changed to ' . $entrada->getSlug());
        }
        $output->writeln('------------------------------');

        $dql = 'SELECT e FROM App\Entity\Entrada e WHERE e.slug = :pslug';// ':pslug' es un parámetro que le paso dentro de la consulta
        $query = $this->em->createQuery($dql);
        //en el query he de indicarle el nombre del parámetro y la cadena o lo que yo quiero que lo sustituya. Es lo mismo que decir pslug = Entrada-2
        $query->setParameter('pslug', 'Entrada-2');
        $entradas = $query->execute();//este $entradas será igual a la 1ª de findOneBy() de arriba
        foreach ($entradas as $entrada) {
            $output->writeln($entrada->getTitulo() . ' changed to ' . $entrada->getSlug());
        }
        $output->writeln('------------------------------');
        return Command::SUCCESS;
    }
}
