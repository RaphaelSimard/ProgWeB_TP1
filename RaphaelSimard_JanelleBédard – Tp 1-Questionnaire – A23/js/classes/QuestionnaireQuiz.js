//Faire une classe qui prends les quesions et qui les mets dans un tableau ordonné
//s'occupe de faire le questionnaire, de le faire avancer et de calculer les points
//Ajouter des fonctions, pour calculer les points, vérifier les réponses, etc.
//quand on clique sur jouer, faire un for in qui va créer les 5 questions dans le rectangle des données.

class QuestionnaireQuiz {

}


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
 * Prend le JSON, transforme les questions en objets et les mets dans un tableau, puis mélange le tableau et retourne les 5 premières questions.
 * @returns {*[]} tableau de 5 questions
 * @constructor
 */

