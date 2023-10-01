"use strict"

//Créations des variables et constantes et d'autres trucs randoms
const rectangleDesDonnees = document.getElementById("zoneDeDonnees");
const rectangle = document.createElement("div");
rectangle.id = "rectangle";


/**
 * Function qui démarre le jeu lorsque l'utilisateur clique sur le bouton "Commencer le quiz"
 * @returns {*} un bouton ? pk faut-il le retourner ? update: il faut en effet le garder lol
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

let currentQuestionIndex = 0;

/**
 * Fonction qui s'occupe seulement de faire un tableau ordonné et d'y mettre les questions récupérées du JSON.
 * C'est important quon l'appelle qu'une seule fois, sinon ça va créer un tableau à chaque fois qu'on clique sur le bouton "Commencer le quiz"
 * Ne rien mettre d'autre que la création du tableau ici.
 */
function creationTableauQuestions() {
    let tableauDesQuestions;
    for (const question of tabAssQuestions) {
        question.push(tableauDesQuestions);
    }
    return tableauDesQuestions;
}

/**
 * Fonction qui s'occupe de créer l'interface des questions, les boutons, la question, les réponses, etc.
 * Va aussi s'occuper d'ajouter +1 à l'index de la question courante pour passer à la prochaine question.
 */
function construireInterfaceQuestion() {
    //vider le cadre de travail
    rectangle.innerHTML = "";
    //OK ça on garde, c'est le titre de la question (index + 1), j'ai testé et ça fonctionne
    rectangle.appendChild(creerBaliseX("h1", "titre", `Question ${currentQuestionIndex + 1}`));
    rectangle.appendChild(creerBaliseX("br"));
    rectangle.appendChild(creerBaliseX("br"));
    /*Ici il faudrait une nouvelle function AffichageQuestion() qui va afficher la question et les réponses qui sera appellée ici
    Sinon la function de l'interface sera trop pleine
     */

    //afficher la premiere question
    //blablabla qui affiche la question

    //afficher les réponses avec des boutons de type radio

    /*Faire un if qui va ajouter (nombreDePoints) au nombre de points si la réponse est bonne
    rappel pour moi même, aller voir la vidéo ci dessous pour comprendre comment bloquer de répondre à plusieurs questions en même temps:
    https://youtu.be/PBcqGxrr9g8?si=8IQ3Cwq4fSOYsfaA&t=1591 */


    rectangle.appendChild(creerInput("button", "bouton", "", "Passez à la question suivante", ""));
    //ici faudrait que sur le click du bouton, ça appelle la fonction creationTableauQuestions
    rectangle.appendChild(creerInput("button", "bouton", "", "Abandonner la question", ""));
    //ici faudrait que sur le clic du bouton, ça appelle la fonction qui va créer l'interface final et compter le nombre de point accumulés



    //bruh ici c'est une zone de texte ?? ça ne fonctionne pô.
    //rectangle.appendChild(creerInput("p", "p1", tabAssQuestions[0].question1, "", ""));


    currentQuestionIndex ++;

}

// Appel des fonctions:
constuireInterfaceIntro(rectangleDesDonnees.appendChild(rectangle));




