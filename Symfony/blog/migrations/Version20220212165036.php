<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20220212165036 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE etiqueta (id INT AUTO_INCREMENT NOT NULL, nombre VARCHAR(255) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE etiqueta_entrada (etiqueta_id INT NOT NULL, entrada_id INT NOT NULL, INDEX IDX_97999198D53DA3AB (etiqueta_id), INDEX IDX_97999198A688222A (entrada_id), PRIMARY KEY(etiqueta_id, entrada_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE etiqueta_entrada ADD CONSTRAINT FK_97999198D53DA3AB FOREIGN KEY (etiqueta_id) REFERENCES etiqueta (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE etiqueta_entrada ADD CONSTRAINT FK_97999198A688222A FOREIGN KEY (entrada_id) REFERENCES entrada (id) ON DELETE CASCADE');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE etiqueta_entrada DROP FOREIGN KEY FK_97999198D53DA3AB');
        $this->addSql('DROP TABLE etiqueta');
        $this->addSql('DROP TABLE etiqueta_entrada');
    }
}
