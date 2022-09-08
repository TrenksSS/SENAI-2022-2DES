DROP DATABASE IF EXISTS lancamentos;
CREATE DATABASE lancamentos CHARSET=UTF8 COLLATE utf8_general_ci;
USE lancamentos;

CREATE TABLE lancamento(
    n_lancamento INTEGER NOT NULL PRIMARY KEY auto_increment,
    data date NOT NULL,
    descricao VARCHAR(100) NOT NULL,
    valor VARCHAR(10) NOT NULL,
    tipo VARCHAR(20) NOT NULL
);
LOAD DATA INFILE 'C:/Users/Deselvolvimento/Desktop/Ex7/lancamentos_back/lancamentos.csv'
INTO TABLE lancamento
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

SELECT * FROM lancamento;