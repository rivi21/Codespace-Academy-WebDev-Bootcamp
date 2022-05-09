CREATE TABLE Alumnos(
    -> id int unsigned NOT NULL AUTO_INCREMENT,
    -> nombre VARCHAR(30) NOT NULL,
    -> apellidos VARCHAR(60) NOT NULL,
    -> DNI VARCHAR(30) NOT NULL,
    -> telefono int NOT NULL,
    -> email VARCHAR(60) unique NOT NULL,
    -> birth date NOT NULL,
    -> PRIMARY KEY (id) ->
) ENGINE = InnoDB CHARSET = utf8 COLLATE = utf8_general_ci;

CREATE TABLE Cursos(
    -> id int unsigned NOT NULL AUTO_INCREMENT,
    -> nombre VARCHAR(30) NOT NULL,
    -> precio int unsigned NOT NULL,
    -> duracion VARCHAR(60) NOT NULL,
    -> horario VARCHAR(100) NOT NULL,
    -> dificultad enum('fácil', 'medio', 'difícil') NOT NULL,
    -> PRIMARY KEY (id) ->
) ENGINE = InnoDB CHARSET = utf8 COLLATE = utf8_general_ci;

CREATE TABLE Matriculas(
    -> id int unsigned NOT NULL AUTO_INCREMENT,
    -> id_Cursos int unsigned NOT NULL,
    -> id_Alumnos int unsigned NOT NULL,
    -> fecha year NOT NULL -> PRIMARY KEY (id),
    -> FOREIGN KEY (id_Cursos) REFERENCES Cursos(id),
    -> FOREIGN KEY (id_Alumnos) REFERENCES Alumnos(id) ->
) ENGINE = InnoDB CHARSET = utf8 COLLATE = utf8_general_ci;

INSERT INTO
    Alumnos (
        1,
        'Javi',
        'Rivas Navarro',
        '29177173-V',
        961610211,
        'javivarro@msn.com',
        04 -12 -1980
    );

insert into
    matriculas (cuurso_id, estudiante_id, fecha)
values
    (1, 1, 2021)
);

/* --Codigo corregido--
 
 create table Alumnos(
 id mediumint unsigned not null auto_increment,
 nombre varchar(100) not null, 
 apellidos varchar(100) not null,
 dni varchar(10) unique not null,
 telefono int not null,
 fecha_nacimiento date not null,
 email varchar(100) unique not null,
 primary key(id)
 );
 
 create table Cursos(
 id int unsigned not null auto_increment,
 nombre_del_curso varchar(50) not null, 
 precio bigint unsigned not null,
 duracion varchar(10) not null,
 horario varchar(100) not null,
 dificultad enum('facil','medio','dificil') not null,
 primary key(id)
 );
 
 create table Matriculas(
 id int unsigned not null auto_increment,
 curso_id int unsigned not null, 
 estudiante_id mediumint unsigned not null, 
 fecha year not null,
 primary key(id),
 foreign key (curso_id) references Cursos(id),
 foreign key (estudiante_id) references Alumnos(id)
 );
 
 */