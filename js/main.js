// Start Global

const links = document.querySelectorAll(".nav-link, .stay a, header a");

links.forEach(link => {
	link.addEventListener("click", function (e) {
		e.preventDefault();
	});
});

// End Global
// Start Animation 

// Select Body & Html
const bodyHtml = document.querySelector("body, html");
// Select Navbar
const nav = document.querySelector("nav .row");
// Select Header
const header = document.querySelector("header");

// Make Animation On Load The Page For [ Nav & Header ]
window.onload = function () {
	nav.classList.add("show");
	header.classList.add("show");
}

// Select Fade
const fade = document.querySelectorAll(".fade");

// Make Animation On Scroll For Other Sections
window.addEventListener("scroll", () => { 
	for (let x in fade) {
		if (bodyHtml.scrollTop >= fade[x].offsetTop - 400) {
			fade[x].classList.add("show");
		}
	}
});

// Make Animation On Click On Nav Links To Scroll To The Section

// Select All Nav Links
const navLink = document.querySelectorAll(".nav-link");

function smoothScroll(target, duration) {
	// Select The Target Section
	var target = document.querySelector(target);
	// Get The Distance Between The Top Of The Target & The Top Of The Page
	var targetPosition = target.getBoundingClientRect().top;
	// The Number Of Scroll Top Of The Page
	var startPosition = window.pageYOffset;
	// Get The Distance Between The Top Of The Target & The Scroll Top Of The Page
	var distance = targetPosition - startPosition;

	var startTime = null;

	function animation(currentTime) {
		if (startTime === null) startTime = currentTime;

		var timeElapsed = currentTime - startTime;

		var run = ease(timeElapsed, startPosition, distance, duration);
		window.scrollTo(0, run);

		if (timeElapsed < duration) requestAnimationFrame(animation);
	}

	// Function Make The Animation
	function ease(t, b, c, d) {
		t /= d / 2;
		if (t < 1) return c / 2 * t * t + b;
		t--;
		return -c / 2 * (t * (t - 2) - 1) + b;
	}

	requestAnimationFrame(animation);
}

// Loop On Nav Links & Scroll When Click On Any Link To There Section
navLink.forEach(iteem => {
	iteem.addEventListener("click", function () {
		smoothScroll(this.dataset.scroll, 2000);
	});
});

// End Animation
// Start Popup

// Select Stay Element Link [ Open The Popup ]
const stayElementLink = document.querySelector(".stay a");
// Select Header Element Link [ Open The Popup ]
const headerElementLink = document.querySelector("header a");
// Select Stay Popup
const stayPopup = document.getElementById("stay-popup");
// Select Stay Popup Info Section
const stayPopupInfo = document.querySelector("#stay-popup .info");
// Select The Close Button In Popup
const stayPopupClose = document.querySelector("#stay-popup .close");

// Function For Show Popup
function showPopup() {
	stayPopup.classList.add("show");
	stayPopupInfo.classList.add("show");
	bodyHtml.style.overflow = "hidden";
}

// Function For Hid Popup
function hidePopup() {
	stayPopupInfo.classList.remove("show");
	stayPopup.classList.remove("show");
	bodyHtml.style.overflow = "auto";
}

// Show Popup When Click The Link
stayElementLink.addEventListener("click", () => {
	showPopup();
});

headerElementLink.addEventListener("click", () => {
	showPopup();
});

// Hide The Popup When Click The Close Button
stayPopupClose.addEventListener("click", () => {
	hidePopup();
});;

// Hide The Popup When Press The [Escape] Button
window.addEventListener("keydown", (e) => {
	if (e.keyCode === 27) {
		hidePopup();
	}
});

// Hide The Popup When Click In Popup
stayPopup.addEventListener("click", (e) => {
	hidePopup();
});

// Don't Hide The Popup When Click On The Info Section
stayPopupInfo.addEventListener("click", (e) => {
	e.stopPropagation();
});

// End Popup