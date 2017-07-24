module.exports.noticias = function (app, req, res) {
		var connection = app.config.dbConnection();
		var noticiasModel = new app.app.models.NoticiasDAO(connection);
		//recuperando dados do banco
		noticiasModel.getNoticias(function(erro, result){
			res.render("noticias/noticias", {noticias : result});
		});
	// body...
}
module.exports.noticia = function(app, req, res){
		var connection = app.config.dbConnection();
		var noticiasModel = new app.app.models.NoticiasDAO(connection);

		var id_noticia = req.query;
		//recuperando dados do banco
		

		noticiasModel.getNoticia(id_noticia,function(erro, result){
			res.render("noticias/noticia", {noticia : result});
		});
}