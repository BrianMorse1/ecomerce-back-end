-- DROP DATABASE
DROP DATABASE IF EXISTS ecommerce_db;

-- CREATE DATABASE
CREATE DATABASE ecommerce_db;

USE ecommerce_db;

-- Create Tables for seed data
DROP TABLE IF EXISTS category;
CREATE TABLE category (
  id INT AUTO_INCREMENT PRIMARY KEY,
  category_name VARCHAR(50) NOT NULL
);


DROP TABLE IF EXISTS product;
CREATE TABLE product (
  id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(255) NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  stock INT NOT NULL DEFAULT 10,
  category_id INT,
  PRIMARY KEY (id),
  FOREIGN KEY (category_id) REFERENCES category(id)
);

DROP TABLE IF EXISTS tag;
CREATE TABLE tag (
  id INTEGER NOT NULL AUTO_INCREMENT,
  tag_name VARCHAR(30),
  PRIMARY KEY (id)
);

DROP TABLE IF EXISTS product_tag;
CREATE TABLE product_tag (
  id INTEGER NOT NULL AUTO_INCREMENT,
  product_id INTEGER,
  tag_id INTEGER,
  PRIMARY KEY (id),
  FOREIGN KEY (product_id) REFERENCES product (id),
  FOREIGN KEY (tag_id) REFERENCES tag (id)
);

