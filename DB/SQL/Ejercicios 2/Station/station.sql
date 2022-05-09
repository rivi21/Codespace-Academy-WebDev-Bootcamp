--Crea la tabla STATION tal como se muestra en la siguiente imagen, y añade en ella la información correspondiente del archivo tables-data.txt

CREATE TABLE STATION(
    id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    city VARCHAR(21) NOT NULL,
    state CHAR(2) NOT NULL,
    lat_n DECIMAL(13,10),
    long_w DECIMAL(13,10)
);

--Consultar una lista de CIUDAD y ESTADO de la tabla STATION.

SELECT city, state FROM STATION;

--Consultar una lista de nombres de CIUDADES desde STATION para las ciudades que tienen un número de identificación par. 
--Imprime los resultados en cualquier orden, pero excluye los duplicados de la respuesta.

SELECT DISTINCT(city) FROM STATION WHERE `id`% 2 = 0;
SELECT DISTINCT(city) FROM STATION WHERE mod(id,2) = 0; --son lo mismo

--Encuentra la diferencia entre el número total de entradas de CIUDAD en la tabla y el número de entradas distintas de CIUDAD en la tabla.

SELECT COUNT(city) - COUNT(DISTINCT city) FROM STATION;

--POSIBILIDADES--COMPROBAR EN CASA

SELECT DISTINCT count(`city`) FROM STATION city;

--Consulte las dos ciudades en STATION con los nombres de CIUDAD más corto y más largo, así como sus respectivas longitudes 
(es decir: número de caracteres en el nombre). Si hay más de una ciudad con el nombre más corto o más largo, elige la que 
viene primero cuando se ordena alfabéticamente.
Cuando se ordenan alfabéticamente, los nombres de CIUDADES aparecen como ABC, DEF, PQRS y WXY, con longitudes 3, 3, 4 y 3. 
El nombre más largo es PQRS, pero hay 3 opciones para el nombre de ciudad más corto. La respuesta debe ser ABC, porque es la primera por orden alfabético.
Nota:Puedes escribir dos consultas separadas para obtener el resultado deseado. No es necesario que sea una única consulta.
--PARA EL MAS CORTO
SELECT city, LENGTH(city) FROM station ORDER BY LENGTH(city), city ASC LIMIT 1
--PARA EL MAS LARGO
SELECT city, LENGTH(city) FROM station ORDER BY LENGTH(city) DESC, city LIMIT 1

--Consulta la lista de nombres de CIUDADES que comienzan con vocales (es decir, a, e, i, o, u) de STATION. El resultado no puede contener duplicados.
SELECT distinct(city) from station where city like 'a%' or city like 'e%' or city like 'i%' or city like 'o%' or city like 'u%';

--Consulta la lista de nombres de CIUDADES que terminan en vocal (a, e, i, o, u) de STATION. El resultado no puede contener duplicados. 
SELECT distinct(city) from STATION where city like '%a' or city like '%e' or city like '%i' or city like '%o' or city like '%u'

--Consulta la lista de nombres de CIUDADES de STATION que tienen vocales (es decir, a, e, i, o y u) como primer y último carácter. 
--El resultado no puede contener duplicados. 

--Consulta la lista de nombres de CIUDADES de STATION que no comienzan con vocales. El resultado no puede contener duplicados.

--Consulta la lista de nombres de CIUDADES de STATION que no terminan en vocal. El resultado no puede contener duplicados.

--Consulta la lista de nombres de CIUDADES de STATION que no empiezan con vocales o no terminan con vocales. El resultado no puede contener duplicados. 

--Consulta la lista de nombres de CIUDADES de STATION que no comienzan con vocales y no terminan con vocales. El resultado no puede contener duplicados. 

--Consulta los dos valores siguientes de la tabla STATION:
    • La suma de todos los valores en LAT_N redondeada a una escala de 2 decimales.
    • La suma de todos los valores de LONG_W redondeada a una escala de 2 decimales. 

select round(sum(LAT_N),2), round(sum(LONG_W),2) from STATION;

--Consulta la suma de las Latitudes Norte (LAT_N) de STATION que tengan valores superiores a 38.7880 e inferiores a 137.2345. Trunca la respuesta a 4 decimales.

--Consultar el mayor valor de las latitudes del norte (LAT_N) de STATION que sea menor que 137.2345. Trunca la respuesta a 4 decimales

--Consultar la longitud oeste (LONG_W) para la latitud norte más grande (LAT_N) en STATION que sea menor que 137.2345. Trunca la respuesta a 4 decimales.

--Consultar la latitud norte más pequeña (LAT_N) de STATION que sea mayor que 38.7780. Trunca la respuesta a 4 decimales.

--Consultar la longitud oeste (LONG_W) para la latitud norte más pequeña (LAT_N) en STATION que sea mayor que 38.7780. Trunca la respuesta a 4 decimales.