// JavaScript Document

//dropdown
document.getElementById('menuButton').onclick = function() { 
    var iPadMenu = document.getElementById("iPadMenu");

    if (iPadMenu.style.display != "block") {
        iPadMenu.style.display = "block";

        styles = '#menuButton:after { display: block; }';
    }
    else {
        iPadMenu.style.display = "none";

        styles = '#menuButton:after { display: none; }';
    }

};
//kaartjes in en uit klap
// bron: Jhttps://codepen.io/joostf/pen/bwrryR


var section = document.querySelector('section > summary > p');
var button = document.querySelector('section > summary > button');

var show = function () {
	section.classList.toggle('show')
}

button.addEventListener('click', show);






