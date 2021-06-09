import u from 'umbrellajs';

function ready(fn) {
	if (document.readyState != 'loading'){
		fn();
	} else {
		document.addEventListener('DOMContentLoaded', fn);
	}
}

const $ = document.querySelector.bind(document)

ready(function() {
	// $('.hamburger')
});

window.addEventListener('DOMContentLoaded', () => {
	u('.hamburger').on('click', function() {
		u(this).toggleClass('is-active');
		console.log('click');
	})

	// console.log(hamburger);
});

// u(window).on('DOMContentLoaded', evt => {
// 	console.log('derp');
// });
