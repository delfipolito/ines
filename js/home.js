$( document ).ready(function(){
   $(".button-collapse").sideNav();

  // PHOTO SLIDES
  $(".photo-container").slick({
    dots: true,
    infinite: true,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 2000,
  });

  $(".galeria-container-inside").slick({
    dots: true,
    infinite: true,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 2000,
  });

  $('.fade').slick({
    dots: false,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear'
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
