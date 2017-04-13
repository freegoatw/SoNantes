$(document).ready(function(){

	$(window).scroll(function() {
	   var hT = $('.section-3').offset().top,
	       hH = $('.section-3').outerHeight(),
	       wH = $(window).height(),
	       wS = $(this).scrollTop();
	   if (wS > (hT+hH-wH)){
	   		setTimeout(function(){
	   		$('.map-container').addClass('active');
	   		$('.map-container .maison').addClass('bounceIn');
	   	}
	   		, 1000);
	   		
	   }
	});


});