$(document).ready(function(){
	$("#menu-toggle").click(function(e) {  //funcion que hace el toggle a la barra lateral de navegación
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
    });
});

/*
	var dibujarPokemones = function(data){
		var gif = "";
		var url = "";
		data.forEach(function(element){
			gif = element.images.downsized_large.url;
			url = element.bitly_gif_url;
			$("#elementos").append(armarTemplate(gif, url));
		});
	}

	var armarTemplate = function(gif, url){
		var t = "<div class='elemento'><img src='" + gif + "'/><a href='" + url +"'>Ver más</a></div>"
		return t;
	}

	*/
	var ajaxPkm = function(gif){
		$.ajax({
			url: 'http://pokeapi.co/api/v2/pokemon/',
			type: 'GET',
			dataType: 'json',
			data: {"limit": '811'},
		})
		.done(function() {
			console.log("success");
		})
		.fail(function() {
			console.log("error");
		})
		.always(function() {
			console.log("complete");
		});
	}
		
			


	/*		ajax q llama cuando hago click en c/u de los dibujarPokemones
			ajax q busca las imagenes de los pokemones
	/*	.done(function(response){
			console.log(response);
			dibujarGifs(response.data);
		.fail(function(){
			console.log("error");
		});
	}

	$("#buscar-gif").click(function(event){
		console.log("Entro");
		$("#elementos").empty();
		var gif = $("#gif-text").val();
		ajaxGif(gif);
	}); 
}); */