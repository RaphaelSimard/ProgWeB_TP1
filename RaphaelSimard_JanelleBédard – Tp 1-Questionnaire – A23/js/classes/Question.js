"use strict";

//Créer une classe Question
//prendre 5 questions random, créer un tableau d'objets "questions"
//pour chaque question, créer un objet question avec les attributs suivants:
//question, reponses, bonneReponse, nbrPoints
//pour chaque question, créer un objet reponses avec les attributs suivants:
//optionA, optionB, optionC, optionD
class Question {
    constructor(question, reponses, bonneReponse, nbrePoints) {
        this._question = question;
        this._reponses = reponses;
        this._bonneReponse = bonneReponse;
        this._nbrePoints = nbrePoints;
    }


    get question() {
        return this._question;
    }

    set question(value) {
        this._question = value;
    }

    get reponses() {
        return this._reponses;
    }

    set reponses(value) {
        this._reponses = value;
    }

    get bonneReponse() {
        return this._bonneReponse;
    }

    set bonneReponse(value) {
        this._bonneReponse = value;
    }

    get nbrePoints() {
        return this._nbrePoints;
    }

    set nbrePoints(value) {
        this._nbrePoints = value;
    }
}



