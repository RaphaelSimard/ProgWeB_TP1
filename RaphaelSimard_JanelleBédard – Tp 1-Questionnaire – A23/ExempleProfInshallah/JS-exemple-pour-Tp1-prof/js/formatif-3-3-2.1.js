"use strict";

const CHAINE_LONG_MIN = 3;
const CHAINE_LONG_MAX = 40;
const POIDS_MIN = 0;
const POIDS_MAX = 600;
const TAILLE_MIN = 0.5;
const TAILLE_MAX = 3;

const NBR_CHAMPS_VALIDES = 6;
let champsValides = {};

let personne1 = null;
let personne2 = null;

/**
 * Créer et ajouter au DOM le HTML nécessaire pour saisir les données
 * permettant de faire les claculs du IMC
 *
 * @param baliseCadre {string}
 */
function construireInterfaceSaisie(baliseCadre) {
    //vider le cadre de travail
    baliseCadre.innerHTML = "";

    //Placer les balises
    baliseCadre.appendChild(creerBaliseX("h1", "titre", "Saisir les informations pour moi et mon ami"));

    //Saisie des infos pour moi
    baliseCadre.appendChild(creerLabel("", "nommoi", "Saisir mon nom :", "labelSaisie"));
    baliseCadre.appendChild(creerInput("text", "nommoi", "", "", "texteSaisie"));
    baliseCadre.appendChild(creerLabel("nommoiErreur", "", "", "labelErreur"));
    baliseCadre.appendChild(creerBaliseX("br"));
    baliseCadre.appendChild(creerLabel("", "poidsmoi", "Entrez votre poids en kg (valeur entre " + POIDS_MIN +
        " kg et " + POIDS_MAX + " kg) :", "labelSaisie"));
    baliseCadre.appendChild(creerInput("text", "poidsmoi", "", "", "texteSaisie"));
    baliseCadre.appendChild(creerLabel("poidsmoiErreur", "", "", "labelErreur"));
    baliseCadre.appendChild(creerBaliseX("br"));
    baliseCadre.appendChild(creerLabel("", "taillemoi", "Entrez votre taille en mètre (valeur entre " +
        TAILLE_MIN + " m et " + TAILLE_MAX + " m) :", "labelSaisie"));
    baliseCadre.appendChild(creerInput("text", "taillemoi", "", "", "texteSaisie"));
    baliseCadre.appendChild(creerLabel("taillemoiErreur", "", "", "labelErreur"));

    baliseCadre.appendChild(creerBaliseX("br"));
    baliseCadre.appendChild(creerBaliseX("br"));

    //Saisie des infos pour mon ami
    baliseCadre.appendChild(creerLabel("", "nomami", "Saisir le nom de mon ami :", "labelSaisie"));
    baliseCadre.appendChild(creerInput("text", "nomami", "", "", "texteSaisie"));
    baliseCadre.appendChild(creerLabel("nomamiErreur", "", "", "labelErreur"));
    baliseCadre.appendChild(creerBaliseX("br"));
    baliseCadre.appendChild(creerLabel("", "poidsami", "Entrez votre poids en kg (valeur entre " + POIDS_MIN +
        " kg et " + POIDS_MAX + " kg) :", "labelSaisie"));
    baliseCadre.appendChild(creerInput("text", "poidsami", "", "", "texteSaisie"));
    baliseCadre.appendChild(creerLabel("poidsamiErreur", "", "", "labelErreur"));
    baliseCadre.appendChild(creerBaliseX("br"));
    baliseCadre.appendChild(creerLabel("", "tailleami", "Entrez votre taille en mètre (valeur entre " +
        TAILLE_MIN + " m et " + TAILLE_MAX + " m) :", "labelSaisie"));
    baliseCadre.appendChild(creerInput("text", "tailleami", "", "", "texteSaisie"));
    baliseCadre.appendChild(creerLabel("tailleamiErreur", "", "", "labelErreur"));

    //Bouton calculer
    baliseCadre.appendChild(creerBaliseX("br"));
    baliseCadre.appendChild(creerBaliseX("br"));
    baliseCadre.appendChild(creerInput("button", "boutonCalculer", "", "Calculer les IMC", ""));
    boutonCalculer.disabled = true;

    //todo À supprimer
    //Pour aller plus vite pour faire des tests de calcul
    // nommoi.value = "Jocelyn";
    // poidsmoi.value = 98;
    // taillemoi.value = 1.78;
    //
    // nomami.value = "Peter";
    // poidsami.value = 102;
    // tailleami.value = 1.54;

    gererInterfaceSaisie(baliseCadre);
}

/**
 * Assurer la gestion des évènements pour la saisie d'informations pour un calcul d'IMC
 *
 * @param baliseCadre {string}
 */
function gererInterfaceSaisie(baliseCadre) {
    //vider le tableau de boolean de validation on en plus besoin
    champsValides = {};

    //Ajouter les écouteurs
    //Listener de moi
    nommoi.addEventListener("keyup", function (event) {
        champsValides[event.target.id] = validerSaisieChaine(event, CHAINE_LONG_MIN, CHAINE_LONG_MAX);
    });
    poidsmoi.addEventListener("keyup", function (event) {
        champsValides[event.target.id] = validerSaisieFloat(event, POIDS_MIN, POIDS_MAX);
    });
    taillemoi.addEventListener("keyup", function (event) {
        champsValides[event.target.id] = validerSaisieFloat(event, TAILLE_MIN, TAILLE_MAX);
    });

    //Listener de mon ami
    nomami.addEventListener("keyup", function (event) {
        champsValides[event.target.id] = validerSaisieChaine(event, CHAINE_LONG_MIN, CHAINE_LONG_MAX);
    });
    poidsami.addEventListener("keyup", function (event) {
        champsValides[event.target.id] = validerSaisieFloat(event, POIDS_MIN, POIDS_MAX);
    });
    tailleami.addEventListener("keyup", function (event) {
        champsValides[event.target.id] = validerSaisieFloat(event, TAILLE_MIN, TAILLE_MAX);
    });

    //Écouteur sur le bouton calculer
    boutonCalculer.addEventListener("click", gererBoutonCalculer);

    //cadre.addEventListener("focusout", gererAccesBoutonCalculer);
    //OU
    cadre.addEventListener("keyup", gererAccesBoutonCalculer);
}

