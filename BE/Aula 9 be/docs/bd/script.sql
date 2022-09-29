DROP DATABASE IF EXISTS Patrimonio;
CREATE DATABASE Patrimonio charset=UTF8 COLLATE utf8_general_ci;
USE Patrimonio;

CREATE TABLE itens(
    ni NUMERIC(6) not null,
    aquisicao TIMESTAMP NOT NULL,
    denominacao VARCHAR(100) NOT NULL,
    valo NUMERIC(10, 2),
    img VARCHAR(200) DEFAULT 'defaut.png',
    CONSTRAINT pk_item PRIMARY KEY (ni)
);

LOAD DATA INFILE 'C:/Users/Deselvolvimento/Desktop/SENAI-2022-2DES/BE/Aula 9 be/docs/bd/itens.csv'
INTO TABLE itens
FIELDS TERMINATED BY ','
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

SELECT * FROM itens;