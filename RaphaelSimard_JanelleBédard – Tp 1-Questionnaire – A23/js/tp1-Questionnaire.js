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



//on fait un tableau ordonné qui contient les 15 questions qui sont contenues dans le JSON et on shuffle le tableau.
//Ensuite on choisi 5 questions au hasard dans le tableau et on les mets dans un autre tableau.
//On fait un for qui va créer les 5 questions dans le rectangle des données.








