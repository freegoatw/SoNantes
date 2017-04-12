$(document).ready(function(){

	$(window).scroll(function() {
	   if($(window).scrollTop() + $(window).height() > $(document).height() - 10) {
	   		if ($('.section-2').visible(true)) {
			    $('.section-2 .map-container').addClass('active');
			}
	   }
	   if($(window).scrollTop() + $(window).height() < $(document).height() - 10) {
	   		if ($('.section-2').visible(true)) {
			    $('.section-2 .map-container').removeClass('active');
			}
	   }
	});


});