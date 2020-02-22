$(document).ready(function(){

	//----------SLIDER-----------
	if(window.location.href.indexOf('Index') > -1){
	 $('.Galeria').bxSlider({
	
    mode: 'fade',
    captions: true,
    slideWidth: 1200,				
    responsive: true,
    //pager: false
  });
}
	//----------ALMACENADO DE POST-----------
	if(window.location.href.indexOf('Index') > -1){

		var post =[
		{
			titulo : "Prueba Titulo 1",
			//	date: new Date();
			date: "Publicado el dia: "+moment().date()+" de "+moment().format("MMMM")+" de "+moment().format("YYYY"),
			content : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 1"
		},
		{
			titulo : "Prueba Titulo 2",
		//	date: new Date();	
			date: "Publicado el dia: "+moment().date()+" de "+moment().format("MMMM")+" de "+moment().format("YYYY"),
			content : "Lorem Ipsum is simply dummy text of the printing and typesetting industry.>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.  2"
		},
		{
			titulo : "Prueba Titulo 3",
			//	date: new Date();
			date: "Publicado el dia: "+moment().date()+" de "+moment().format("MMMM")+" de "+moment().format("YYYY"),
			content : "Lorem Ipsum is simply dummy text of the printing and typesetting industry.>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.  3"
		},
		{
			titulo : "Prueba Titulo 4",
			//	date: new Date();
			date: "Publicado el dia: "+moment().date()+" de "+moment().format("MMMM")+" de "+moment().format("YYYY"),
			content : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 4"
		},
		];

		console.log(post);

		post.forEach((item,index) => {
			var post = `
				<article id="post">
					<h2>${item.titulo}</h2>

					<span id="date">${item.date}</span>

					<p>
					${item.content}
			 		</p>
			 		<a href="#" class="button-more">Leer mas</a>
			 	</article>
			 		`;

			    $("#posts").append(post);

		});
}

		var theme = $("#theme");

		$("#to-green").click(function(){
				theme.attr('href','css/green.css');
		});

		$("#to-blue").click(function(){
				theme.attr('href','css/blue.css');
		});

		$("#to-red").click(function(){
				theme.attr('href','css/red.css');
		});


//--------------SCROLL IR ARRIBA DE LA WEB----------------
	$('.subir').click(function(e){
		e.preventDefault();
		
		$('html, body').animate({

			scrollTop: 0 

		},500);

		return false;
	});


	//--------------LOGIN EN LOCAL STORAGE----------------

//login Falso
    $("#login form").submit(function(){
      var form_name = $("#form_nombre").val();
 
      localStorage.setItem("form_name", form_name);
    });
 
    var form_name = localStorage.getItem("form_name");
    
    if(form_name != null && form_name != ("undefined")){
    	var aboutP = $("#About p");
    	aboutP.html("<p><strong>Bienvenido, " +form_name+"</strong></p><br>" );        //Con html sobreescribimos 
    	aboutP.append("<a href='#' id='logout'>Cerrar sesion</a>");					// con append agregamos un elemento nuevo

    	 $("#login").hide();
    	 $("#logout").click(function(){
    	 	localStorage.clear();
    	 	location.reload();	
    	 });

    };

    if(window.location.href.indexOf('SobreMi') > -1){
    	$('#acordeon').accordion();
    }


    if(window.location.href.indexOf('Reloj') > -1){

    	setInterval(function(){
    		var reloj = moment().format("hh:mm:ss");
    		$("#Reloj").html(reloj);


    	});
    }

if(window.location.href.indexOf('contacto') > -1){

	$("form input[name='fecha']").datepicker({
			dateFormat: 'dd-mm-yy'
	});
		
    $.validate({
    lang: 'es',
   errorMessagePosition: 'top',
    scrollToTopOnError: true								/*Nos acomoda y nos muestra todos los errores cometidos en le formulario*/
  });
}

});


/*			UTILIZAMOS ESTA ESTRUCTURA PARA ARMAR LOS POST CON EL JSON
					<article id="post">
			 			<h2>Titulo del articulo</h2>
			 			<span id="date">Fecha de publicacion</span>
			 			<p>

			 			</p>
			 		<a href="#" class="button-more">Leer mas</a>
			 		</article>*/