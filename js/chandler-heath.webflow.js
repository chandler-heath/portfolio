// Toggle between light and dark mode and store value as a cookie

const body = $('body');
const lightSwitch = $('#lightSwitch');

if (Cookies.get("view") == "dark") {
    body.addClass('dark');
}  else {
    body.removeClass('dark');
}

lightSwitch.on('click', function() {
if (Cookies.get("view") == "dark") {
    Cookies.set("view", "light", { expires: 365 });
    body.removeClass('dark');
} else {
    Cookies.set("view", "dark", { expires: 365 });
    body.addClass('dark');
}
});


// Stop body scroll when mobile menu is open

function letBodyScroll(bool) {
if (bool) {
    body.addClass('scroll-lock');
} else {
    body.removeClass('scroll-lock');
}
}

const targetNode = document.querySelector('.w-nav-button');
const config = { attributes: true, childList: false, subtree: false };
const callback = function (mutationsList, observer) {
for (let i = 0; i < mutationsList.length; i++) {
    if (mutationsList[i].type === 'attributes') {
    const menuIsOpen = mutationsList[i].target.classList.contains('w--open');
    letBodyScroll(menuIsOpen);
    }
}
};
const observer = new MutationObserver(callback);
observer.observe(targetNode, config);


// Extends mobile menu close interaction to nav links

const navMenu = $('.w-nav-menu');
const navButton = $('.w-nav-button');

navMenu.on('click', 'a', function() {
if ($(window).innerWidth() <= 767) {
    navButton.triggerHandler('tap');
}
});


// When the user scrolls down 100vh from the top of the document, show back to top button

const backToTopButton = document.getElementById("back-to-top-button");

window.onscroll = function() {scrollFunction()};
function scrollFunction() {
if (window.pageYOffset > window.innerHeight) {
    backToTopButton.classList.remove("hidden");
} else {
    backToTopButton.classList.add("hidden");
}
};