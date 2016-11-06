$(document).ready(function() {
	
	var slideout = new Slideout({
		'panel': document.getElementById('panel'),
		'menu': document.getElementById('menu'),
		'padding': 256,
		'tolerance': 70
	});

	$("#nav-menu").on('click', function() {
		slideout.toggle();
	});

	$("#nameSVG").css('opacity', 1);
	new Vivus('nameSVG1', {duration: 1000}, null);
	new Vivus('nameSVG2', {duration: 1000}, null);

	var owl = $("#phoneSlider");;

	owl.owlCarousel({
		pagination: false,
		navigation : false,
		singleItem : true,
		autoPlay: true,
		mouseDrag: false,
		touchDrag: false,
		transitionStyle : "fade"
	});

});