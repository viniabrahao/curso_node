//conexao com o banco
var mysql = require('mysql');
//wraper
var connMysql =  function(){
	return mysql.createConnection({
			host : 'localhost',
			user : 'root',
			password : 'root',
			database : 'portal_noticias'
		});
	}
module.exports =function(){
	return connMysql;
}