/**
 * Définie pour modifier l'accès au bouton "calculer IMC"
 *
 * @param e {event}
 */
function gererAccesBoutonCalculer(e) {
    if (nombreChampsValidesOK()) {
        boutonCalculer.disabled = false
    } else {
        boutonCalculer.disabled = true;
    }
}

/**
 * Définie pour gerer le comportement du bouton "calculer IMC"
 *
 * @param e {event}
 */
function gererBoutonCalculer(e) {
    if (nombreChampsValidesOK()) {
        //Créer les objets avec les données du formulaire
        personne1 = new Personne(nommoi.value, parseFloat(taillemoi.value), parseFloat(poidsmoi.value));
        personne2 = new Personne(nomami.value, parseFloat(tailleami.value), parseFloat(poidsami.value));

        //Plus besoin de cet écouteur pour le moment
        cadre.removeEventListener("focusout", gererAccesBoutonCalculer);

        //Faire afficher les résultats
        construireInterfaceResultat(cadre);
    }
}

/**
 * Créer et ajouter au DOM le HTML nécessaire pour afficher les résultats
 *
 * @param baliseCadre {string}
 */
function construireInterfaceResultat(baliseCadre) {
    //vider le cadre de travail
    baliseCadre.innerHTML = "";

    baliseCadre.appendChild(creerBaliseX("h1", "titre"));
    baliseCadre.appendChild(creerBaliseX("p", "monresultat"));
    baliseCadre.appendChild(creerBaliseX("p", "amiresultat"));
    baliseCadre.appendChild(creerBaliseX("p", "question"));
    baliseCadre.appendChild(creerBaliseX("p", "erreur"));

    //Bouton reprendre
    baliseCadre.appendChild(creerBaliseX("br"));
    baliseCadre.appendChild(creerBaliseX("br"));
    baliseCadre.appendChild(creerInput("button", "boutonReprendre", "", "Refaire un autre calcul", ""));

    gererInterfaceResultat(baliseCadre);
}

/**
 * Assurer la gestion des évènements pour l'affichage du calcul d'un IMC
 *
 * @param baliseCadre {string}
 */
function gererInterfaceResultat(baliseCadre) {
    //Calculer l'IMC
    let IMCMoi = personne1.calculerIMC(2);
    let IMCAmi = personne2.calculerIMC(2);

    //Affichage de l'info dans la page HTML
    titre.textContent = "Voici les résultats du calcul de vos IMC :o)"
    monresultat.textContent = "Le résultat de mon IMC est " + IMCMoi + ", ce qui signifie : " + Personne.determinerSignificationIMC(IMCMoi);
    amiresultat.textContent = "Le résultat de l'IMC de mon ami est " + IMCAmi + ", ce qui signifie : " + Personne.determinerSignificationIMC(IMCAmi);
    question.textContent = "Est-ce que mon IMC est supérieur à celui de mon ami ? " + ((IMCMoi > IMCAmi) ? "oui" : "non") + "";

    boutonReprendre.addEventListener("click", function (event) {
        construireInterfaceSaisie(cadre);
    });
}

/**
 * Spécifique au problème, elle vérifie pendant la saisie d'une chaine dans un input texte HTML
 * si sa longueur est entre les bornes et affiche un message s'il y a un problème.
 *
 * @param e {event}
 * @param min {number}
 * @param max {number}
 *
 * @return {boolean} true si valide , false sinon
 */
function validerSaisieChaine(e, min, max) {
    let idErreurThis = document.querySelector("#" + e.target.id + "Erreur");
    let valueThis = e.target.value;
    let valide = false;

    if (validerLongueurString(valueThis, min, max)) {
        idErreurThis.textContent = "";
        valide = true;
    } else {
        idErreurThis.textContent = "Entrez une chaine entre " + min + " et " + max + " caractères de long";
    }

    return valide;
}

/**
 * Spécifique au problème, elle vérifie pendant la saisie d'une valeur numérique dans un input texte HTML
 * si la valeur est entre les bornes et affiche un message s'il y a un problème.
 *
 * @param e {event}
 * @param min {number}
 * @param max {number}
 *
 * @return {boolean} true si valide , false sinon
 */
function validerSaisieFloat(e, min, max) {
    let idErreurThis = document.querySelector("#" + e.target.id + "Erreur");
    let valueThis = e.target.value;
    let floatThis = 0;
    let valide = false;

    if (!isNaN(valueThis)) {
        //conversion
        floatThis = parseFloat(valueThis);
        if (validerNumber(floatThis, min, max)) {
            idErreurThis.textContent = "";
            valide = true;
        } else {
            idErreurThis.textContent = "Entrez une valeur réelle entre " + min + " et " + max;
        }
    } else {
        idErreurThis.textContent = "Entrez une valeur numérique";
    }

    return valide;
}

function nombreChampsValidesOK() {
    let nbrChampsValides = 0;

    for (const keyName in champsValides) {
        if (champsValides[keyName] === true) {
            nbrChampsValides++;
        }
    }

    return (nbrChampsValides === NBR_CHAMPS_VALIDES);
}

function main() {
    //"cadre" est l'id du de la balise "div" dans le HTML
    construireInterfaceSaisie(cadre);
}

main();
