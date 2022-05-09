--creamos la base de datos

CREATE DATABASE E_commerce;

--Seleccionamos la Base de datos

USE E_commerce;

--creamos las tablas

CREATE TABLE customers(         --correcciones--
    customer_id INT AUTO_INCREMENT PRIMARY KEY,-- MEDIUMINT UNSIGNED NOT NULL
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    phone_number INT UNIQUE NOT NULL,--varchar(50) POR SI PONEMOS +() PARA EL PREFIJO
    address VARCHAR(100) UNIQUE NOT NULL,
    birthdate DATE,--DEFAULT '2000-01-01'
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB CHARSET=utf8 COLLATE=utf8_general_ci;

CREATE TABLE logins(
    login_id INT AUTO_INCREMENT PRIMARY KEY,-- MEDIUMINT UNSIGNED ¿NOT NULL?
    customer INT NOT NULL,-- MEDIUMINT UNSIGNED
    email VARCHAR(50) UNIQUE NOT NULL,
    password VARCHAR(64) UNIQUE NOT NULL,-- VARCHAR(64)--64 PARA GUARDAR UN HASH DE CIFRADO DE CONTRASEÑA (sha-2)
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (customer) REFERENCES customers (customer_id)
) ENGINE=InnoDB CHARSET=utf8 COLLATE=utf8_general_ci;

CREATE TABLE brands(
    brand_id INT AUTO_INCREMENT PRIMARY KEY,-- MEDIUMINT UNSIGNED ¿NOT NULL?
    name VARCHAR(50) NOT NULL,
    country VARCHAR(50) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB CHARSET=utf8 COLLATE=utf8_general_ci;

CREATE TABLE products(
    product_id INT AUTO_INCREMENT PRIMARY KEY,-- MEDIUMINT UNSIGNED ¿NOT NULL?
    brand INT NOT NULL,-- MEDIUMINT UNSIGNED
    model VARCHAR(100) UNIQUE NOT NULL,
    price INT UNSIGNED NOT NULL,--BIGINT
    stock INT UNSIGNED NOT NULL,--BIGINT
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (brand) REFERENCES brands (brand_id)
) ENGINE=InnoDB CHARSET=utf8 COLLATE=utf8_general_ci;

CREATE TABLE cart_items(
    cart_item_id INT AUTO_INCREMENT PRIMARY KEY,-- MEDIUMINT UNSIGNED ¿NOT NULL?
    customer INT NOT NULL,-- MEDIUMINT UNSIGNED
    product INT NOT NULL,-- MEDIUMINT UNSIGNED
    quantity INT UNSIGNED NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (customer) REFERENCES customers (customer_id),
    FOREIGN KEY (product) REFERENCES products (product_id)
) ENGINE=InnoDB CHARSET=utf8 COLLATE=utf8_general_ci;

CREATE TABLE orders(
    order_id INT AUTO_INCREMENT PRIMARY KEY,-- MEDIUMINT UNSIGNED ¿NOT NULL?
    customer INT NOT NULL,-- MEDIUMINT UNSIGNED
    product INT NOT NULL,-- MEDIUMINT UNSIGNED
    invoice_number INT UNIQUE NOT NULL,--MEDIUMINT UNSIGNED
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (customer) REFERENCES customers (customer_id),
    FOREIGN KEY (product) REFERENCES products (product_id)
) ENGINE=InnoDB CHARSET=utf8 COLLATE=utf8_general_ci;

--insertamos los primeros valores

INSERT INTO customers (first_name, last_name, phone_number, address, birthdate) VALUES ('Javi','Rivas',961610211,'Calle Turia, 11-2, 46001 Valencia','1980-12-21');--SI PHONENUMBER ES VARCHAR IRIA ENTRE COMILLAS
INSERT INTO logins (customer, email, password) VALUES (1,'e3mail@outlook.com','123456789Ab');--customer sería el valor de la otra tabla a la que hace referencia
INSERT INTO brands (name, country) VALUES ('Codespace','Spain');
INSERT INTO products (brand, model, price, stock) VALUES (1,'FSW-BOOTCAMP-9',5000,17);
INSERT INTO cart_items (customer, product, quantity) VALUES (1,1,8);
INSERT INTO orders (customer, product, invoice_number) VALUES (1,1,72021);

--Ver cosas
SELECT name FROM products WHERE id = 1; --El producto que está en el carro de la compra.