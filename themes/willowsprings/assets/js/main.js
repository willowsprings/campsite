import u from 'umbrellajs';
import Masonry from 'masonry-layout';

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

	// var elem = document.querySelector('.photos');
	// var msnry = new Masonry( elem, {
	// 	// options
	// 	itemSelector: '.photo',
	// 	// percentPosition: true
	// });

	// console.log(hamburger);
});

// u(window).on('DOMContentLoaded', evt => {
// 	console.log('derp');
// });
