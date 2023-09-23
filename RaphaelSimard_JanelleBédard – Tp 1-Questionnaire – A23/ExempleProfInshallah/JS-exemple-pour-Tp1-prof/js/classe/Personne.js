"use strict"

//Signification
const POIDS_MOINS_DE_18_5 = "Poids insuffisant";
const POIDS_ENTRE_18_5_ET_24_9 = "Poids normal";
const POIDS_ENTRE_25_ET_29_9 = "Excès de poids";
const POIDS_ENTRE_30_ET_34_9 = "Obésité de classe I";
const POIDS_ENTRE_35_ET_39_9 = "Obésité de classe II";
const POIDS_PLUS_DE_40 = "Obésité de classe III";

class Personne {

    constructor(nom, taille, poids) {
        this._nom = nom;
        this._taille = taille;
        this._poids = poids;
    }

    get nom() {
        return this._nom;
    }

    set nom(value) {
        this._nom = value;
    }

    get taille() {
        return this._taille;
    }

    set taille(value) {
        this._taille = value;
    }

    get poids() {
        return this._poids;
    }

    set poids(value) {
        this._poids = value;
    }

    toString(){
        return this._nom + " - " + this._taille + " - " + this._poids;
    }

    calculerIMC(precision){
        return (this._poids / (Math.pow(this._taille, 2))).toFixed(precision);
    }

    /**
     * Méthode statique qui permet d'obtenir la signification de l'IMC
     *
     * @param imc
     * @returns {string}
     */
    static determinerSignificationIMC(imc) {
        let significatinon = POIDS_MOINS_DE_18_5;

        if (imc >= 18.5 && imc <= 24.99) {
            significatinon = POIDS_ENTRE_18_5_ET_24_9;
        } else if (imc >= 25 && imc <= 29.99) {
            significatinon = POIDS_ENTRE_25_ET_29_9;
        } else if (imc >= 30 && imc <= 34.99) {
            significatinon = POIDS_ENTRE_30_ET_34_9;
        } else if (imc >= 35 && imc <= 39.99) {
            significatinon = POIDS_ENTRE_35_ET_39_9;
        } else if (imc >= 40) {
            significatinon = POIDS_PLUS_DE_40;
        }

        return significatinon;
    }
}