$(document).ready(function() {
	$('#panel').animate({
		opacity: 1
	}, 1000);

	var slideout = new Slideout({
		'panel': document.getElementById('panel'),
		'menu': document.getElementById('menu'),
		'padding': 256,
		'tolerance': 70
	});

	$("#nav-menu").on('click', function() {
		slideout.toggle();
	});

	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
		$("#name").animate({
			opacity: 1
		}, 1000);
		$("#name-below").fadeIn(1000);
	} else {
		// http://tympanus.net/codrops/2016/03/02/creative-svg-letter-animations/
		setTimeout(function(){
			$("#name").css("opacity", 1);
			$("#name-below").fadeIn(1000);
			var options = {
				size : 150,
				weight : 10,
				color: '#FFF',
				duration: 0.75,
				fade: 0,
				delay: 0,
				easing: d3_ease.easeSinInOut.ease
			};
			var myName = new Letters(document.getElementById("name"), options);
			myName.show();
		}, 1000);
	}

	// http://codepen.io/chrisboon27/pen/rEDIC/?editors=0110
	var movementStrength = 25;
	var height = movementStrength / $(window).height();
	var width = movementStrength / $(window).width();
	$("#experience").mousemove(function(e) {
		var pageX = e.pageX - ($(window).width() / 2);
		var pageY = e.pageY - ($(window).height() / 2);
		var newvalueX = width * pageX * -1 - 25;
		var newvalueY = height * pageY * -1 - 50;
		$('#experience').css("background-position", newvalueX + "px     " + newvalueY + "px");
	});

});

window.onload = function() {
	particlesJS('particlesBox', {
		"particles": {
			"number": {
				"value": 15,
				"density": {
					"enable": true,
					"value_area": 800
				}
			},
			"color": {
				"value": "#7784e6"
			},
			"shape": {
				"type": "polygon",
				"stroke": {
					"width": 0,
					"color": "#000"
				},
				"polygon": {
					"nb_sides": 6
				},
				"image": {
					"src": "img/github.svg",
					"width": 100,
					"height": 100
				}
			},
			"opacity": {
				"value": 0.3,
				"random": true,
				"anim": {
					"enable": false,
					"speed": 1,
					"opacity_min": 0.1,
					"sync": false
				}
			},
			"size": {
				"value": 160,
				"random": false,
				"anim": {
					"enable": true,
					"speed": 10,
					"size_min": 40,
					"sync": false
				}
			},
			"line_linked": {
				"enable": false,
				"distance": 200,
				"color": "#ffffff",
				"opacity": 1,
				"width": 2
			},
			"move": {
				"enable": true,
				"speed": 8,
				"direction": "bottom-left",
				"random": false,
				"straight": false,
				"out_mode": "out",
				"bounce": false,
				"attract": {
					"enable": false,
					"rotateX": 600,
					"rotateY": 1200
				}
			}
		},
		"interactivity": {
			"detect_on": "canvas",
			"events": {
				"onhover": {
					"enable": false,
					"mode": "bubble"
				},
				"onclick": {
					"enable": false,
					"mode": "push"
				},
				"resize": true
			},
			"modes": {
				"grab": {
					"distance": 400,
					"line_linked": {
						"opacity": 1
					}
				},
				"bubble": {
					"distance": 400,
					"size": 40,
					"duration": 2,
					"opacity": 8,
					"speed": 3
				},
				"repulse": {
					"distance": 200,
					"duration": 0.4
				},
				"push": {
					"particles_nb": 4
				},
				"remove": {
					"particles_nb": 2
				}
			}
		},
		"retina_detect": true
	});
}