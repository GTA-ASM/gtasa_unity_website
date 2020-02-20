import $ from 'jquery';
import SmoothScroll from 'smooth-scroll';

$(window).scroll(function() {
	const scrollTop = $(this).scrollTop() as number;
	if (scrollTop >= 50) {
		$('#return-to-top').fadeIn(200);
	} else {
		$('#return-to-top').fadeOut(200);
	}
});

new SmoothScroll('[data-scroll]', {
	ignore: 'a[href*="*"]',
	header: '',
	topOnEmptyHash: true,

	speed: 500,
	speedAsDuration: false,
	durationMax: 500,
	durationMin: 200,
	clip: false,

	easing: 'easeInOutCubic',

	updateURL: false,
	popstate: false,
	emitEvents: true,
});
