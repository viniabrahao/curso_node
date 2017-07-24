
//pegando dados do modulo
var app = require('./config/server');
//incluindo modulos da view
//var rotaNoticias = require('./app/routes/noticias')(app);
//var rotaHome = require('./app/routes/home')(app);
//var rotaFormInclud = require('./app/routes/formulario_inclusao_noticia')(app);	

//funcao de callback
app.listen(3000, function(){
	console.log("Servidor up");
	//parenteses para retorna da funcao
});