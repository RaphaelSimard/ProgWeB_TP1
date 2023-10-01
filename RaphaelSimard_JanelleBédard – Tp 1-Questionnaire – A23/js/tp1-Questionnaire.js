"use strict"

//Créations des variables et constantes et d'autres trucs randoms
const rectangleDesDonnees = document.getElementById("zoneDeDonnees");
const rectangle = document.createElement("div");
rectangle.id = "rectangle";


/**
 * Function qui démarre le jeu lorsque l'utilisateur clique sur le bouton "Commencer le quiz"
 * @returns {*} un bouton ? pk faut-il le retourner ?
 */
function creerBouton() {
    let bouton = creerBaliseX("button", "bouton", "Commencer le quiz", "");
    bouton.addEventListener("click", function () {
        construireInterfaceQuestion();});
    return bouton;
}

/**
 * Fonction qui crée l'interdface d'introduction du jeu.
 */
function constuireInterfaceIntro() {
    rectangle.appendChild(creerBaliseX("h1", "titre", "Bienvenue sur le quiz JavaScript de Janelle et Raphael"));
    rectangle.appendChild(creerBaliseX("p", "p1", "JEU QUESTIONNAIRE :o"));
    rectangle.appendChild(creerBaliseX("p", "p2", "Je vous invite à participer à un petit jeu questionnaire qui comporte 5 questions choisies au hasard dans un ensemble de questions. "));
    rectangle.appendChild(creerBouton());
}

/**
 * Fonction qui s'occupe seulement de faire un tableau ordonné et d'y mettre les questions récupérées du JSON.
 */
function creationTableauQuestions() {
    let tableauDesQuestions;
    for (const question of tabAssQuestions) {
        question.push(tableauDesQuestions);
    }
    //Hop hop ici on a du boulot

}

/**
 * Fonction qui s'occupe de créer l'interface des questions, les boutons, la question, les réponses, etc.
 */
function construireInterfaceQuestion() {
    //vider le cadre de travail
    rectangle.innerHTML = "";

    //Ici il faut changer le titre pour le numéro de la question (index +1)
    rectangle.appendChild(creerBaliseX("h1", "titre", "Question 1"));
    creationTableauQuestions();

    //Bouton reprendre
    rectangle.appendChild(creerBaliseX("br"));
    rectangle.appendChild(creerBaliseX("br"));
    rectangle.appendChild(creerInput("button", "bouton", "", "Passez à la question suivante", ""));
    rectangle.appendChild(creerInput("button", "bouton", "", "Abandonner la question", ""));
    //afficher la premiere question
    
    //bruh ici c'est une zone de texte ??
    rectangle.appendChild(creerInput("p", "p1", tabAssQuestions[0].question1, "", ""));


}

// Appel des fonctions:
constuireInterfaceIntro(rectangleDesDonnees.appendChild(rectangle));




