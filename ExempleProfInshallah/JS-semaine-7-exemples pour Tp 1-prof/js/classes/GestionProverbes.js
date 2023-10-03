"use strict";

/**
 * Une classe reprenant plus ou moins le concept du patron (pattern) d'itérateur
 * sans utiliser une interface d'uniformisation des méthones
 *
 * Voir le vrai concept :   https://medium.com/elp-2018/iterator-design-pattern-6d1cb1378993
 *                          ou
 *                          https://refactoring.guru/design-patterns/iterator
 */
class GestionProverbes {

    constructor(arrayP, nombre) {

        this._tabProverbes = [];
        for (let i = 0; i < nombre; i++) {
            //avec remise
            this._tabProverbes.push(arrayP[Math.floor(Math.random() * arrayP.length)]);
        }

        //Initialiser le pointeur de proverbe avant le premier
        this._proverbeCourant = -1;

        //compteur pour s'amuser
        this._compterSuivant = 0;
        this._compterPrecedent = 0;
    }

    get compterSuivant() {
        return this._compterSuivant;
    }

    get compterPrecedent() {
        return this._compterPrecedent;
    }

    get taille (){
        return this._tabProverbes.length;
    }

    suivantExiste(){
        return (this._proverbeCourant + 1 < this._tabProverbes.length);
    }

    precedentExiste(){
        return (this._proverbeCourant - 1 >= 0);
    }

    /**
     * retourne l'objet courant ou null si pas d'objet courant
     *
     * @returns {*|null}
     */
    donnerCourant(){
        return (this._proverbeCourant > -1) ? this._tabProverbes[this._proverbeCourant] : null;
    }

    /**
     * retourne l'objet suivant ou le courant si pas d'objet suivant
     *
     * @returns {*}
     */
    donnerSuivant(){
        //pour éviter les 2 "return" on utilise une variable
        let objet = this.donnerCourant();

        if(this.suivantExiste()){
            this._compterSuivant++;
            objet = this._tabProverbes[++this._proverbeCourant];
        }

        return objet;
    }

    /**
     * retourne l'objet précédent ou le courant si pas d'objet précédent
     *
     * @returns {*}
     */
    donnerPrecedent(){
        //pour éviter les 2 return on utilise une variable
        let objet = this.donnerCourant();

        if(this.precedentExiste()){
            this._compterPrecedent++;
            objet = this._tabProverbes[--this._proverbeCourant];
        }

        return objet;
    }

    compterMotsCourant(){
        return this._tabProverbes[this._proverbeCourant].split(" ").length;
    }

    compterMotsTous(){
        let somme = 0;
        for (let i = 0; i < this._tabProverbes.length; i++) {
            somme += this._tabProverbes[i].split(" ").length;
        }

        return somme;
    }

    doublonsExiste(){
        let doublon = false;

        for (let i = 0; i < this._tabProverbes.length - 1; i++) {
            for (let j = i + 1; j < this._tabProverbes.length ; j++) {
                doublon = doublon || this._tabProverbes[i] === this._tabProverbes[j];
            }
        }

        //Ou passer par un objet Set ...

        return doublon;
    }
}