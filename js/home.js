$( document ).ready(function(){
   $(".button-collapse").sideNav();

  // ROUTING WEB
	$("#trayectoriaButton").click( function() {
  	$('#talleres').addClass('hidden');
  	$('#contacto').addClass('hidden');
  	$('#galeria').addClass('hidden');
  	$('#travelandworkshops').addClass('hidden');
  	$('#trayectoria').removeClass('hidden');
  	$('.active').removeClass('active');
  	$("#trayectoriaButton").addClass('active');
  });

  $("#talleresButton").click( function() {
  	$('#trayectoria').addClass('hidden');
  	$('#contacto').addClass('hidden');
  	$('#galeria').addClass('hidden');
  	$('#travelandworkshops').addClass('hidden');
  	$('#talleres').removeClass('hidden');
  	$('.active').removeClass('active');
  	$("#talleresButton").addClass('active');
  });

  $("#travelandworkshopsButton").click( function() {
    $('#trayectoria').addClass('hidden');
    $('#contacto').addClass('hidden');
    $('#galeria').addClass('hidden');
    $('#talleres').addClass('hidden');
    $('#travelandworkshops').removeClass('hidden');
    $('.active').removeClass('active');
    $("#travelandworkshopsButton").addClass('active');
  });

  $("#contactoButton").click( function() {
  	$('#talleres').addClass('hidden');
  	$('#trayectoria').addClass('hidden');
  	$('#galeria').addClass('hidden');
  	$('#travelandworkshops').addClass('hidden');
  	$('#contacto').removeClass('hidden');
  	$('.active').removeClass('active');
  	$("#contactoButton").addClass('active');
  });

  $("#homeButton").click( function() {
    $('#talleres').addClass('hidden');
    $('#trayectoria').addClass('hidden');
    $('#contacto').addClass('hidden');
    $('#travelandworkshops').addClass('hidden');
    $('#galeria').removeClass('hidden');
    $('.active').removeClass('active');
  });


  // ROUTING MOBILE
  $("#trayectoriaButtonMobile").click( function() {
    $('#talleres').addClass('hidden');
    $('#contacto').addClass('hidden');
    $('#galeria').addClass('hidden');
    $('#travelandworkshops').addClass('hidden');
    $('#trayectoria').removeClass('hidden');
    $('.active').removeClass('active');
    $("#trayectoriaButton").addClass('active');
  });

  $("#talleresButtonMobile").click( function() {
    $('#trayectoria').addClass('hidden');
    $('#contacto').addClass('hidden');
    $('#galeria').addClass('hidden');
    $('#travelandworkshops').addClass('hidden');
    $('#talleres').removeClass('hidden');
    $('.active').removeClass('active');
    $("#talleresButton").addClass('active');
  });

  $("#contactoButtonMobile").click( function() {
    $('#talleres').addClass('hidden');
    $('#trayectoria').addClass('hidden');
    $('#galeria').addClass('hidden');
    $('#travelandworkshops').addClass('hidden');
    $('#contacto').removeClass('hidden');
    $('.active').removeClass('active');
    $("#contactoButton").addClass('active');
  });

  $("#homeButtonMobile").click( function() {
    $('#talleres').addClass('hidden');
    $('#trayectoria').addClass('hidden');
    $('#contacto').addClass('hidden');
    $('#travelandworkshops').addClass('hidden');
    $('#galeria').removeClass('hidden');
    $('.active').removeClass('active');
  });
})
