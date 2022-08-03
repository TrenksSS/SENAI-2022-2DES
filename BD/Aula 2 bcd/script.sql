
drop database if exists pedidos;
create database pedidos charset=UTF8 collate utf8_general_ci;
--como fazer um comentario, colocar dois ifens
use pedidos;
-- DDL criação da estrutura do banco de dados
create table clientes(
    id_cliente integer not null primary key auto_increment,
    pri_nome varchar(20) not null,
    sobrenome varchar(20) not null,
    endereco varchar(100) not null
); 
create table telefones(
    id_cliente integer not null,
    telefone varchar(15) not null,
    foreign key (id_cliente) references clientes(id_cliente)
);
create table pedidos(
    numero_pedito integer not null primary key auto_increment,
     id_cliente integer not null,
     data timestamp not null,
     valor decimal(8,2) not null,
     descricao varchar(50) not null,
     quantidade integer(4) not null,
     foreign key (id_cliente) references clientes(id_cliente)
);


describe clientes;
describe telefones;
describe pedidos;
show tables;

-- DML Alimentar o banco de dados com dados de teste
insert into clientes values
(null,"jorge","Silva","Rua Coisa Bueno - Jaguariuna - SP"),
(null,"Vanessa","Silva","Rua Costa Bueno - Jaguariuna - SP"),
(null,"jorgete","Solsa","Rua Bueno - Jaguariuna - SP"),
(null,"joão","Silva","Rua Elias Bueno - Jaguariuna - SP");

inset into telefones values
(1,"11 9 5809-6340"),
(2,"11 9 5809-6340"),
(3,"11 9 5809-6340"),
(4,"11 9 5809-6340");

select * from clientes;
