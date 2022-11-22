

SELECT * FROM Funcionarios
describe Funcionarios
INSERT INTO Funcionarios VALUE



SELECT * FROM Produtos
describe Itens_Solicitacao
SELECT *FROM Itens_Solicitacao WHERE Cod_Produto = 125
SELECT *FROM Itens_Solicitacao WHERE Cod_Produto = 145
describre Solicitacoes
SELECT *FROM Solicitacoes WHERE Num_Sol = 1000
describre departamentos
SELECT *FROM Departamentos WHERE Cod_Depto = 2001
SELECT *FROM Solicitacoes WHERE Num_Sol = 1005
SELECT *FROM Departamentos WHERE Cod_Depto = 1000
SELECT *FROM Solicitacoes WHERE Num_Sol = 1020
SELECT *FROM Departamentos WHERE Cod_Depto = 2000
SELECT *FROM Solicitacoes WHERE Num_Sol = 1010
SELECT *FROM Departamentos WHERE Cod_Depto = 1000





CREATE view vw_func asselect s.Num_Sol, s.Data_sol, d.Cod_Depto, d.Nome_Depto , f.Cod_Func, f.Nome_Func, p.Cod_Produto, p.Nome_produto, i.Qtde, i.Valor  FROM solicitacoes s INNER JOIN  departamentos d ON d.Cod_Depto = s.Cod_Depto INNER JOIN  funcionarios f ON f.Cod_Func = s.Cod_Func INNER JOIN  itens_solicitacao i on i.Num_Sol = s.Num_Sol INNER JOIN  produtos p ON p.Cod_Produto = i.Cod_Produto;SELECT *FROM vw_func ORDER BY  Num_Sol DESC






CREATE PROCEDURE solicita_um_item @n_sol varchar(4), @depto varchar(4), @func varchar(4), @prod varchar(4), @qtd varchar(12,2), @total varchar(12,2) 
AS 
SELECT * FROM Solicitacoes WHERE Num_Sol = @n_sol AND Cod_Depto = @depto AND Cod_Func = @func AND Cod_Produto = @prod AND Qtde = @qtd AND Valor = @total
GO