"use strict";

/**
 * Détermine si la valeur un numérique
 *
 * @param texte {strig}
 * @returns {boolean}
 */
function estNumerique(texte) {
    return !isNaN(texte);
}

/**
 * Permet de filtrer une string
 *
 * @param texte {strig}
 * @returns {string}
 */
function filtrerString(texte) {
    return texte.trim();
}

/**
 * convertir une string en number sans discrimination
 *
 * @param texte {strig}
 * @returns {string|number}
 */
function convertirStringToNumber(texte) {
    return Number(texte);
}

/**
 * Valider si une chaine est de la bonne longueur
 *
 * @param valeur {string}
 * @param min {number}
 * @param max {number}
 * @returns {boolean}
 */
function validerLongueurString(valeur, min = Number.MIN_VALUE, max = Number.MAX_VALUE) {
    return ((valeur.length >= min) && (valeur.length <= max));
}

/**
 * Valider une valeur selon des bornes incluses, prédéterminées
 *
 * @param valeur {number}
 * @param min {number}
 * @param max {number}
 * @returns {boolean}
 */
function validerNumber(valeur, min = Number.MIN_VALUE, max = Number.MAX_VALUE) {
    return ((valeur >= min) && (valeur <= max));
}