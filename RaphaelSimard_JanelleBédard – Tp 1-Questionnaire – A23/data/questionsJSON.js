"use strict";

//IMPORTANT : Pour la syntaxe JSON voir ce lien : https://www.json.org/json-fr.html
//Mettre vos questions au format JSON ici. Un seul objet principal pour toutes les questions
//Faites quelque chose de simple comme on a vu ensemble.


let tabAssQuestions = [
    {
        "question": "Quelle méthode n'existe pas dans le DOM ?",
        "reponses": [
            "document.getElementsByBigMac",
            "document.getElementsByClassName",
            "document.getElementById",
            "document.getElementsByTagName"

        ],
        "bonneReponse": "document.getElementsByBigMac - A",
        "nbrPoints": 1
    },


    {
        "question": "Quelle méthode JavaScript permet de supprimer un élément du DOM ?",
        "reponses": [
            "removeChild() - A",
            "disposeElement()",
            "hideElement()",
            "deleteElement()"
        ],
        "bonneReponse": "removeChild() - A",
        "nbrePoints": 1
    },


    {
        "question": "Sur quelle structure de conception des objets Javascript est-il basé ?",
        "reponses": [
            "Object",
            "Prototype - B",
            "Classe",
            "Structure pyramidale"

        ],
        "bonneReponse": "Prototype",
        "nbrePoints": 1
    },

    {
        "question": "Comment pouvez-vous empêcher le comportement par défaut d'un lien hypertexte (par exemple, empêcher le chargement d'une nouvelle page) en JavaScript ?",
        "reponses": [
            "event.cancelBubble()",
            "event.stopPropagation()",
            "event.stopImmediatePropagation()",
            "event.preventDefault() - D"

        ],
        "bonneReponse": "event.preventDefault() - D",
        "nbrePoints": 1
    },

    {
        "question": "Quelle est la bonne manière d'écrire un commentaire en JavaScript?",
        "reponses": [
            "<!--- Ceci est un commentaire -->",
            "{* Ceci est un commentaire *}",
            "// Ceci est un commentaire",
            "$-{ Ceci est un commentaire }-$"

        ],
        "bonneReponse": "// Ceci est un commentaire - C",
        "nbrPoints": 1
    },

    {
        "question": "Quelle méthode JavaScript est utilisée pour supprimer le dernier élément d'un tableau ?",
        "reponses": [
            "push()",
            "shift() - B",
            "push()",
            "pop()"

        ],
        "bonneReponse": "shift() - B",
        "nbrPoints": 1
    },

    {
        "question": "Comment pouvez-vous modifier le contenu HTML d'un élément en JavaScript ?",
        "reponses": [
            ".text",
            ".value",
            ".textContent",
            ".innerHTML - D"

        ],
        "bonneReponse":".innerHTML - D",
        "nbrePoints": 1
    },

    {
        "question": "Cmment ajoutez-vous un événement de clic à un élément HTML en JavaScript ?",
        "reponses": [
            "addEventListener('click', myFunction) - A",
            "onclick = myFunction()",
            "event.stopImmigration()",
            "addRessource('click', myFunction)"

        ],
        "bonneReponse": "addEventListener('click', myFunction) - A",
        "nbrePoints": 1
    },

    {
        "question": "Comment faut-il déclarer une variable en JavaScript ?",
        "reponses": [
            "int valeur = 1",
            "varbus valeur = 1",
            "let valeur = 1 - C",
            "laite valeur = 1"

        ],
        "bonneReponse": "let valeur = 1 - C",
        "nbrePoints": 1
    },

    {
        "question": "Quel opérateur faut-il utiliser pour concaténer deux chaînes de caractères ?",
        "reponses": [
            "/",
            "-",
            "+ - C",
            "+="

        ],
        "bonneReponse": "+ - C",
        "nbrePoints": 1
    },

    {
        "question": "Quel est le rôle principal de JavaScript dans le développement web ",
        "reponses": [
            "Pouvoir mettre des gros boutons rouges partout sur les pages webs",
            "Ajouter des fonctionnalités interactives aux pages web",
            "Ajouter des fonctionnalités dynamiques aux pages web - C",
            "Ajouter des fonctionnalités statiques aux pages web"

        ],
        "bonneReponse": "Ajouter des fonctionnalités dynamiques aux pages web - C",
        "nbrePoints": 1
    },

    {
        "question": "Comment fait-on pour créer un tableau en JavaScript ?",
        "reponses": [
            "let tableau = new Array()",
            "let tableau = {}",
            "let tableau = null",
            "let tableau = [] - D"

        ],
        "bonneReponse": "let tableau = [] - D",
        "nbrePoints": 1
    },

    {
        "question": "Quelle méthode JavaScript permet de faire une jointure entre 2 tableaux ?",
        "reponses": [

            "tableau.join()",
            "tableau.concat() - B",
            "tableau.merge()",
            "tableau.add()"
        ],
        "bonneReponse": "tableau.concat() - B",
        "nbrePoints": 1
    },

    {
        "question": " Quelle fonction JavaScript permet de sélectionner un élément unique à l'aide d'un sélecteur CSS ",
        "reponses": [
            "querySelectorAll()",
            "getElementbyId()",
            "querySelector() - C",
            "dairyQuerySelector()"
        ],

        "bonneReponse": "querySelector() - C",
        "nbrePoints": 1
    },

    {
        "question": "Comment écrit-on une conditionnelle en Javascript?",
        "reponses": [
            "if (i == 5){ } - A",
            "if i == 5 then { },",
            "si (i == 5) alors { }",
            "if i == 5 { }"

        ],
        "bonneReponse": "if (i == 5){ } - A",
        "nbrePoints": 1
    }
];




