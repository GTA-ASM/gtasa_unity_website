const MixinSR = {
	methods: {
		updateReveal() {
			ScrollReveal({ reset: false, useDelay: 'onload' });
			
			ScrollReveal().reveal('.right-reveal', { duration: 3500, origin: 'right', distance: '25px' });
			ScrollReveal().reveal('.left-reveal', { duration: 3500, origin: 'left', distance: '25px' });
			ScrollReveal().reveal('.top-reveal', { duration: 3500, origin: 'top', distance: '25px' });
			ScrollReveal().reveal('.bot-reveal', { duration: 3500, origin: 'bottom', distance: '25px' });
		},
	},
};

export default MixinSR;