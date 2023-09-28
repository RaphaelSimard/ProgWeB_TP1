"use strict"

//Mettre votre code JS ici

const rectangleDesDonnees = document.getElementById("zoneDeDonnees");
const rectangle = document.createElement("div");
rectangle.id = "rectangle";

function creerBouton() {
    let bouton = creerBaliseX("button", "bouton", "Commencer le quiz", "");
    bouton.addEventListener("click", function () {
        //Ici on va appeller la fonction qui crée l'interface de la question
        construireInterfaceQuestion();
    });
    return bouton;
}

function constuireInterfaceIntro() {
    rectangle.appendChild(creerBaliseX("h1", "titre", "Bienvenue sur le quiz JavaScript de Janelle et Raphael"));
    rectangle.appendChild(creerBaliseX("p", "p1", "JEU QUESTIONNAIRE :o"));
    rectangle.appendChild(creerBaliseX("p", "p2", "Je vous invite à participer à un petit jeu questionnaire qui comporte 5 questions choisies au hasard dans un ensemble de questions. "));
    rectangle.appendChild(creerBouton());

}




function creationTableauQuestions(){
    let questionsObjets = [];
//Jpense qui faut faire quelque chose comme ça, au moins on a plus d'erreur "tab ass not defined" dans la console...
// J'ai pas dis que ça fonctionne tho..
    for (const questionsObjetsKey in questionsObjets) {
        let question = new Question(
            questionsObjets[questionsObjetsKey].question,
            questionsObjets[questionsObjetsKey].reponses,
            questionsObjets[questionsObjetsKey].bonneReponse,
            questionsObjets[questionsObjetsKey].nbrePoints
        );
        questionsObjets.push(question);
        rectangle.appendChild(creerBaliseX("p", "p1", question.question));
        console.log(question.question );
    }
       /** let question = new Question(
            lesQuestions.question,
            lesQuestions.reponses,
            lesQuestions.bonneReponse,
            lesQuestions.nbrePoints
        );
<<<<<<< Updated upstream
        questionsObjets.push(question);
    }
=======
        questionsObjets.push(question); */

>>>>>>> Stashed changes
}


function construireInterfaceQuestion() {
    //vider le cadre de travail
    rectangle.innerHTML = "";

    rectangle.appendChild(creerBaliseX("h1", "titre", "Question 1"));
    creationTableauQuestions();
    //Bouton reprendre
    rectangle.appendChild(creerBaliseX("br"));
    rectangle.appendChild(creerBaliseX("br"));
    rectangle.appendChild(creerInput("button", "bouton", "", "Passez à la question suivante", ""));
    rectangle.appendChild(creerInput("button", "bouton", "", "Abandonner la question", ""));
    //afficher la premiere question
    rectangle.appendChild(creerInput("p", "p1", questionsObjets[0].question));



}




constuireInterfaceIntro(rectangleDesDonnees.appendChild(rectangle));



//on fait un tableau ordonné qui contient les 15 questions qui sont contenues dans le JSON et on shuffle le tableau.
// CRÉERAIS DES OBJETS À PARTIR DES QUESTION JSON PUIS ENSUITE TU LES MET DANS UN TABLEAU ORDONNÉ
//Ensuite on choisi 5 questions au hasard dans le tableau et on les mets dans un autre tableau.
//On fait un for qui va créer les 5 questions dans le rectangle des données.








