"use strict"

//Mettre votre code JS ici

const rectangleDesDonnees = document.getElementById("zoneDeDonnees");


const rectangle = document.createElement("div");
rectangle.id = "rectangle";

// ici on fait la magnifique création du titre
const titre = document.createElement("div");
titre.id = "titre";
titre.textContent = "Salam maleykoum, bienvenue sur le quiz JavaScript de Janelle et Raphael مرحبًا سيد جوليه، إليك اختبارنا المقدس";

// ici on fait la création des paragraphes

const paragraphe1 = document.createElement("p1");
paragraphe1.textContent = "JEU QUESTIONNAIRE :o";
const paragraphe2 = document.createElement("p2");
paragraphe2.textContent = "Je vous invite à participer à un petit jeu questionnaire qui comporte 5 questions choisies au hasard dans un ensemble de questions. " +
    "Pour chaque question, vous devez choisir une réponse parmi les 4 choix proposés. À la fin du questionnaire, vous aurez votre résultat. ";


// ici on fait la création du bouton
const bouton = document.createElement("bouton");
bouton.id = "bouton";
bouton.textContent = "Commencer le quiz";
bouton.addEventListener("click", function () {
    alert("Vous avez cliqué sur le bouton")
    viderLinterieurDuRectangle();
});

/**
 * Fonction qui vide le rectangle après le click du bouton
 */
function viderLinterieurDuRectangle() {
    while (rectangle.firstChild) {
        rectangle.removeChild(rectangle.firstChild);
    }
}

// on fait les appends, ca ressemble a ce que le prof a fait
rectangle.appendChild(titre);
rectangle.appendChild(paragraphe1);
rectangle.appendChild(paragraphe2);
rectangle.appendChild(bouton);

// fait le append du rectangle dans le rectangle des données
rectangleDesDonnees.appendChild(rectangle);



