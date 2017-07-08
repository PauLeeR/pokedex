	$(document).ready(function(){
	$("#menu-toggle").click(function(e) {  //funcion que hace el toggle a la barra lateral de navegación
		e.preventDefault();
		$("#wrapper").toggleClass("toggled");
	});
	
		$.ajax({ //1er ajax para que nos muestre el nombre de los pokemones en la pantalla
			url: 'http://pokeapi.co/api/v2/pokemon/',
			type: 'GET',
			dataType: 'json',
			data: {"limit": '10'}, 
		})
		.done(function(response) { //funciones que da el plugin de ajax
			//console.log("success");
			showName(response); //defino la función, la declaro en la línea 24
		})
		.fail(function() {
			//console.log("error");
		})
		.always(function() {
			//console.log("complete");
		});

			function showName (response){ //creamos la función que imprimirá el nombre del PKMN en la pantalla
				response.results.forEach(function(element){	
					var nombrePkmn = element.name;
					var urlPkmn = element.url;
					//console.log(element.name); 
					
					//var printName = "<div class='elemento'><img src='" + nombrePkmn + "'/></div>";
					var printName = $('<div>').text(nombrePkmn);
					//console.log(element);

					// Segundo ajax, para cada Pokémon
					$.ajax({
						url: urlPkmn,
						type: 'GET',
						dataType: 'JSON'
					})
					.done(function(response) {
						//console.log("success");
						//console.log(response);
						pkmnPic(response); //defino la función, después la declaro
						printName.append(nombrePkmn);
						$('#pokemon-list').append(printName);
					})

					.fail(function() {
						//console.log("error");
					})
					.always(function() {
						//console.log("complete");
					});

					function pkmnPic(response){//función que agrega las imágenes de los pokemones/sprites
						var pkmnId = response.id;
						var sprite = $('<img>').attr({
							'src':'http://pokeapi.co/media/img/'+ pkmnId +'.png',
						});
					};
				});
			};

});
/* falta funcion mostrar pokemones
	ajax q llama cuando hago click en c/u de los dibujarPokemones
			ajax q busca las imagenes de los pokemones
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