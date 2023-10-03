/**
 *Bouton pour abandonner le quiz
 * Techniquement la partie qui fait la vérification si on veut vraiment abandonner le quiz est dans une autre fonction.
 * On devrait mettre ca dans quel fichier ?
 */
function boutonAbandonner() {
    let boutonAbandonner = rectangle.appendChild(creerInput("button", "bouton", "", "Abandonner le quiz", ""));
    boutonAbandonner.addEventListener("click", function () {
        verificationAbandon();
    });
}

//TODO TROUVER OÙ METTRE CETTE FONCTION DE VÉRIFICATION
function verificationAbandon(){
    if (confirm("Êtes-vous sûr de vouloir abandonner le quiz ?")) {
        rectangle.appendChild(construireInterfaceFinal());
    }
}


function boutonNextQuestion() {
    let boutonNextQuestion = rectangle.appendChild(creerInput("button", "bouton", "", "Passez à la question suivante", ""));
    boutonNextQuestion.addEventListener("click", function () {
        construireInterfaceQuestion();
    });
}

function creerBouton() {
    let boutonDemarrage = creerBaliseX("button", "bouton", "Commencer le quiz", "");
    boutonDemarrage.addEventListener("click", function () {
        construireInterfaceQuestion();
    });
    return boutonDemarrage;
}

function creerBoutonRejouer() {
    let boutonRejouer = creerBaliseX("button", "bouton", "Rejouer", "");
    boutonRejouer.addEventListener("click", function () {
        construireInterfaceIntro();
    });
    return boutonRejouer;
}
