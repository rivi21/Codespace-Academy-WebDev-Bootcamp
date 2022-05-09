CREATE DATABASE Cities;

CREATE TABLE CITY(
    id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(17) NOT NULL,
    countrycode CHAR(3) NOT NULL,
    district VARCHAR(20) NOT NULL,
    population INT UNSIGNED NOT NULL
);
INSERT INTO CITY (ID,NAME,COUNTRYCODE,DISTRICT,POPULATION) VALUES --Revisar este formato en casa--
 (6,'Rotterdam','NLD','Zuid-Holland',593321),
 (3878,'Scottsdale','USA','Arizona',202705),
 (3965,'Corona','USA','California',124966),
 (3973,'Concord','USA','California',121780),
 (3977,'Cedar Rapids','USA','Iowa',120758),
 (3982,'Coral Springs','USA','Florida',117549),
 (4054,'Fairfield','USA','California',92256),
 (4058,'Boulder','USA','Colorado',91238),
 (4061,'Fall River','USA','Massachusetts',90555);


--Mostrar ciudades americanas con mas de cienmil habitantes
SELECT * FROM CITY WHERE population > 100000 AND countrycode = 'USA';

--Consulta el campo NAME de todas las ciudades americanas de la tabla CITY con una población
--superior a 120000. El CountryCode de América es USA

SELECT name FROM CITY WHERE population > 120000 AND countrycode = 'USA';

--Consultar todas las columnas (atributos) de cada fila de la tabla CITY

SELECT * FROM CITY;

--Consultar todas las columnas de una ciudad en CITY con el ID 1661

SELECT * FROM CITY WHERE id = 1661;

--Consulta todos los atributos de cada ciudad japonesa en la tabla CITY. El COUNTRYCODE de Japón es JPN.

SELECT * FROM CITY WHERE countrycode = 'JPN';

--Consulta los nombres de todas las ciudades japonesas en la tabla CITY. El COUNTRYCODE de Japón es JPN.

SELECT name FROM CITY WHERE countrycode = 'JPN';

--Consulta la cantidad de ciudades en CITY que tienen una población mayor que 100000.

SELECT count(id) FROM CITY WHERE population > 100000;

--Consultar la población total de todas las ciudades de CITY donde el Distrito es California.

SELECT sum(population) FROM `CITY` WHERE district = 'California';

--Consultar la población promedio de todas las ciudades de CITY donde el Distrito es California.

SELECT avg(population) FROM CITY WHERE district = 'California';

--Consultar la población promedio de todas las ciudades de CITY, redondeada al nº entero mas cercano.

SELECT round(avg(population)) FROM CITY;

--Consultar la suma de las poblaciones de todas las ciudades japonesas en CITY. El COUNTRYCODE para Japón es JPN.

SELECT sum(population) FROM CITY WHERE countrycode = 'JPN';

--Consultar la diferencia entre las poblaciones máxima y mínima en CITY.

SELECT max(population)-min(population) FROM CITY; --Así sin () que engloben tb me ha salido. ¿PREGUNTAR?
SELECT (max(population)-min(population)) FROM CITY;

--ELIMINAR todas las ciudades que no sean de USA

DELETE FROM CITY WHERE countrycode NOT LIKE "USA";--vale comillas simples o dobles

--Modificar la ciudad con el id 4061 para que el nombre sea Hiroshima, countrycode JPN , 
--el distrito Hokkaido y la población 150000

UPDATE CITY SET name='Hiroshima', countrycode='JPN', district='Hokkaido', population=150000 WHERE id=4061;

--Desde la interfaz phpMyAdmin, vacía la tabla CITY.

PESTAÑA 'Operaciones' SECCIÓN 'Borrar datos o tabla':  TRUNCATE;

--A continuación, añade la tabla COUNTRY a la base de datos cities.(lo he hecho en phpMyAdmin pero en consola sería así)

CREATE TABLE `cities`.`COUNTRY` ( 
    `code` VARCHAR(3) NOT NULL , 
    `name` VARCHAR(44) NOT NULL , 
    `continent` VARCHAR(13) NOT NULL , 
    `region` VARCHAR(25) NOT NULL , 
    `surfacearea` DECIMAL(10,0) NULL , 
    `indepyear` VARCHAR(4) NULL , 
    `population` INT NULL , 
    `lifeexpectancy` VARCHAR(4) NULL , 
    `gnp` DECIMAL(10,0) NULL , 
    `gnpold` VARCHAR(9) NULL , 
    `localname` VARCHAR(44) NOT NULL , 
    `governmentform` VARCHAR(44) NOT NULL , 
    `headofstate` VARCHAR(32) NULL , 
    `capital` VARCHAR(4) NULL , 
    `code2` VARCHAR(2) NOT NULL , 
    PRIMARY KEY (`code`)
) ENGINE = InnoDB; 

--Desde el archivo country-data (en classlife) importa la información para la tabla COUNTRY (158 filas).

Hay que modificar el tamaño del tipo de dato en la columna de governmentform de VARCHAR(44) a VARCHAR(60 o +) yo he puesto VARCHAR(64)

--Modifica la tabla CITY, para que el campo countrycode sea clave foránea de COUNTRY.code.

ALTER TABLE CITY ADD FOREIGN KEY(countrycode) REFERENCES COUNTRY(code); --¿QUE SIGNIFICA ON DELETE O ON UPDATE CASCADE?

--Desde el archivo city-data2 (en classlife) importa la información necesaria para la tabla CITY (65 filas)

--Consultar la suma de las poblaciones de todas las ciudades donde el CONTINENTE es 'Asia'.

SELECT sum(population) FROM CITY WHERE countrycode in (select code from COUNTRY where continent = 'Asia');

--Consultar los nombres de todas las ciudades donde el CONTINENTE es 'África'.

SELECT name FROM CITY WHERE countrycode in (select code from COUNTRY where continent like 'Africa');

--Consultar los nombres de todos los continentes y sus respectivas poblaciones medias de la ciudad redondeadas al número entero más cercano.

SELECT COUNTRY.continent, ROUND(avg(CITY.population)) FROM COUNTRY INNER JOIN CITY ON CITY.countrycode = Country.code group
by COUNTRY.continent order by continent asc;

SELECT COUNTRY.continent, FLOOR(avg(CITY.population)) FROM COUNTRY INNER JOIN CITY ON CITY.countrycode = Country.code group
by COUNTRY.continent order by continent asc; --¿Es lo mismo round que floor?
