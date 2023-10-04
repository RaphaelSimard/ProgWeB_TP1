"use strict"
//Créations des variables et constantes et d'autres trucs randoms
const rectangleDesDonnees = document.getElementById("zoneDeDonnees");
const rectangle = document.createElement("div");
rectangle.id = "rectangle";
let indexCourrantDesQuestions = 0;


let tableauQuestionnaireDesBonnesQuestionsPromisCestLeBon = JSONaObjectJS();

/**
 * Function qui démarre le jeu lorsque l'utilisateur clique sur le bouton "Commencer le quiz"
 * @returns {*} un bouton ? pk faut-il le retourner ? update: il faut en effet le garder lol
 */
function JSONaObjectJS() {
    let tableauDesQuestions = [];
    for (const question of tabAssQuestions) {
        tableauDesQuestions.push(new Question(question.question, question.reponses, question.bonneReponse, question.nbrePoints)); // Push each question object into the new array
    }
    shuffleArray(tableauDesQuestions);
    return tableauDesQuestions.slice(0, 5);
}

/**
 * Fonction qui crée l'interdface d'introduction du jeu.
 */
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
    rectangle.innerHTML = "";
    rectangle.appendChild(creerBaliseX("br"));
    rectangle.appendChild(creerBaliseX("br"));
    JSONaObjectJS();
    affichageQuestion(tableauQuestionnaireDesBonnesQuestionsPromisCestLeBon, indexCourrantDesQuestions);
    boutonNextQuestion();
    boutonAbandonner();
    indexCourrantDesQuestions++;
}

/* https://youtu.be/PBcqGxrr9g8?si=8IQ3Cwq4fSOYsfaA&t=1591 */






function affichageQuestion(questionTableau, indexCourrantDesQuestions, tableau) {
    const questionCourante = questionTableau[indexCourrantDesQuestions];
    rectangle.innerHTML = "";
    rectangle.appendChild(creerBaliseX("h1", "p1", "Question "+ (indexCourrantDesQuestions + 1) + " de 5 pour " + questionCourante.nbrePoints + " points"));
    rectangle.appendChild(creerBaliseX("p", "p2", questionCourante.question));
    for (let i = 0; i < questionCourante.reponses.length; i++) {


        let choixDeReponse = creerBaliseX("p", "choix");
        choixDeReponse.appendChild(creerLigneReponse(questionCourante.reponses[i], i + 1));

        rectangle.appendChild(choixDeReponse);
    }


    //TODO ICI APPELLER construireInterfaceFinal À LA FIN DE LA BOUCLE (i == 6)

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

function construireInterfaceAbandon(){
    rectangle.innerHTML = "";
    rectangle.appendChild(creerBaliseX("h1", "titre", "Tu...as.. abandonné..? "));
    rectangle.appendChild(creerBaliseX("h1", "p2", "Bon.. Malgré tout, voici ton score: "));
    //  TODO COMPTER LE SCORE


}


// Appel des fonctions:
construireInterfaceIntro(rectangleDesDonnees.appendChild(rectangle));


//let choixDeReponse = creerBaliseX("p", "reponse", questionCourante.reponses[i]);
//let choixDeReponse = creerTableau(questionCourante);
// let choixDeReponse = creerLabel("input", "reponse", questionCourante.reponses[i]);
// choixDeReponse.appendChild(creerInput("radio", "reponse"));



