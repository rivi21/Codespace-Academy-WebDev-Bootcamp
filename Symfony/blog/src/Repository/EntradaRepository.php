<?php

namespace App\Repository;

use App\Entity\Entrada;
use App\Entity\Espacio;
use App\Entity\Usuario;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method Entrada|null find($id, $lockMode = null, $lockVersion = null)
 * @method Entrada|null findOneBy(array $criteria, array $orderBy = null)
 * @method Entrada[]    findAll()
 * @method Entrada[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class EntradaRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Entrada::class);
    }

    //Función para buscar las "$limit" entradas activas mas recientes
    public function findLatestEntries($limit)
    {
        $qb = $this->createQueryBuilder('e')
            //para que hidrate no solo la entrada sino tb la categoria debemos cambiar el select
            ->select('e', 'c')
            // con este join evitamos el problema 1+n (1 consulta para las entradas y + consultas para las categorias relacionadas con las entradas)
            //Así coge todos ls datos de todas las entidades en una sola consulta
            ->join('e.categoria', 'c')
            //las activas
            ->where('e.estado = 1')
            //como ya tenemos vinculada con el join la categoria ya podemos consultar sobre el espacio tb
            // ->andWhere('c.espacio = :espacio')
            //oredenadas por fecha descendiente. La más reciente primero
            ->orderBy('e.fecha', 'DESC')
            //aplicamos un límite máximo de lo que indiquemos en la consulta
            ->setMaxResults($limit);
        return $qb->getQuery()->execute();
    }

    // listado de entradas para un espacio
    public function findByEspacio(Espacio $espacio)
    {
        $qb = $this->createQueryBuilder('entrada')
            ->select('entrada', 'c')
            ->join('entrada.categoria', 'c')
            ->where('c.espacio = :espacio')
            ->setParameter('espacio', $espacio);
        return $qb->getQuery()->execute();
    }

    //listado de entradas para varias categorias
    public function findByCategoria($categorias)
    {
        $qb = $this->createQueryBuilder('e')
            //como entrada tiene una relación directa con categorias no necesitamos hacer un join
            ->where('e.categoria in (:categorias)')
            ->setParameter('categorias', $categorias);
        return $qb->getQuery()->execute();
    }

    //Listado de entradas de un usuario concreto en un espacio concreto
    public function findByUsuarioEspacio(Usuario $usuario, Espacio $espacio)
    {
        $dql = "
            SELECT e, c FROM App\Entity\Entrada e
            JOIN e.categoria c
            WHERE e.usuario = :usuario
            AND c.espacio = :espacio
        ";
        $query = $this->getEntityManager()->createQuery($dql);
        $query->setParameters([
            'usuario'=> $usuario,
            'espacio' => $espacio
        ]);
        return $query->execute();
    }
}
