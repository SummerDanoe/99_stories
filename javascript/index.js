// JavaScript Document
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