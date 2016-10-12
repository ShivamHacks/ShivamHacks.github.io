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

	particlesJS.load('particlesBOX', 'assets/particles-config.json', function() {
  		console.log('callback - particles.js config loaded');
	});

});