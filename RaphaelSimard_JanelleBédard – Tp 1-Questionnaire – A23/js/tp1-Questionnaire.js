"use strict"

//Mettre votre code JS ici

const rectangleDesDonnées = document.getElementById("zoneDeDonnees");


const rectangle = document.createElement("div");
rectangle.id = "rectangle";

// ici on fait la magnifique création du titre
const titre = document.createElement("div");
titre.id = "titre";
titre.textContent = " السَّلَامُ عَلَيْكُمْ وَ رَحْمَةُ اللهِ وَ بَرَكاتُهُ Isha'allah, bienvenue sur notre quiz  ما شاء الله";

// ici on fait la création des paragraphes

const paragraphe1 = document.createElement("p1");
paragraphe1.textContent = "JEUX QUESTIONNAIRE";
const paragraphe2 = document.createElement("p2");
paragraphe2.textContent = "Je vous invite à participer à un petit jeu-questionnaire qui comporte 5 questions choisies au hasard dans un semble de questions." +
    "Pour chaque question, vous devez choisir une réponse parmi les 4 choix proposés. En souhaitant que vous ayez autant de plaisir que nous qui fait ce script 0_0" + "' (Ps: à l'aide)";

const bouton = document.createElement("bouton");
bouton.id = "bouton";
bouton.textContent = "Commencer le jeu";


// ici on fait la création du bouton
bouton.addEventListener("click", function () {
    alert("Vous avez cliqué sur le bouton")
});
// on fait les appends, ca ressemble a ce que le prof a fait
rectangle.appendChild(titre);
rectangle.appendChild(paragraphe1);
rectangle.appendChild(paragraphe2);
rectangle.appendChild(bouton);

// fait le append du rectangle dans le rectangle des données
rectangleDesDonnées.appendChild(rectangle);