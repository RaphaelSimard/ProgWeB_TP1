"use strict";

//IMPORTANT : Pour la syntaxe JSON voir ce lien : https://www.json.org/json-fr.html
//Mettre vos questions au format JSON ici. Un seul objet principal pour toutes les questions
//Faites quelque chose de simple comme on a vu ensemble.


let tabAssQuestions = [
    {
        "question1": "Quelle méthode n'existe pas dans le DOM ?",
        "reponses": {
            "optionA": "document.getElementsByBigMac",
            "optionB": "document.getElementsByClassName",
            "optionC": "document.getElementById",
            "optionD": "document.getElementsByTagName"
        },

        "bonneReponse": "document.getElementsByBigMac - A",
        "nbrPoints": 1
    },


    {
        "question2": "Quelle méthode JavaScript permet de supprimer un élément du DOM ?",
        "reponses": {
            "optionA": "removeChild() - A",
            "optionB": "disposeElement()",
            "optionC": "hideElement()",
            "optionD": "deleteElement()"
        },
        "bonneReponse": "removeChild() - A",
        "nbrePoints": 1
    },


    {
        "question3": "Sur quelle structure de conception des objets Javascript est-il basé ?",
        "reponses": {
            "optionA": "Object",
            "optionB": "Prototype - B",
            "optionC": "Classe",
            "optionD": "Structure pyramidale"

        },
        "bonneReponse": "Prototype",
        "nbrePoints": 1
    },

    {
        "question4": "Comment pouvez-vous empêcher le comportement par défaut d'un lien hypertexte (par exemple, empêcher le chargement d'une nouvelle page) en JavaScript ?",
        "reponses": {
            "optionA": "event.cancelBubble()",
            "optionB": "event.stopPropagation()",
            "optionC": "event.stopImmediatePropagation()",
            "optionD": "event.preventDefault() - D"

        },
        "bonneReponse": "event.preventDefault() - D",
        "nbrePoints": 1
    },

    {
        "question5": "Quelle est la bonne manière d'écrire un commentaire en JavaScript?",
        "reponses": {
            " optionA": "<!--- Ceci est un commentaire -->",
            "optionB": "{* Ceci est un commentaire *}",
            "optionC": "// Ceci est un commentaire",
            "optionD": "$-{ Ceci est un commentaire }-$"

        },
        "bonneReponse": "// Ceci est un commentaire - C",
        "nbrPoints": 1
    },

    {
        "question6": "Quelle méthode JavaScript est utilisée pour supprimer le dernier élément d'un tableau ?",
        "reponses": {
            "optionA": "push()",
            "optionB": "shift() - B",
            "optionC": "push()",
            "optionD": "pop()"

        },
        "bonneReponse": "shift() - B",
        "nbrPoints": 1
    },

    {
        "question7": "Comment pouvez-vous modifier le contenu HTML d'un élément en JavaScript ?",
        "reponses": {
            "optionA": ".text",
            "optionB": ".value",
            "optionC": ".textContent",
            "optionD": ".innerHTML - D"

        },
        "bonneReponse": ".innerHTML - D",
        "nbrePoints": 1
    },

    {
        "question8": "Comment ajoutez-vous un événement de clic à un élément HTML en JavaScript ?",
        "reponses": {
            "optionA": "addEventListener('click', myFunction) - A",
            "optionB": "onclick = myFunction()",
            "optionC": "event.stopImmigration()",
            "optionD": "addRessource('click', myFunction)"

        },
        "bonneReponse": "addEventListener('click', myFunction) - A",
        "nbrePoints": 1
    },

    {
        "question9": "Comment faut-il déclarer une variable en JavaScript ?",
        "reponses": {
            "optionA": "int valeur = 1",
            "optionB": "varbus valeur = 1",
            "optionC": "let valeur = 1 - C",
            "optionD": "laite valeur = 1"

        },
        "bonneReponse": "let valeur = 1 - C",
        "nbrePoints": 1
    },

    {
        "question10": "Quel opérateur faut-il utiliser pour concaténer deux chaînes de caractères ?",
        "reponses": {
            "optionA": "/",
            "optionB": "-",
            "optionC": "+ - C",
            "optionD": "+="

        },
        "bonneReponse": "+ - C",
        "nbrePoints": 1
    },

    {
        "question11": "Quel est le rôle principal de JavaScript dans le développement web ",
        "reponses": {
            "optionA": "Pouvoir mettre des gros boutons rouges partout sur les pages webs",
            "optionB": "Ajouter des fonctionnalités interactives aux pages web",
            "optionC": "Ajouter des fonctionnalités dynamiques aux pages web - C",
            "optionD": "Ajouter des fonctionnalités statiques aux pages web"

        },
        "bonneReponse": "Ajouter des fonctionnalités dynamiques aux pages web - C",
        "nbrePoints": 1
    },

    {
        "question12": "Comment fait-on pour créer un tableau en JavaScript ?",
        "reponses": {
            "optionA": "let tableau = new Array()",
            "optionB": "let tableau = {}",
            "optionC": "let tableau = null",
            "optionD": "let tableau = [] - D"

        },
        "bonneReponse": "let tableau = [] - D",
        "nbrePoints": 1
    },

    {
        "question13": "Quelle méthode JavaScript permet de faire une jointure entre 2 tableaux ?",
        "reponses": {

            "optionA": "tableau.join()",
            "optionB": "tableau.concat() - B",
            "option": "tableau.merge()",
            "optionD": "tableau.add()"
        },
        "bonneReponse": "tableau.concat() - B",
        "nbrePoints": 1
    },

    {
        "question14": " Quelle fonction JavaScript permet de sélectionner un élément unique à l'aide d'un sélecteur CSS ",
        "reponses": {
            "optionA": "querySelectorAll()",
            "optionB": "getElementbyId()",
            "optionC": "querySelector() - C",
            "optionD": "dairyQuerySelector()"
        },

        "bonneReponse": "querySelector() - C",
        "nbrePoints": 1
    },

    {
        "question15": "Comment écrit-on une conditionnelle en Javascript?",
        "reponses": {
            "optionA": "if (i == 5){ } - A",
            "optionB": "if i == 5 then { },",
            "optionC": "si (i == 5) alors { }",
            "optionD": "if i == 5 { }"

        },
        "bonneReponse": "if (i == 5){ } - A",
        "nbrePoints": 1
    }
];




