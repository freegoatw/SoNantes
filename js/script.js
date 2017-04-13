$(document).ready(function(){

	$(window).scroll(function() {



		// choisi l'élément dont tu veux connaître la visibilité à l'écran
	    var isSection3 = Utils.isElementInView($('.section-3'), false);


		if (isSection3) {

			// si l'élément est visible à l'écran le code suivant va être exécuté

		    setTimeout(function(){

		   		$('.map-container').addClass('active');
	   			$('.map-container .maison').addClass('bounceIn');
		   	}
	   		, 1000);
		}

		else{
			
		}








	   var isSection4 = Utils.isElementInView($('.section-4'), false);
		if (isSection4) {
		    setTimeout(function(){
		   		$('.goutte').addClass('visible');
		   	}
	   		, 1000);
		}




	});













	// osef de ça, touche pas

	function isScrolledIntoView(elem)
	{
	    var docViewTop = $(window).scrollTop();
	    var docViewBottom = docViewTop + $(window).height();

	    var elemTop = $(elem).offset().top;
	    var elemBottom = elemTop + $(elem).height();

	    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
	}


	function Utils() {

	}

	Utils.prototype = {
	    constructor: Utils,
	    isElementInView: function (element, fullyInView) {
	        var pageTop = $(window).scrollTop();
	        var pageBottom = pageTop + $(window).height();
	        var elementTop = $(element).offset().top;
	        var elementBottom = elementTop + $(element).height();

	        if (fullyInView === true) {
	            return ((pageTop < elementTop) && (pageBottom > elementBottom));
	        } else {
	            return ((elementTop <= pageBottom) && (elementBottom >= pageTop));
	        }
	    }
	};

	var Utils = new Utils();


});