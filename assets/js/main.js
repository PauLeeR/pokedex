	$(document).ready(function(){
	$("#menu-toggle").click(function(e) {  //funcion que hace el toggle a la barra lateral de navegación
		e.preventDefault();
		$("#wrapper").toggleClass("toggled");
	});

	var ajaxPkm = function(gif){ //1er ajax para que nos muestre el nombre de los pokemones en la pantalla
		$.ajax({
			url: 'http://pokeapi.co/api/v2/pokemon/',
			type: 'GET',
			dataType: 'json',
			data: {"limit": '10'}, 
		})
		.done(function(response) {
			console.log("success");

			var showName = function(response){ //creamos la función que imprimirá el nombre del PKMN en la pantalla
				response.results.forEach(function(element){	
					var nombrePkmn = element.name;
					var urlPkmn = element.url;
				});
			}
			//console.log(element.name);

			var printName = function(nombrePkmn, urlPkmn){
				var name = "<div class='elemento'><img src='" + nombrePkmn + "'/></div>";
				return name;
			};
});
	}
});
				/*PADRE TIENE HIJO 
			$("div").addClass("")

			showName(response);
		})


			})

		.fail(function() {
			console.log("error");
		})
		.always(function() {
			console.log("complete");
		});
	}

	

};

});
			/*data.forEach
			/*gif = element.images.downsized_large.url;
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

	/*		ajax q llama cuando hago click en c/u de los dibujarPokemones
			ajax q busca las imagenes de los pokemones

}); */