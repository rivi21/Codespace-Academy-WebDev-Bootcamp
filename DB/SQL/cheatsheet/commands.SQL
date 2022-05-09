
# Comprobar si el servidor MySQL está instalado

- En linux
ps aux | grep mysql
- En windows
tasklist /fi "IMAGENAME eq mysqld"
--------------------------------------------------------------------------------

# Instalar MySQL en Ubuntu 20.04 o wsl

## Actualizar los paquetes de Linux a su versión más reciente
- sudo apt update
## Instalar el paquete mysql-server
- sudo apt install mysql-server
## Configurar MySQL
## Iniciar el servidor MySQL
- sudo service mysql start
## Verificar que está ejecutándose
- sudo service mysql status
- ps -A | grep mysql
## Detener MySQL
- sudo service mysql stop
## Detener todos los procesos MySQL en caso de error
- sudo pkill mysqld
## Comprobar la versión de mysql
- mysql --version
---------------------------------------------------------------------------------

# Configurar MySQL

- sudo mysql_secure_installation
- establecer la contraseÃ±a (1234)
## Probar la línea de comandos (prompt) de MySQL
**(prompt: Una secuencia de caracteres que aparece en un monitor para indicar
que el ordenador está listo para recibir entradas.)**
- sudo mysql
## Listar los usuarios y host del servidor
- select user, host from mysql.user;
## Configurar la cuenta root para autenticar con una contraseña
- ALTER USER 'root'@'localhost' IDENTIFIED WITH caching_sha2_password BY '1234';
**En caso de que falle la autenticación,
establecer root para que autentique con mysql_native_password**
- ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '1234';
## Ver las métricas de configuración de validación de contraseña
- SHOW VARIABLES LIKE 'validate_password%';
### Establecer las métricas de configuración
- SET GLOBAL validate_password.length = 6;
- SET GLOBAL validate_password.number_count = 0;
## Recargar la tabla de permisos y aplicar los cambios
- FLUSH PRIVILEGES;
**Este comando únicamente es necesario cuando se modifican tablas de concesión
con instrucciones como INSERT, UPDATE o DELETE**
## Cerrar la consola de MySQL
- exit
** Si ahora intentamos acceder con sudo mysql nos dará¡ un error:**
Access denied for user 'root'@'localhost' (using password: NO)
Nos está pidiendo la contraseña.
## Acceder como root con la contraseña anteriormente indicada
- mysql -u root -p
## Crear un nuevo usuario con contraseña
- CREATE USER 'usuario'@'localhost' IDENTIFIED BY 'usuario';
## Conceder privilegios de usuario a todas las tablas
## de todas las bases de datos, y además de añadir, cambiar y eliminar privilegios de
usuario
- GRANT ALL PRIVILEGES ON *.* TO 'usuario'@'localhost' WITH GRANT OPTION;
**El *.* significa todas las bases de datos y todas las tablas**
---------------------------------------------------------------------------------

# Ejecutando consultas

**Accedemos con el nuevo usuario: "usuario", y probamos la siguiente consulta:**
- SELECT VERSION(), CURRENT_DATE,
**Nos devuelve la versión del servidor y la fecha actual**
## Obtener fecha y hora
- SELECT NOW();
19/12/21 19:08Firefox
## Obtener el usuario actual
- SELECT USER();
---------------------------------------------------------------------------------

# Gestionar las bases de datos

## Mostrar las bases de datos existentes
- SHOW DATABASES;
-------------------------------------------------------------

# Crear y seleccionar bases de datos

## Crear la base access_control
- CREATE DATABASE access_control;
## Usar la bases access_control
- USE access_control;
** se puede acceder directamente a la base de datos deseada con el comando:**
- mysql -h localhost -u usuario -p access_control
## comprobar la base de datos seleccionada
- SELECT DATABASE();
## borrar una base de datos
- DROP ...??--REPASAR--
-------------------------------------------------------------

# Manejo de tablas

