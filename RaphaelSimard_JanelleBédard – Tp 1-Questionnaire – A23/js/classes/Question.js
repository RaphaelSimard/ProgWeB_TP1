"use strict";

//Créer une classe Question
//prendre 5 questions random, créer un tableau d'objets "questions"
//pour chaque question, créer un objet question avec les attributs suivants:
//question, reponses, bonneReponse, nbrPoints
//pour chaque question, créer un objet reponses avec les attributs suivants:
//optionA, optionB, optionC, optionD
class Question {
    constructor(question, reponses, bonneReponse, nbrePoints) {
        this.question = question;
        this.reponses = reponses;
        this.bonneReponse = bonneReponse;
        this.nbrePoints = nbrePoints;
    }

}

//Créer une classe Reponse
class Reponse {
    constructor(optionA, optionB, optionC, optionD) {
        this.optionA = optionA;
        this.optionB = optionB;
        this.optionC = optionC;
        this.optionD = optionD;
    }
}
