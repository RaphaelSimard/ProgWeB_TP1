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
        // ayayayaya
        let questionsArray = JSONaObjectJS();
            console.log(questionsArray[0].reponses[1]);
    });
    return boutonDemarrage;
}

/**
 * Fonction qui crée l'interdface d'introduction du jeu.
 */
function construireInterfaceIntro() {
    rectangle.appendChild(creerBaliseX("h1", "titre", "Bienvenue sur le quiz JavaScript de Janelle et Raphael"));
    rectangle.appendChild(creerBaliseX("p", "p1", "JEU QUESTIONNAIRE :o"));
    rectangle.appendChild(creerBaliseX("p", "p2", "Je vous invite à participer à un petit jeu questionnaire qui comporte 5 questions choisies au hasard dans un ensemble de questions. "));
    rectangle.appendChild(creerBouton());

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
    boutonNextQuestion();
    boutonAbandonner();
    currentQuestionIndex++;
}


function affichageQuestion() {
    //rectangle.appendChild(creerBaliseX("p", "question", tableauDe5Questions[currentQuestionIndex].question));
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
construireInterfaceIntro(rectangleDesDonnees.appendChild(rectangle));




