module.exports.formulario_inclusao_noticia = function(app, req, res){

	res.render("admin/form_add_noticia", {validacao: {}, noticia : {} });

}

module.exports.noticias_salvar = function(app, req, res){
	var noticia = req.body;
	//validando campos com express validator
	req.assert('titulo','Titulo é obrigatorio').notEmpty();
	req.assert('resumo','Resumo é obrigatorio').notEmpty();
	req.assert('resumo','Resumo deve conter entre 10 e 10 caracteres').len(10,100);
	req.assert('autor','Autor é obrigatorio').notEmpty();
	req.assert('data_noticia','Data é obrigatoria').notEmpty().isDate({format:'YYYY-MM-DD'});
	req.assert('noticia','Noticia é obrigatoria').notEmpty();

	var erros = req.validationErrors();

	if (erros) {
		res.render("admin/form_add_noticia", {validacao: erros, noticia : noticia});
		return;
	}
	var connection = app.config.dbConnection();
	var noticiasModel = new app.app.models.NoticiasDAO(connection);
	//recuperando dados do banco
	noticiasModel.salvarNoticia(noticia,function(erro, result){
	res.redirect('/noticias');
	});
}