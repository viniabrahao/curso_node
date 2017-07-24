//codigo basico sem express

//incluindo blib http
var http = require('http');
//criando o servidor
var server = http.createServer(function(req, res){
	//requisicao para cada parte do site
	var categoria = req.url;

	if (categoria == '/tecnologia'){
		res.end("<html><body>Portal de tecnologia</body></html>");
	} else if (categoria == '/moda') {
		res.end("<html><body>Portal de Moda</body></html>");
	} else if (categoria == '/beleza') {
		res.end("<html><body>Portal de beleza</body></html>");
	} else{
	res.end("<html><body>Portal de noticias</body></html>");
	}

});
//Ouvindo a porta 3000
server.listen(3000);