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
/*
var section = document.querySelectorAll('section > summary > p');
var button = document.querySelectorAll('section > summary > button');

var show = function () {
	section.classList.toggle('show')
}

button.addEventListener('click', show());*/


// Collect all buttons, and store them in an Array using querySelectorAll
var buttons = document.querySelectorAll('button')

// Initiate a for loop that 'loops' through all options in the buttons array.
for (var i = 0; i < buttons.length; i++) {
  // For every instance of buttons in the Array, apply an event listener (click).
  buttons[i].addEventListener('click', function(e) {
     // Grab the target of the click event, select their parent and access the 7th child (the <p> tag in question). Access the classList and toggle the 'show' class.
     e.target.parentNode.childNodes[7].classList.toggle('show');
  });
};