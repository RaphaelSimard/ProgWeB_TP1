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


var i = 0;
var correctCount = 0;

function creationTableauQuestions() {
    for (const question of tabAssQuestions) {
        console.log(question); // Use 'question' to access each question in the array
    }
//ON PEUT ENFIN ACCEDER AUX QUESTIONS!!!! LETS GOOOOOOOOOOOOOOO MASHALLAH

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
    //bruh ici c'est une zone de texte ??
    rectangle.appendChild(creerInput("p", "p1", tabAssQuestions[0].question1, "", ""));


}

constuireInterfaceIntro(rectangleDesDonnees.appendChild(rectangle));




