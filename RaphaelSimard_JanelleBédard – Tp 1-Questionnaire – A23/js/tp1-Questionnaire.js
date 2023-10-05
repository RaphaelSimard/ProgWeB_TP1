"use strict"

const rectangleDesDonnees = document.getElementById("zoneDeDonnees");
const rectangle = document.createElement("div");
rectangle.id = "rectangle";

//TODO trouver un moyen de ne pas utiliser de variable globale pour l'index de la question courante
let indexCourrantQuestion = -1;


//let tableauQuestionnaireDesBonnesQuestionsPromisCestLeBon = JSONaObjectJS();
const unObjetQuestionnaireQuiz = new QuestionnaireQuiz();

//TODO ICI LA BONNE QUESTION ÇA DEVRAIT TECHNIQUEMENT ÊTRE UN "NEW QUESTION" (ou pas finalement jsp)
const unObjetQuestions = unObjetQuestionnaireQuiz.questions[indexCourrantQuestion];

function construireInterfaceIntro() {
    rectangle.innerHTML = "";
    rectangle.appendChild(creerBaliseX("h1", "titre", "Bienvenue sur le quiz JavaScript de Janelle et Raphaël"));
    rectangle.appendChild(creerBaliseX("p", "p1", "Jeu Questionnaire "));
    rectangle.appendChild(creerBaliseX("p", "p2", "Nous vous invitons à participer à un petit jeu questionnaire qui comporte 5 questions choisies au hasard dans un ensemble de questions. Chaque question vous donneras un certain nombre de points. À la fin du quiz, vous obtiendrez votre résultat final. Bonne chance! ! 🥰 "));
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
    rectangle.appendChild(creerBaliseX("h1", "titre", "Voici votre résultat final: "));
    rectangle.appendChild(creerBaliseX("p", "p2", "Vous avez une note de --mettre la note--. C'est -ici mettre message selon le score-"));
    creerBoutonRejouer();

}

function construireInterfaceAbandon() {
    rectangle.innerHTML = "";
    rectangle.appendChild(creerBaliseX("h1", "titre", "Tu...as.. abandonné..? "));
    rectangle.appendChild(creerBaliseX("p", "p2", "Bon.. Malgré tout, voici ton score: "));
    //  TODO Apeller la fonction qui va compter le score (elle est dans questionnaireQuiz.js)
}


// Appel des fonctions:
construireInterfaceIntro(rectangleDesDonnees.appendChild(rectangle));


//TODO EFFACER ÇA ??
//let choixDeReponse = creerBaliseX("p", "reponse", questionCourante.reponses[i]);
//let choixDeReponse = creerTableau(questionCourante);
// let choixDeReponse = creerLabel("input", "reponse", questionCourante.reponses[i]);
// choixDeReponse.appendChild(creerInput("radio", "reponse"));



/**------------------TOUT LES BOUTONS, VA SAVOIR OÙ ILS VONT FINIR------------------*/

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
    let boutonRejouer = rectangle.appendChild(creerInput("button", "bouton", "", "Rejouer !", ""));
    boutonRejouer.addEventListener("click", function () {

        //à comprendre parce que voila tu testeras....
        indexCourrantQuestion = -1;

        construireInterfaceIntro();
        //TODO REMETTRE LE SCORE À 0 ? index à 0 ?
    });

}

