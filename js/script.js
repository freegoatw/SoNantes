$(document).ready(function(){


	$(window).scroll(function() {
		if ($('.section-2').visible(true)) {
		    console.log('visible');
		}
	});

	$(window).scroll(function() {
	   if($(window).scrollTop() + $(window).height() > $(document).height() - 10) {
	   		if ($('.section-2').visible(true)) {
			    console.log('near bottom!');
			    $('.section-2 .map-container').addClass('active');
			}
	   }
	});


});