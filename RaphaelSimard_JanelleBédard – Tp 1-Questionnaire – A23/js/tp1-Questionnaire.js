"use strict"

//Mettre votre code JS ici

const rectangleDesDonnées = document.getElementById("zoneDeDonnees");
const rectangle = document.createElement("div");
rectangle.id = "rectangle";

function créerBouton() {
    let bouton = creerBaliseX("button", "bouton", "Commencer le quiz", "");
    bouton.addEventListener("click", function () {
        alert("Vous avez cliqué sur le bouton")
        enleverValeurDuRectangle()
    });
    return bouton;
}

function enleverValeurDuRectangle() {
    while (rectangle.hasChildNodes()) {
        rectangle.removeChild(rectangle.firstChild);
    }
}
function constuireInterfaceQuestion() {
    rectangle.appendChild(creerBaliseX("h1", "titre", "Bienvenue sur le quiz JavaScript de Janelle et Raphael"));
    rectangle.appendChild(creerBaliseX("p", "p1", "JEU QUESTIONNAIRE :o"));
    rectangle.appendChild(creerBaliseX("p", "p2", "Je vous invite à participer à un petit jeu questionnaire qui comporte 5 questions choisies au hasard dans un ensemble de questions. "));
    rectangle.appendChild(créerBouton());

}


function creationTableauQuestions(){
    let questionsObjets = [];

    for (let i = 0; i < tabAssQuestions.length; i++) {
        let lesQuestions = tabAssQuestions[i];

        let question = new Question(
            lesQuestions.question,
            lesQuestions.reponses,
            lesQuestions.BonneReponse,
            lesQuestions.nbrePoints
        );

        questionsObjets.push(question);
    }
}












constuireInterfaceQuestion(rectangleDesDonnées.appendChild(rectangle));
creationTableauQuestions();
alert("allo")




//on fait un tableau ordonné qui contient les 15 questions qui sont contenues dans le JSON et on shuffle le tableau.
// CRÉERAIS DES OBJETS À PARTIR DES QUESTION JSON PUIS ENSUITE TU LES MET DANS UN TABLEAU ORDONNÉ
//Ensuite on choisi 5 questions au hasard dans le tableau et on les mets dans un autre tableau.
//On fait un for qui va créer les 5 questions dans le rectangle des données.








