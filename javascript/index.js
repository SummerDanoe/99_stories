//Javascript Document
var nav = document.querySelector('header > nav');
var button = document.querySelector('header > button');

var open = function () {

	nav.classList.toggle('open')
}

button.addEventListener('click', open);


