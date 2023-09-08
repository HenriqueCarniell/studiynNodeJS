const express = require('express');
const app = express();
<<<<<<< HEAD
const bodyparser = require('body-parser')
const handlebars  = require('express-handlebars');
const Sequelize = require('sequelize')
const Post = require('./models/Post')

// configs
=======
const handlebars  = require('express-handlebars');
const Sequelize = require('sequelize')
>>>>>>> 487380b7d3341b665b6a80d3279940e638fd7025

var handle = handlebars.create({
    defaultLayout: 'main'
    });

<<<<<<< HEAD
    app.engine('handlebars', handlebars.engine ({
        defaultLayout: 'main', runtimeOptions: {
            allowProtoPropertiesByDefault: true,
            allowProtoMethodsByDefault: true
        }
    }))

app.set('view engine', 'handlebars');

// body parser 

app.use(bodyparser.urlencoded({extend:false}));
app.use(bodyparser.json());

// Rotas

app.get('/', (req,res) => {
    res.render('formulario');
});

app.get('/formsend', (req,res) => {
    Post.findAll().then((post) => {
        res.render('home', {
            post: post
        });
    });
});

app.post("/add", (req,res) => {
    Post.create({
        titulo: req.body.titulo,
        conteudo: req.body.conteudo
    }).then(() => {
        res.redirect('/formsend')
    }).catch(erro => { 
        res.send("Ouve um erro" +erro)
    });
    
})

app.listen(8081, () => {
    console.log('rodando na porta 8081');
=======
app.engine('handlebars', handle.engine);
app.set('view engine', 'handlebars');



    // conexão com o banco de dados mysql
    const sequelize = new Sequelize('sistemadebancodedados', 'root', 'guga2004', {
        host: "localhost",
        dialect: 'mysql'
    });
// Rotas

app.get('/', (req,res) => {
    res.render('formulario')
})



app.listen(8081, () => {
    console.log('rodando na porta 8081')
>>>>>>> 487380b7d3341b665b6a80d3279940e638fd7025
});