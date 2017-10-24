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
// bron: Sanne 't Hooft project 1
(function() {
	
	var cmdaCards = document.querySelectorAll("section");
	for (var i=0;i<cmdaCards.length;i++) {
		
		var handvat = document.createElement("span");
		handvat.classList.add("card-handvat"); 
		cmdaCards[i].appendChild(handvat);
		
		handvat = cmdaCards[i].querySelector(".card-handvat");
		handvat.addEventListener("click", function(event){
			this.parentNode.classList.toggle("active");
		});
	}
})();