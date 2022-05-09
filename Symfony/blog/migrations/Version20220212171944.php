<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20220212171944 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE comentario ADD usuario_id INT NOT NULL');
        $this->addSql('ALTER TABLE comentario ADD CONSTRAINT FK_4B91E702DB38439E FOREIGN KEY (usuario_id) REFERENCES usuario (id)');
        $this->addSql('CREATE INDEX IDX_4B91E702DB38439E ON comentario (usuario_id)');
        $this->addSql('ALTER TABLE entrada ADD usuario_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE entrada ADD CONSTRAINT FK_C949A274DB38439E FOREIGN KEY (usuario_id) REFERENCES usuario (id)');
        $this->addSql('CREATE INDEX IDX_C949A274DB38439E ON entrada (usuario_id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE comentario DROP FOREIGN KEY FK_4B91E702DB38439E');
        $this->addSql('DROP INDEX IDX_4B91E702DB38439E ON comentario');
        $this->addSql('ALTER TABLE comentario DROP usuario_id');
        $this->addSql('ALTER TABLE entrada DROP FOREIGN KEY FK_C949A274DB38439E');
        $this->addSql('DROP INDEX IDX_C949A274DB38439E ON entrada');
        $this->addSql('ALTER TABLE entrada DROP usuario_id');
    }
}
