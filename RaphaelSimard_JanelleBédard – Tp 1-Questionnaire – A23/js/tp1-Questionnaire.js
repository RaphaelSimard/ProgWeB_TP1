"use strict"

//Mettre votre code JS ici

const rectangleDesDonnees = document.getElementById("zoneDeDonnees");
const rectangle = document.createElement("div");
rectangle.id = "rectangle";

function creerBouton() {
    let bouton = creerBaliseX("button", "bouton", "Commencer le quiz", "");
    bouton.addEventListener("click", function () {
        alert("Vous avez cliqué sur le bouton")
        enleverValeurDuRectangle();
        //Ici on va appeller la fonction qui crée l'interface de la question
        construireInterfaceQuestion();
    });
    return bouton;
}

function enleverValeurDuRectangle() {
    while (rectangle.hasChildNodes()) {
        rectangle.removeChild(rectangle.firstChild);
    }
}
function constuireInterfaceIntro() {
    rectangle.appendChild(creerBaliseX("h1", "titre", "Bienvenue sur le quiz JavaScript de Janelle et Raphael"));
    rectangle.appendChild(creerBaliseX("p", "p1", "JEU QUESTIONNAIRE :o"));
    rectangle.appendChild(creerBaliseX("p", "p2", "Je vous invite à participer à un petit jeu questionnaire qui comporte 5 questions choisies au hasard dans un ensemble de questions. "));
    rectangle.appendChild(creerBouton());

}


/**
 *
 */
function creationTableauQuestions(){
    let questionsObjets = [];

    for (let i = 0; i < 4; i++) {
        let lesQuestions = tabAssQuestions[i];

        let question = new Question(
            lesQuestions.question,
            lesQuestions.reponses,
            lesQuestions.bonneReponse,
            lesQuestions.nbrePoints
        );
        questionsObjets.push(question);
    }
    console.log(questionsObjets);
}

function construireInterfaceQuestion() {
    //vider le cadre de travail
    rectangle.innerHTML = "";

    rectangle.appendChild(creerBaliseX("h1", "titre", "Question 1"));
    rectangle.appendChild(creerBaliseX("p", "monresultat"));
    rectangle.appendChild(creerBaliseX("p", "amiresultat"));
    rectangle.appendChild(creerBaliseX("p", "question"));
    rectangle.appendChild(creerBaliseX("p", "erreur"));

    //Bouton reprendre
    rectangle.appendChild(creerBaliseX("br"));
    rectangle.appendChild(creerBaliseX("br"));
    rectangle.appendChild(creerInput("button", "boutonSuivant", "", "Passez à la question suivante", ""));
    rectangle.appendChild(creerInput("button", "boutonAnnuler", "", "Abandonner la question", ""));

}




constuireInterfaceIntro(rectangleDesDonnees.appendChild(rectangle));
creationTableauQuestions();
alert("allo")




//on fait un tableau ordonné qui contient les 15 questions qui sont contenues dans le JSON et on shuffle le tableau.
// CRÉERAIS DES OBJETS À PARTIR DES QUESTION JSON PUIS ENSUITE TU LES MET DANS UN TABLEAU ORDONNÉ
//Ensuite on choisi 5 questions au hasard dans le tableau et on les mets dans un autre tableau.
//On fait un for qui va créer les 5 questions dans le rectangle des données.








