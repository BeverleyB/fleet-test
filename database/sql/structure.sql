CREATE DATABASE IF NOT EXISTS ecommerce;

USE ecommerce;

CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL,
    password VARCHAR(100) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS orders (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    product_id INT NOT NULL,
    total_amount DECIMAL(10, 2) NOT NULL,
    order_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (product_id) REFERENCES products(id)
);

INSERT INTO users (username, email, password) VALUES
('bev', 'bev@example.com', 'pwd1'),
('raph', 'raph@example.com', 'pwd2'),
('toto', 'toto@example.com', 'pwd3'),
('lilwayne', 'lilwayne@example.com', 'pwd4'),
('georges', 'georges@example.com', 'pwd5'),
('micha', 'micha@example.com', 'pwd6');

INSERT INTO products (name, price, description) VALUES
('Product_1', 19.99, 'the best on the market'),
('Product_2', 29.99, 'amazing product !'),
('Product_3', 39.99, 'you should buy it now'),
('Product_4', 49.99, 'beautiful product'),
('Product_5', 59.99, 'amazing lamp'),
('Product_6', 69.99, 'blue carpet');

INSERT INTO orders (user_id, product_id, total_amount) VALUES
(1, 1, 19.99),
(1, 2, 29.99),
(3, 3, 39.99),
(1, 4, 49.99),
(4, 2, 29.99),
(2, 5, 59.99),
(5, 6, 69.99),
(1, 2, 29.99),
(2, 5, 59.99),
(6, 1, 19.99),
(4, 4, 49.99),
(2, 3, 39.99),
(6, 1, 19.99),
(5, 2, 29.99),
(3, 6, 69.99);