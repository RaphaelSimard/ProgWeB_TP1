//Ici on met toutes les fonctions qui ne servent pas à faire afficher du texte en HTML.
/**
 * Fonction qui prend un array et shuffle les question selon algorithm Fisher-Yates
 * @param array
 */
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

/**
 * Fonction qui prend un array et shuffle les question selon algorithm Fisher-Yates
 * @returns {*[]}
 * @constructor
 */
function JSONaObjectJS() {
    let tableauDesQuestions = [];
    for (const question of tabAssQuestions) {
        tableauDesQuestions.push(new Question(question.question, question.reponses, question.bonneReponse, question.nbrePoints)); // Push each question object into the new array
    }
    shuffleArray(tableauDesQuestions);

    return tableauDesQuestions.slice(0, 5);
}


