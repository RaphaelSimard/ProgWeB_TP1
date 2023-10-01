"use strict"

//Créations des variables et constantes et d'autres trucs randoms
const rectangleDesDonnees = document.getElementById("zoneDeDonnees");
const rectangle = document.createElement("div");
rectangle.id = "rectangle";
let currentQuestionIndex = 0;

/**
 * Function qui démarre le jeu lorsque l'utilisateur clique sur le bouton "Commencer le quiz"
 * @returns {*} un bouton ? pk faut-il le retourner ? update: il faut en effet le garder lol
 */
function creerBouton() {
    let boutonDemarrage = creerBaliseX("button", "bouton", "Commencer le quiz", "");
    boutonDemarrage.addEventListener("click", function () {
        construireInterfaceQuestion();
    });
    return boutonDemarrage;
}

/**
 * Fonction qui crée l'interdface d'introduction du jeu.
 */
function constuireInterfaceIntro() {
    rectangle.appendChild(creerBaliseX("h1", "titre", "Bienvenue sur le quiz JavaScript de Janelle et Raphael"));
    rectangle.appendChild(creerBaliseX("p", "p1", "JEU QUESTIONNAIRE :o"));
    rectangle.appendChild(creerBaliseX("p", "p2", "Je vous invite à participer à un petit jeu questionnaire qui comporte 5 questions choisies au hasard dans un ensemble de questions. "));
    rectangle.appendChild(creerBouton());
    creationTableauQuestions();
}

/**
 * Fonction qui s'occupe seulement de faire un tableau ordonné et d'y mettre les questions récupérées du JSON.
 * C'est important quon l'appelle qu'une seule fois, sinon ça va créer un tableau à chaque fois qu'on clique sur le bouton "Commencer le quiz"
 * Ne rien mettre d'autre que la création du tableau ici.
 */
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function creationTableauQuestions() {
    const tableauDesQuestions = []; // Create an empty array to store questions
    for (const question of tabAssQuestions) {
        tableauDesQuestions.push(question); // Push each question object into the new array
    }
    shuffleArray(tableauDesQuestions); // Shuffle the questions
    return tableauDesQuestions;
}

/**
 ici met dans un tableau 5 questions au hasard (shuffle) pris dans le tableau des questions et le return
 */
function questionHasard(tableauDesQuestions) {
    const tableauDeCinqQuestionRandom = tableauDesQuestions.slice(0, 5); // Get the first 5 questions from the shuffled array
    console.log(tableauDeCinqQuestionRandom);
    return tableauDeCinqQuestionRandom;
}


/**
 * Fonction qui s'occupe de créer l'interface des questions, les boutons, la question, les réponses, etc.
 * Va aussi s'occuper d'ajouter +1 à l'index de la question courante pour passer à la prochaine question.
 */
function construireInterfaceQuestion() {
    rectangle.innerHTML = "";
    rectangle.appendChild(creerBaliseX("h1", "titre", `Question ${currentQuestionIndex + 1}`));
    rectangle.appendChild(creerBaliseX("br"));
    rectangle.appendChild(creerBaliseX("br"));

    creationTableauQuestions();
    affichageQuestion();

    let boutonNextQuestion = rectangle.appendChild(creerInput("button", "bouton", "", "Passez à la question suivante", ""));
    boutonNextQuestion.addEventListener("click", function () {
        construireInterfaceQuestion();
    });

    let boutonAbandonner = rectangle.appendChild(creerInput("button", "bouton", "", "Abandonner la question", ""));
    boutonAbandonner.addEventListener("click", function () {
        construireInterfaceFinal();
    });

    currentQuestionIndex++;
}


function affichageQuestion() {
    /*
    Va aller chercher 5 des 15 question du tableau des questions, les shuffle
     */
    /*Faire un if qui va ajouter (nombreDePoints) au nombre de points si la réponse est bonne
    rappel pour moi même, aller voir la vidéo ci dessous pour comprendre comment bloquer de répondre à plusieurs questions en même temps:
    https://youtu.be/PBcqGxrr9g8?si=8IQ3Cwq4fSOYsfaA&t=1591 */

}

function construireInterfaceFinal() {
    rectangle.innerHTML = "";
    rectangle.appendChild(creerBaliseX("h1", "titre", "c'est fini"));
    console.log("help");
}


// Appel des fonctions:
constuireInterfaceIntro(rectangleDesDonnees.appendChild(rectangle));




