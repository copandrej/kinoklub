//from: https://coolcssanimation.com/element-fade-out-on-scroll/
//gets scroll info and adjjusts opacity of logo, navbar and hamburger bar acordingly

const header = document.getElementById('fade-out');
const knof = document.getElementById('knof');
let disp = true;

function fadeOutOnScroll(element) {
	if (!element) {
		return;
	}

	let opacity = 1;
	opacity = 1 - Math.max(window.pageYOffset - 300, 0) / 300;

	if (!disp) {
		element.style.visibility = 'visible';
		knof.style.visibility = 'visible';
		disp = false;
	}

	if (opacity >= 0) {
		element.style.opacity = opacity;
		knof.style.opacity = opacity;

	} else {
		element.style.opacity = 0;
		knof.style.opacity = 0;

		element.style.visibility = 'hidden';
		knof.style.visibility = 'hidden';
		disp = false;
	}
}

/*mid function*/
function scrollHandler() {
	fadeOutOnScroll(header);
}

/*event listeners for scroll and fix for menu reappearing on refresh*/
window.addEventListener('scroll', scrollHandler);
window.addEventListener('load', scrollHandler);
