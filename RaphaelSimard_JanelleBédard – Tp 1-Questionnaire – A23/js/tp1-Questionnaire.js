"use strict"
//Créations des variables et constantes et d'autres trucs randoms
const rectangleDesDonnees = document.getElementById("zoneDeDonnees");
const rectangle = document.createElement("div");
rectangle.id = "rectangle";
let currentQuestionIndex = 0;


let tableauQuestionnaireDesBonnesQuestionsPromisCestLeBon = JSONaObjectJS();

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
    rectangle.appendChild(creerBaliseX("h1", "titre", "Question"+ currentQuestionIndex +1 + " de 5"));
    rectangle.appendChild(creerBaliseX("br"));
    rectangle.appendChild(creerBaliseX("br"));
    JSONaObjectJS();
    affichageQuestion(tableauQuestionnaireDesBonnesQuestionsPromisCestLeBon, currentQuestionIndex);
    boutonNextQuestion();
    boutonAbandonner();
    currentQuestionIndex++;
}

/* https://youtu.be/PBcqGxrr9g8?si=8IQ3Cwq4fSOYsfaA&t=1591 */




function affichageQuestion(questionsArray, currentQuestionIndex) {

    // Get the current question from the tableauQuestionnaireDesBonnesQuestionsPromisCestLeBon based on the currentQuestionIndex
    const currentQuestion = questionsArray[currentQuestionIndex];

    // Update the HTML content of the 'rectangle' element with the current question
    rectangle.innerHTML = "";
    //rectangle.appendChild(creerBaliseX("h1", "titre", `Question ${currentQuestionIndex + 1}`));
    rectangle.appendChild(creerBaliseX("p", "question", currentQuestion.question));

    // You can also create elements for the answer choices and add them here
    for (let i = 0; i < currentQuestion.reponses.length; i++) {
        const answerElement = creerBaliseX("p", "reponse", currentQuestion.reponses[i]);
        rectangle.appendChild(answerElement);
    }
}
function construireInterfaceFinal() {
    rectangle.innerHTML = "";
    rectangle.appendChild(creerBaliseX("h1", "titre", "c'est fini"));
    console.log("help");
}


// Appel des fonctions:
construireInterfaceIntro(rectangleDesDonnees.appendChild(rectangle));




