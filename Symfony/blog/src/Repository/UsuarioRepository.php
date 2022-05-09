<?php

namespace App\Repository;

use App\Entity\Usuario;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Component\Security\Core\Exception\UnsupportedUserException;
use Symfony\Component\Security\Core\User\PasswordAuthenticatedUserInterface;
use Symfony\Component\Security\Core\User\PasswordUpgraderInterface;

/**
 * @method Usuario|null find($id, $lockMode = null, $lockVersion = null)
 * @method Usuario|null findOneBy(array $criteria, array $orderBy = null)
 * @method Usuario[]    findAll()
 * @method Usuario[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class UsuarioRepository extends ServiceEntityRepository implements PasswordUpgraderInterface
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Usuario::class);
    }

    /**
     * Used to upgrade (rehash) the user's password automatically over time.
     */
    public function upgradePassword(PasswordAuthenticatedUserInterface $user, string $newHashedPassword): void
    {
        if (!$user instanceof Usuario) {
            throw new UnsupportedUserException(sprintf('Instances of "%s" are not supported.', \get_class($user)));
        }

        $user->setPassword($newHashedPassword);
        $this->_em->persist($user);
        $this->_em->flush();
    }

    //----------Ejemplo QueryBuilder------------

    //Recibo el parámetro perfil
    public function findByPerfil($perfil)
    {
        $qb = $this->createQueryBuilder('u') //'u' es el alias de la entidad (aquí usuario)
            //le añadimos un orden
            ->orderBy('u.nombre');

        if ($perfil != null) {
            $qb->where('u.perfil = :perfil')
                ->setParameter('perfil', $perfil);
            //:perfil es un parámetro. Esto es la solución
            //que tiene PDO para hacer mejores consultas, introducir parámetros. Tiene dos ventajas:  
            //Nos evita tener que concatenar cadenas, lo que mejora la limpieza del código
            //y evita tb. un posible ataque de seguridad por concatenación de cadenas, sobreescribiendo mi consulta
            //para obtener datos. Los parámetros evitan este ataque.
            //Se pueden hacer tantos setParameter como necesitemos. Incluso hay un setParameters al que se le pasa un array.

        }
        return $qb->getQuery()->execute();
    }
    // NOTA: SI NO ENTRA EN EL IF EN LUGAR DE DARNOS UN ARRAY DE OBJETOS VACÍO, 
    //NOS DARÁ TODOS LOS REGISTROS ORDENADOS POR NOMBRE. 
    //SI ENTRA EN EL IF FILTRARÁ LA BÚSQUEDA SEGÚN EL VALOR DEL PARÁMETRO PERFIL (a1, a2 en nuestro caso)
    // QUERYBUILDER NOS PERMITE HACER CONSULTAS MUY COMPLEJAS Y DINÁMICAS: DEPENDIENDO DE LOS DATOS QUE
    //TENGA MONTO LA CONSULTA DE FORMA DINÁMICA, POR PROGRAMACIÓN. HACER ESTO CON DQL O SQL SERÍA MUY FARRAGOSO

    //--------------Ejemplo con DQL---------------

    public function findByPerfilDql($perfil)
    {
        $dql = 'SELECT u FROM App\Entity\Usuario u';
        if($perfil != null) {
            $dql .= ' WHERE u.perfil 0 :perfil';
        }
        $dql .= ' ORDER BY u.nombre';
        $query = $this->getEntityManager()->createQuery($dql);
        if($perfil != null) {
            $query->setParameter('perfil', $perfil);
        }
    }
    //NOTA: ESTA FORMA ES LA MENOS HABITUAL POR COMPLEJA, PROPENSA A ERRORES, ETC...
    //EL ORDEN ACONSEJADO SOBRETODO PARA APLICACIONES PEQUEÑAS COMO LA NUESTRA SERÍA:
    //1- FUNCIONES FIND() QUE TRAE SYMFONY YA DEFINIDAS EN LOS REPOSITORY
    //2- QUERYBUILDER
    //3- DQL.


    // /**
    //  * @return Usuario[] Returns an array of Usuario objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('u')
            ->andWhere('u.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('u.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?Usuario
    {
        return $this->createQueryBuilder('u')
            ->andWhere('u.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
