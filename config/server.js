//para retornar a funcao do modulo express
var express = require('express');
//chamando consign
var consign = require('consign');
//chamando body_parser
var bodyParser = require('body-parser')
//chamando express validator
var expressValidator = require('express-validator');
//chamando funcao
var app = express();
//indicando modulo ejs 
app.set('view engine', 'ejs');
//setando diretorio de viwes padrao
app.set('views','./app/views');
//incluindo body parser(middleware)
app.use(bodyParser.urlencoded({extend: true}));
app.use(expressValidator());
app.use(express.static('./app/public'));
//reconhecendo rotas para o app
consign()
	.include('app/routes')
	.then('config/dbConnection.js')
	.then('app/models')
	.then('app/controllers')
	.into(app);
//exportando
module.exports = app;