"use strict"

const rectangleDesDonnees = document.getElementById("zoneDeDonnees");
const rectangle = document.createElement("div");
rectangle.id = "rectangle";

//TODO trouver un moyen de ne pas utiliser de variable globale pour l'index de la question courante
let indexCourrantQuestion = 0;


//let tableauQuestionnaireDesBonnesQuestionsPromisCestLeBon = JSONaObjectJS();
const unObjetQuestionnaireQuiz = new QuestionnaireQuiz();

//TODO ICI LA BONNE QUESTION ÇA DEVRAIT TECHNIQUEMENT ÊTRE UN "NEW QUESTION" (ou pas finalement jsp)
const unObjetQuestions = unObjetQuestionnaireQuiz.questions[indexCourrantQuestion];

function construireInterfaceIntro() {
    rectangle.innerHTML = "";
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
    indexCourrantQuestion++;
    if (indexCourrantQuestion < unObjetQuestionnaireQuiz.questions.length) {
        rectangle.innerHTML = "";
        rectangle.appendChild(creerBaliseX("br"));
        rectangle.appendChild(creerBaliseX("br"));
        const laBONNEquestion = unObjetQuestionnaireQuiz.questions[indexCourrantQuestion];
        affichageQuestion(laBONNEquestion, unObjetQuestionnaireQuiz);
        boutonNextQuestion();
        boutonAbandonner();
    } else {
        construireInterfaceFinal();
    }
}


function affichageQuestion(questionObj, questionnaireObj) {
    rectangle.innerHTML = "";
    const questionCourante = questionObj;
    const nbrePoints = questionCourante.nbrePoints;
    const questionText = questionCourante.question;
    const reponses = questionCourante.reponses;

    rectangle.appendChild(creerBaliseX("h1", "p1", "Question " + (indexCourrantQuestion + 1) + " de 5 pour " + nbrePoints + " points"));
    rectangle.appendChild(creerBaliseX("p", "p2", questionText));
    for (let i = 0; i < reponses.length; i++) {
        let choixDeReponse = creerBaliseX("p", "choix");
        choixDeReponse.appendChild(creerLigneReponse(reponses[i], i + 1));
        rectangle.appendChild(choixDeReponse);
    }
}

function creerLigneReponse(reponse, index) {
    let ligneReponse = document.createElement("p");
    ligneReponse.appendChild(creerInput("radio", "reponse" + index, "reponse", reponse));
    ligneReponse.appendChild(creerLabel("pRep", "reponse" + index, reponse));
    return ligneReponse;
}

function construireInterfaceFinal() {
    rectangle.innerHTML = "";
    rectangle.appendChild(creerBaliseX("h1", "titre", "c'est fini"));
}

function construireInterfaceAbandon() {
    rectangle.innerHTML = "";
    rectangle.appendChild(creerBaliseX("h1", "titre", "Tu...as.. abandonné..? "));
    rectangle.appendChild(creerBaliseX("h1", "p2", "Bon.. Malgré tout, voici ton score: "));
    //  TODO Apeller la fonction qui va compter le score (elle est dans questionnaireQuiz.js)
}


// Appel des fonctions:
construireInterfaceIntro(rectangleDesDonnees.appendChild(rectangle));


//let choixDeReponse = creerBaliseX("p", "reponse", questionCourante.reponses[i]);
//let choixDeReponse = creerTableau(questionCourante);
// let choixDeReponse = creerLabel("input", "reponse", questionCourante.reponses[i]);
// choixDeReponse.appendChild(creerInput("radio", "reponse"));


/**
 *Bouton pour abandonner le quiz
 * Techniquement la partie qui fait la vérification si on veut vraiment abandonner le quiz est dans une autre fonction.
 * On devrait mettre ca dans quel fichier ?
 */
function boutonAbandonner() {
    let boutonAbandonner = rectangle.appendChild(creerInput("button", "bouton", "", "Abandonner le quiz", ""));
    boutonAbandonner.addEventListener("click", function () {
        construireInterfaceAbandon();
    });
}

function boutonNextQuestion() {
    let boutonNextQuestion = rectangle.appendChild(creerInput("button", "bouton", "", "Passez à la question suivante", ""));
    boutonNextQuestion.addEventListener("click", function () {
        construireInterfaceQuestion();
    });
}

function creerBouton() {
    let boutonDemarrage = creerBaliseX("button", "bouton", "Commencer le quiz", "");
    boutonDemarrage.addEventListener("click", function () {
        construireInterfaceQuestion();
    });
    return boutonDemarrage;
}

function creerBoutonRejouer() {
    let boutonRejouer = creerBaliseX("button", "bouton", "Rejouer", "");
    boutonRejouer.addEventListener("click", function () {
        construireInterfaceIntro();
    });
    return boutonRejouer;
}

