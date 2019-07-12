-- Drops the burger db if it exists currently --
DROP DATABASE IF EXISTS burger_db;
-- Creates the "burger" database --
CREATE DATABASE burger_db;

USE burger_db;

CREATE TABLE products (
  id INT NOT NULL AUTO_INCREMENT,
  burger_name VARCHAR(45) NULL,
  devoured BOOLEAN,

  PRIMARY KEY (id)
);
