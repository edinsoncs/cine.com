var express = require('express');
var Crawler = require('crawler');
var url = require('url');
var movies = require('./data');
//Utilizaremos crawler

var servidor = express();


var isCrawler = new Crawler({
	//por defecto vamos a tener 10 connectiones
	maxConnections: 10,
	callback: function(err, res, $){
		$('a').each(function(index, a){
			var isUrl = $(a).attr('href');
			console.log(isUrl);
		});
	}

});

//Limit id cine.com
for(var i = 1; i < 82999; i++) {
	
	isCrawler.queue([{
		uri: 'http://www.cine.com/peliculas.php?pelicula='+i,
		jQuery: true,

		callback: function(err, res, $){
			movies(res, $);
		}
	}]);

	console.log(i);

}


function puerto(num){
	num = 3000;
	return num;
}

servidor.listen(puerto(), function(){
	console.log('servidor corriendo');
});