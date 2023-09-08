CREATE TABLE usuarios(
    nome VARCHAR(50),
    email VARCHAR(100),
    idade INT
);

INSERT INTO usuarios(nome,email,idade) VALUES(
    "Joao Kleber",
    "Joaoklebe@gmail.com",
    25
);

SELECT * FROM usuarios;

SELECT * FROM usuarios WHERE idade = 8;

DELETE FROM usuarios WHERE nome = "Joao Kleber";

update usuarios set nome = "Maria aquina" WHERE nome = "Victor Lima";
