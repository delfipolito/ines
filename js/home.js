$( document ).ready(function(){
   $(".button-collapse").sideNav();

  // ROUTING WEB
	$(".trayectoriaButton").click( function() {
  	$('#talleres').addClass('hidden');
  	$('#contacto').addClass('hidden');
  	$('#galeria').addClass('hidden');
  	$('#travelandworkshops').addClass('hidden');
  	$('#trayectoria').removeClass('hidden');
  	$('.active').removeClass('active');
  	$(".trayectoriaButton").addClass('active');
  });

  $(".talleresButton").click( function() {
  	$('#trayectoria').addClass('hidden');
  	$('#contacto').addClass('hidden');
  	$('#galeria').addClass('hidden');
  	$('#travelandworkshops').addClass('hidden');
  	$('#talleres').removeClass('hidden');
  	$('.active').removeClass('active');
  	$(".talleresButton").addClass('active');
  });

  $(".travelandworkshopsButton").click( function() {
    $('#trayectoria').addClass('hidden');
    $('#contacto').addClass('hidden');
    $('#galeria').addClass('hidden');
    $('#talleres').addClass('hidden');
    $('#travelandworkshops').removeClass('hidden');
    $('.active').removeClass('active');
    $(".travelandworkshopsButton").addClass('active');
  });

  $(".contactoButton").click( function() {
  	$('#talleres').addClass('hidden');
  	$('#trayectoria').addClass('hidden');
  	$('#galeria').addClass('hidden');
  	$('#travelandworkshops').addClass('hidden');
  	$('#contacto').removeClass('hidden');
  	$('.active').removeClass('active');
  	$(".contactoButton").addClass('active');
  });

  $(".homeButton").click( function() {
    $('#talleres').addClass('hidden');
    $('#trayectoria').addClass('hidden');
    $('#contacto').addClass('hidden');
    $('#travelandworkshops').addClass('hidden');
    $('#galeria').removeClass('hidden');
    $('.active').removeClass('active');
  });


  // ROUTING MOBILE
  $(".trayectoriaButtonMobile").click( function() {
    $('#talleres').addClass('hidden');
    $('#contacto').addClass('hidden');
    $('#galeria').addClass('hidden');
    $('#travelandworkshops').addClass('hidden');
    $('#trayectoria').removeClass('hidden');
    $('.active').removeClass('active');
    $(".trayectoriaButtonMobile").addClass('active');
    $(".button-collapse").sideNav();
  });

  $(".talleresButtonMobile").click( function() {
    $('#trayectoria').addClass('hidden');
    $('#contacto').addClass('hidden');
    $('#galeria').addClass('hidden');
    $('#travelandworkshops').addClass('hidden');
    $('#talleres').removeClass('hidden');
    $('.active').removeClass('active');
    $(".talleresButtonMobile").addClass('active');
    $(".button-collapse").sideNav();
  });
  $(".travelandworkshopsButtonMobile").click( function() {
    $('#trayectoria').addClass('hidden');
    $('#contacto').addClass('hidden');
    $('#galeria').addClass('hidden');
    $('#talleres').addClass('hidden');
    $('#travelandworkshops').removeClass('hidden');
    $('.active').removeClass('active');
    $(".travelandworkshopsButtonMobile").addClass('active');
    $(".button-collapse").sideNav();
  });

  $(".contactoButtonMobile").click( function() {
    $('#talleres').addClass('hidden');
    $('#trayectoria').addClass('hidden');
    $('#galeria').addClass('hidden');
    $('#travelandworkshops').addClass('hidden');
    $('#contacto').removeClass('hidden');
    $('.active').removeClass('active');
    $(".contactoButtonMobile").addClass('active');
    $(".button-collapse").sideNav();
  });

  $(".homeButtonMobile").click( function() {
    $('#talleres').addClass('hidden');
    $('#trayectoria').addClass('hidden');
    $('#contacto').addClass('hidden');
    $('#travelandworkshops').addClass('hidden');
    $('#galeria').removeClass('hidden');
    $('.active').removeClass('active');
  });


  // PHOTO SLIDES
  $(".photo-container").slick({
    dots: true,
    infinite: true,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 2000,
  });


  // GALERIA HOVER
  $("#galery1").mouseenter( function() {
    $("#galery1Title").animate({opacity: "0.8"}, "slow");
  });
  $("#galery1").mouseleave( function() {
    $("#galery1Title").animate({opacity: "0"});
  });

  $("#galery2").mouseenter( function() {
    $("#galery2Title").animate({opacity: "0.8"}, "slow");
  });
  $("#galery2").mouseleave( function() {
    $("#galery2Title").animate({opacity: "0"});
  });

  $("#galery3").mouseenter( function() {
    $("#galery3Title").animate({opacity: "0.8"}, "slow");
  });
  $("#galery3").mouseleave( function() {
    $("#galery3Title").animate({opacity: "0"});
  });

  $("#galery4").mouseenter( function() {
    $("#galery4Title").animate({opacity: "0.8"}, "slow");
  });
  $("#galery4").mouseleave( function() {
    $("#galery4Title").animate({opacity: "0"});
  });

  $("#galery5").mouseenter( function() {
    $("#galery5Title").animate({opacity: "0.8"}, "slow");
  });
  $("#galery5").mouseleave( function() {
    $("#galery5Title").animate({opacity: "0"});
  });

  $("#galery6").mouseenter( function() {
    $("#galery6Title").animate({opacity: "0.8"}, "slow");
  });
  $("#galery6").mouseleave( function() {
    $("#galery6Title").animate({opacity: "0"});
  });

  $("#galery7").mouseenter( function() {
    $("#galery7Title").animate({opacity: "0.8"}, "slow");
  });
  $("#galery7").mouseleave( function() {
    $("#galery7Title").animate({opacity: "0"});
  });

  $("#galery8").mouseenter( function() {
    $("#galery8Title").animate({opacity: "0.8"}, "slow");
  });
  $("#galery8").mouseleave( function() {
    $("#galery8Title").animate({opacity: "0"});
  });
    
})
