function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}


/**
 * Prend le JSON, transforme les questions en objets et les mets dans un tableau, puis mélange le tableau et retourne les 5 premières questions.
 * @returns {*[]} tableau de 5 questions
 * @constructor
 */
function JSONaObjectJS(){
    let tableauDesQuestions = [];
    for (const question of tabAssQuestions) {
        tableauDesQuestions.push(new Question(question.question, question.reponses, question.bonneReponse, question.nbrePoints )); // Push each question object into the new array
    }
    shuffleArray(tableauDesQuestions);
    const tableauDe5Questions = tableauDesQuestions.slice(0, 5);
    return tableauDe5Questions;
}


