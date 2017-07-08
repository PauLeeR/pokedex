	$(document).ready(function(){
	$("#menu-toggle").click(function(e) {  //funcion que hace el toggle a la barra lateral de navegación
		e.preventDefault();
		$("#wrapper").toggleClass("toggled");
	});
	
		$.ajax({ //1er ajax para que nos muestre el nombre de los pokemones en la pantalla
			url: 'http://pokeapi.co/api/v2/pokemon/',
			type: 'GET',
			dataType: 'json',
			data: {"limit": '12'}, 
		})
		.done(function(response) { //funciones por defecto que da el plugin de ajax
			//console.log("success");
			response.results.forEach(function (element) {
				//console.log(element.name); 
				//console.log(element.url); 
				$.getJSON(element.url, function(data){ //ahora hice una sola función que imprime el nombre y muestra la imagen (todo junto) en una funcion getJson, según ejemplo visto en la web (fuente: "http://api.jquery.com/jquery.ge/)
					var pkmnSprite = data.sprites.front_default; //demora en cargar las imgs
        		//console.log (pkmnSprite); 		
        		$("#pokemon-list").append(armarTemplate(element.name, pkmnSprite));
        		});   //anexa el nombre e imagen de los pokemones al div con ese id
			})

		})
		.fail(function() {
			//console.log("error");
		})
		.always(function() {
			//console.log("complete");
		})

	});

	var armarTemplate = function(nombrePkmn,url){
		var t = "<div class='element col-lg-3'><img src='" + url + "'/><h3>"+ nombrePkmn +"</h3></div>";
		return t;
	}


				
/* según Blanca hay que hacer 3 ajax, 1 primero 
	- para el nombre de los pokemones
	- el q llama cuando hago click en c/u de los pokemones (modal?)
	- el q busca las imagenes de los pokemones
	
	EJEMPLO ANTERIOR DE GIPHY
		/*data.forEach
			/*gif = element.images.downsized_la	rge.url;
			url = element.bitly_gif_url;
			$("#elementos").append(armarTemplate(gif, url));
		});
	}

	var armarTemplate = function(gif, url){
		var t = "<div class='elemento'><img src='" + gif + "'/><a href='" + url +"'>Ver más</a></div>"
		return t;
	}
	
	$("#buscar-gif").click(function(event){
		console.log("Entro");
		$("#elementos").empty();
		var gif = $("#gif-text").val();
		ajaxGif(gif);
	}); 

	/*	

}); */