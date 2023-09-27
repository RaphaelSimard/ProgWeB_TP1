"use strict"

//Mettre votre code JS ici

const rectangleDesDonnées = document.getElementById("zoneDeDonnees");
const rectangle = document.createElement("div");
rectangle.id = "rectangle";

function créerBouton() {
    let bouton = creerBaliseX("button", "bouton", "Commencer le quiz", "");
    bouton.addEventListener("click", function () {
        alert("Vous avez cliqué sur le bouton")
    });
    return bouton;
}
function constuireInterfaceQuestion() {
    rectangle.appendChild(creerBaliseX("h1", "titre", "Bienvenue sur le quiz JavaScript de Janelle et Raphael"));
    rectangle.appendChild(creerBaliseX("p", "p1", "JEU QUESTIONNAIRE :o"));
    rectangle.appendChild(creerBaliseX("p", "p2", "Je vous invite à participer à un petit jeu questionnaire qui comporte 5 questions choisies au hasard dans un ensemble de questions. "));
    rectangle.appendChild(créerBouton());
}

// Call the function to construct the interface
constuireInterfaceQuestion();
rectangleDesDonnées.appendChild(rectangle);









