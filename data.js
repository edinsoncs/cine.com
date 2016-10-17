"use strict";

//FS
var fs = require('fs');
var arr = [];

module.exports = (data, $) => {
		var web = data.body;
		var sinopsis = $(web).children().children()[3].attribs.content;
		var img = $(web).children().children()[8].attribs.content;
		var tags = $(web).children().children()[4].attribs.content;

		var obj = {
			'position': {
				'id': numberID(data.options.uri),
				'url': data.options.uri,
				'sinopsis': sinopsis,
				'img': img,
				'tags': tags

			}

		}

		arr.push(obj);

		fs.writeFile('save/data.json', JSON.stringify(arr), 'utf-8', (err) =>{
				if(err) throw err;
				console.log('go!!!');	
		});

		function numberID(url){
			var show = url.replace('http://www.cine.com/peliculas.php?pelicula=', '');
			console.log(show);
			return show;
		}
}