const Sequelize = require('sequelize');

const sequelize = new Sequelize('sistemadebancodedados', 'root', 'guga2004', {
    host: "localhost",
    dialect: 'mysql'
});

sequelize.authenticate().then(() => {
    console.log("conectado com sucesso");
}).catch((erro) => {
    console.log("falha ao se conectar");
});

const Postagem = sequelize.define('postagens', {
     title: {
        type: Sequelize.STRING,
     },
     conteudo: {
        type: Sequelize.TEXT
     }

     //cá
});

Postagem.create({
    //tudo que criar aqui deverá vir para 
    title: "Qualquer um",
    conteudo: "hdhfosdfsd",
});

const usuarios = sequelize.define('Usuarios', {
    nome: {
        type: Sequelize.STRING
    },
    sobrenome: {
        type: Sequelize.STRING
    },
    idade: {
        type: Sequelize.INTEGER
    },
    email: {
        type: Sequelize.STRING
    }
});

usuarios.create({
    nome: "Gustavo",
    sobrenome: "Henrique",
    idade: 18,
    email: "gustavo@gmail.com",
});

