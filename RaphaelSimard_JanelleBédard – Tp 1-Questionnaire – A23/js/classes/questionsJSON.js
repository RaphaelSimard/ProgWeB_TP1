"use strict";

//IMPORTANT : Pour la syntaxe JSON voir ce lien : https://www.json.org/json-fr.html

//Mettre vos questions au format JSON ici. Un seul objet principal pour toutes les questions

//Faites quelque chose de simple comme on a vu ensemble.
//tableau associatif == MAP

[
    {
        "question1": "Quelle méthode n'existe pas dans le DOM ?",
        "optionA": "document.getElementsByBigMac",
        "optionB": "document.getElementsByClassName",
        "optionC": "document.getElementById",
        "optionD": "document.getElementsByTagName",

        "reponse": "document.getElementByBigMac"
    },

    {
        "question2": "Quelle méthode JavaScript permet de supprimer un élément du DOM ?",
        "optionA": "removeChild()",
        "optionB": "disposeElement()",
        "optionC": "hideElement()",
        "optionD": "deleteElement()",

        "reponse": "removeChild()",
        "nbrePoints": 1
    },


    {
        "question3": "Quelle elle est la bonne réponse de 1+1 ?",
        "optionA": "je me fais chier a écrire des questions",
        "optionB": "salamalécoum les frères",
        "optionC": "2",
        "optionD": "4 (c'est la bonne réponse)",

        "reponse": "2",
        "nbrePoints": 1
    },

    {
        "question4": "Comment pouvez-vous empêcher le comportement par défaut d'un lien hypertexte (par exemple, empêcher le chargement d'une nouvelle page) en JavaScript ?",
        "optionA": "event.cancelBubble()",
        "optionB": "event.stopPropagation()",
        "optionC": "event.stopImmediatePropagation()",
        "optionD": "event.preventDefault()",

        "reponse": "event.preventDefault()",
        "nbrePoints": 1
    },

    {
        "question5": "Quelle est la bonne manière d'écrire un commentaire en JavaScript?",
        "optionA": "<!--- Ceci est un commentaire -->",
        "optionB": "{* Ceci est un commentaire *}",
        "optionC": "document.getElementById",
        "optionD": "document.getElementsByTagName",

        "reponse": "document.getElementByBigMac",
        "nbrPoints": 1
    },

    {
        "question6": "Quelle méthode JavaScript est utilisée pour supprimer le dernier élément d'un tableau ?",
        "optionA": "push()",
        "optionB": "shift()",
        "optionC": "push()",
        "optionD": "pop()",

        "reponse": "shift()",
        "nbrPoints": 1
    },

    {
        "question7": "Comment pouvez-vous modifier le contenu HTML d'un élément en JavaScript ?",
        "optionA": ".text",
        "optionB": ".value",
        "optionC": ".textContent",
        "optionD": ".innerHTML",

        "reponse": "innerHTML",
        "nbrePoints": 1
    },

    {
        "question8": "Comment ajoutez-vous un événement de clic à un élément HTML en JavaScript ?",
        "optionA": "addEventListener('click', myFunction)",
        "optionB": "onclick = myFunction()",
        "optionC": "event.stopImmigration()", //lol // TODO (c'est le github copilote qui a ajouter le // lol ))
        "optionD": "addRessource('click', myFunction)",

        "reponse": "addEventListener('click', myFunction)",
        "nbrePoints": 1
    },

    {
        "question9": "Comment faut-il déclarer une variable en JavaScript ?",
        "optionA": "varchar2 valeur = 1",
        "optionB": "varbus2 valeur = 1",
        "optionC": "let valeur = 1",
        "optionD": "laite valeur = 1",

        "reponse": "let valeur = 1",
        "nbrePoints": 1
    },

    {
        "question10": "Quel opérateur faut-il utiliser pour concaténer deux chaînes de caractères ?",
        "optionA": "/",
        "optionB": "_",
        "optionC": "+",
        "optionD": "+=",

        "reponse": "+",
        "nbrePoints": 1
    },

    {
        "question11": "Quel est le rôle principal de JavaScript dans le développement web ",
        "optionA": "Pouvoir mettre des gros boutons rouges partout sur les pages web",
        "optionB": "Ajouter des fonctionnalités tnteractives aux pages web",
        "optionC": "Ajouter des fonctionnalités dynamiques aux pages web",
        "optionD": "Ajouter des fonctionnalités statiques aux pages web",

        "reponse": "",
        "nbrePoints": 1
    },

    {
        "question12": "Comment fait-on pour créer un tableau en JavaScript ?",
        "optionA": "let tableau = new Array()",
        "optionB": "let tableau = {}",
        "optionC": "let tableau = null",
        "optionD": "let tableau = []",

        "reponse": "let tableau = []",
        "nbrePoints": 1
    },

    {
        "question13": "Quelle méthode JavaScript permet de faire une jointure entre 2 tableaux ?",
        "optionA": "tableau.join()",
        "optionB": "tableau.concat()",
        "optionC": "tableau.merge()",
        "optionD": "tableau.add()",

        "reponse": "tableau.concat()",
        "nbrePoints": 1
    },

    {
        "question14": " Quelle fonction JavaScript permet de sélectionner un élément unique à l'aide d'un sélecteur CSS ",
        "optionA": "querySelectorAll()",
        "optionB": "getElementbyId()",
        "optionC": "querySelector()",
        "optionD": "dairyQuerySelector()",


        "reponse": "querySelector()",
        "nbrePoints": 1
    },
]