## Mostrar las tablas de la base actual
- SHOW TABLES;
## Atributos de columnaAtributo Significado --CONSTRAINTS--
- null: Se permiten valores nulos, atributo por omisión si no se especifica lo contrario.
- not null: No se permiten valores nulos.
- default valor: Valor por omisiÓn que se asigna a la columna.
- auto_increment: El valor se asigna automáticamente incrementando en uno el máximo
valor registrado. Aplicable únicamente a las columnas marcadas como clave primaria.
- primary key: Señala al campo como clave primaria, implícitamente también
lo declara como not null.
- unique: no pueden duplicarse valores.
**La diferencia entre una restricción UNIQUE y una clave primaria es que
por cada tabla puede haber una única clave primaria, mientras que puede
definir más de una restricción UNIQUE.**
- foreign key (columna) references tabla (columna2): define que los valores de columna
se permitirán únicamente si existen en tabla(columna2).
Es decir, columna hace referencia a los registros de tabla,
esto asegura que no se realicen referencias a registros que no existen.
- index (columna,...): permite encontrar rápidamente filas con valores de columna específicos
## Tipos de datos
- Numéricos: (unsigned, zerofill)
- Cadenas de caracteres
- Fechas y horas
- null (es un caso especial de dato, que significa que no se le ha asignado ningún valor)
## Crear una tabla
- CREATE TABLE mascotas (
id MEDIUMINT NOT NULL AUTO_INCREMENT,
tipo ENUM('pez','mamifero','ave') NOT NULL,
nombre CHAR(30) NOT NULL,
PRIMARY KEY (id)
) ENGINE=InnoDB CHARSET=utf8 COLLATE=utf8_general_ci;
## Insertar datos en una tabla
- INSERT INTO mascotas (tipo,nombre) VALUES
('mamifero','perro'),
('mamifero','gato'),
('ave','loro'),
('pez','goldfish'),
('mamifero','ardilla'),
('ave','canario');
## Mostrar los datos de una tabla (ordenados por tipo y por id)
- SELECT * FROM mascotas ORDER BY tipo,id;
## Describir la estructura de una tabla
- DESCRIBE mascotas; --DESC mascotas;
## Obtener el script de creación de una tabla
- SHOW CREATE TABLE mascotas;
## Crear una copia de seguridad de una tabla
**cerrar el prompt de mysql**
- mysqldump -u usuario -p access_control mascotas > mascotas.sql;
## restaurar una copia de seguridad (fuera del prompt)
- mysql < mascotas.sql
## restaurar una copia de seguridad (desde el prompt)
- source mascotas.sql
## modificar una tabla
## añadir una columna
- alter table mascotas add column edad smallint not null;
## añadir una columna en una posición concreta
- alter table mascotas add column edad smallint not null default 0 after id;
## eliminar una columna
- alter table mascotas drop column edad;
## renombrar una tabla
- rename table mascotas to especies;
## añadir un índice a una tabla existente
- alter table especies add index tipo_edad(tipo, edad);
## cambiar el nombre de una columna con clave primaria
- alter table especies drop primary key,
change id id_especie INT unsigned PRIMARY KEY AUTO_INCREMENT;
## obtener cuantos animales hay de cada tipo
- select tipo, count(*) as cantidad from especies group by tipo;
## actualizar un campo
- update especies set edad = 5 where id_especie = 1;
## borrar elementos de una tabla
- delete from especies where tipo like 'ave';
## borrar todos los registros de una tabla
- truncate table especies;
--------------------------------------------------------------

# Tablas con claves foraneas

- CREATE TABLE parent (
id INT NOT NULL,
PRIMARY KEY (id)
) ENGINE=INNODB;
- CREATE TABLE child (
id INT,
parent_id INT,
INDEX par_ind (parent_id),
FOREIGN KEY (parent_id)
REFERENCES parent(id)
ON DELETE CASCADE
) ENGINE=INNODB;
