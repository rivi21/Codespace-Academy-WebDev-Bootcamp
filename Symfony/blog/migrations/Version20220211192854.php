<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20220211192854 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE categoria (id INT AUTO_INCREMENT NOT NULL, espacio_id INT NOT NULL, nombre VARCHAR(255) NOT NULL, descripcion LONGTEXT DEFAULT NULL, INDEX IDX_4E10122D7CFC1D2C (espacio_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE comentario (id INT AUTO_INCREMENT NOT NULL, entrada_id INT NOT NULL, fecha DATETIME NOT NULL, texto LONGTEXT NOT NULL, estado INT NOT NULL, INDEX IDX_4B91E702A688222A (entrada_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE entrada (id INT AUTO_INCREMENT NOT NULL, categoria_id INT NOT NULL, slug VARCHAR(255) NOT NULL, titulo VARCHAR(255) NOT NULL, fecha DATETIME NOT NULL, estado INT NOT NULL, resumen LONGTEXT NOT NULL, texto LONGTEXT DEFAULT NULL, INDEX IDX_C949A2743397707A (categoria_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE espacio (id INT AUTO_INCREMENT NOT NULL, nombre VARCHAR(255) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE messenger_messages (id BIGINT AUTO_INCREMENT NOT NULL, body LONGTEXT NOT NULL, headers LONGTEXT NOT NULL, queue_name VARCHAR(255) NOT NULL, created_at DATETIME NOT NULL, available_at DATETIME NOT NULL, delivered_at DATETIME DEFAULT NULL, INDEX IDX_75EA56E016BA31DB (delivered_at), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE categoria ADD CONSTRAINT FK_4E10122D7CFC1D2C FOREIGN KEY (espacio_id) REFERENCES espacio (id)');
        $this->addSql('ALTER TABLE comentario ADD CONSTRAINT FK_4B91E702A688222A FOREIGN KEY (entrada_id) REFERENCES entrada (id)');
        $this->addSql('ALTER TABLE entrada ADD CONSTRAINT FK_C949A2743397707A FOREIGN KEY (categoria_id) REFERENCES categoria (id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE entrada DROP FOREIGN KEY FK_C949A2743397707A');
        $this->addSql('ALTER TABLE comentario DROP FOREIGN KEY FK_4B91E702A688222A');
        $this->addSql('ALTER TABLE categoria DROP FOREIGN KEY FK_4E10122D7CFC1D2C');
        $this->addSql('DROP TABLE categoria');
        $this->addSql('DROP TABLE comentario');
        $this->addSql('DROP TABLE entrada');
        $this->addSql('DROP TABLE espacio');
        $this->addSql('DROP TABLE messenger_messages');
    }
}
