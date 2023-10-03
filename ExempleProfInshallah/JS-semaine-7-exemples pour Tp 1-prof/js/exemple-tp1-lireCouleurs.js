"use strict";

function remplirTabCouleurs(jsonData) {
    let arrayTemp = [];

    //Transférer les informations du format JSON en tableau ordonné d'objets "Couleur"
    for (const key in jsonData) {
        arrayTemp.push(new Couleur(jsonData[key].color, jsonData[key].type, jsonData[key].code.rgba, jsonData[key].code.hex));
    }

    return (arrayTemp.length == 0) ? null : arrayTemp;
}

function afficherData(arrayCouleurs) {
    let p = null;
    let divAffichage = document.querySelector("#affCouleurs");

    //Affichier le tableau d'objets "Couleur"
    for (let i = 0; i < arrayCouleurs.length; i++) {
        p = document.createElement("p");
        p.style.color = arrayCouleurs[i].codeHex;
        p.innerHTML = arrayCouleurs[i].toString() + "<br/>";

        divAffichage.appendChild(p);
    }
}

function main() {
    let tableauCouleurs = null;
    document.body.style.backgroundColor = "lightgray";

    if ((tableauCouleurs = remplirTabCouleurs(jsonCouleurs)) !== null) {
        afficherData(tableauCouleurs);
    } else {
        alert("Aucune couleur à afficher :(");
    }
}

main();