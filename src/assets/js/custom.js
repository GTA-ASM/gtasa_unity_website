import Jq from 'jquery';
window.$ = Jq;

$(window).scroll(function() {
	$('nav').toggleClass('scrolled', $(this).scrollTop() > 50);
});

$(window).scroll(function() {
	if ($(this).scrollTop() >= 50) {       
		$('#return-to-top').fadeIn(200);    
	}
	else {
		$('#return-to-top').fadeOut(200);   
	}
});

import SmoothScroll from 'smooth-scroll';

const SMscroll = new SmoothScroll('[data-scroll]', {

	// Selectors
	ignore: '[data-scroll-ignore]',
	header: null, 
	topOnEmptyHash: true, 

	// Speed & Duration
	speed: 500,
	speedAsDuration: false, 
	durationMax: 500, 
	durationMin: 200, 
	clip: false, 

	// Easing
	easing: 'easeInOutCubic', 
	// History
	updateURL: false, 
	popstate: false, 

	// Custom Events
	emitEvents: true, 

});
