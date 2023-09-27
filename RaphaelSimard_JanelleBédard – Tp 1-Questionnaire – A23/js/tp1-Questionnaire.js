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

constuireInterfaceQuestion();
rectangleDesDonnées.appendChild(rectangle);



//on fait un tableau ordonné qui contient les 15 questions qui sont contenues dans le JSON et on shuffle le tableau.
//Ensuite on choisi 5 questions au hasard dans le tableau et on les mets dans un autre tableau.
//On fait un for qui va créer les 5 questions dans le rectangle des données.








