--Crear base de datos
CREATE DATABASE nombre;

--seleccionar una DB
USE nombreDB;

--crear tabla
CREATE TABLE nombre(
    --campos con tipos + constraints (definen la integridad de los datos a almacenar 
    -- para obtener una coherencia de los datos almacenados)
);

--eliminar tabla
DROP TABLE nombre;

--describir tabla
DESC nombre;

DESCRIBE nombre;

-- cifrado de contraseñas
SELECT
    SHA2 (ABC, 123) --REVISAR




------------------------INSTALAR PHPmyAdmin-----------------------------------

--PASO 1
--Abrimos consola de Linux
Ctrl-shift-t --abre una 2º pestaña en la consola de linux


--PASO 2 
--EN LA PESTAÑA 1:
sudo mysql -u usuario -p --(y tus contraseñas de la mv y de mysql)
--ya dentro de mysql escribes:
UNINSTALL COMPONENT "file://component_validate_password";--para que no de problemas al instalar phpmyAdmin


--PASO 3
--NOS VAMOS A LA PESTAÑA 2 (FUERA DE MYSQL) Y POR ESTE ORDEN:
sudo apt update 
sudo apt install phpmyadmin 
--Cuando te pida Y/N pones yes y seguirá instalando
--Pantalla azul de configuración de servidor: Elige APACHE 2 con la barra espaciadora. Después tabulador y  enter xa aceptar.
--Pantalla azul de contraseña: Elige la que tú quieras


--PASO 4
--VOLVEMOS A LA PESTAÑA 1 (a de mysql) y reinstalamos el componente que hemos desinstalado antes así: 
INSTALL COMPONENT "file://component_validate_password";

--PASO 5
--OTRA VEZ A LA PESTAÑA 2 (fuera de mysql) y por orden:
sudo phpenmod mbstring --habilita esta extensión para trabajar apache con phpmyadmin
sudo systemctl restart apache2 --reinicia el servidor Apache
sudo service apache2 status --Esto solo para comprobar si está activo
tecla Q --para salir

--CON ESTO YA ESTÁ LA INSTALACIÓN COMPLETA. SOLO QUEDA ABRIR EL NAVEGADOR DE LA MV Y EN DOS VENTANAS 
--DIFERENTES PONER :

http://localhost:80 --o solo localhost (AQUÍ VERÁS LA DEFAULT PAGE DE APACHE SI TODO HA IDO BIEN )

http://localhost/phpmyadmin --PAG. DE BIENVENIDA DE PHPMYADMIN (usuario: root / contraseña: 1234, o la que tengamos de root)

--OJO!!!! -- poner http tal y como está, no https

--...Y LISTO

--vip mirar las expresiones regulares--
https://docs.microsoft.com/es-es/visualstudio/ide/using-regular-expressions-in-visual-studio?view=vs-2022