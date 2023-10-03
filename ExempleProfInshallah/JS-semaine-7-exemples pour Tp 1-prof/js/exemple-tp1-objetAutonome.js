const NBR_PROVERBES = 8;

let proverbes = ["Quand tout va bien on peut compter sur les autres, quand tout va mal on ne peut compter que sur sa famille.",
    "Le bonheur ne s'acquiert pas, il ne réside pas dans les apparences, chacun d'entre nous le construit à chaque instant de sa vie avec son coeur.",
    "Les larmes qui coulent sont amères, mais plus amères encore sont celles qui ne coulent pas.",
    "Offrir l'amitié à qui veut l'amour, c'est donner du pain à qui meurt de soif.",
    "Quand la pauvreté entre par la porte, l'amour s'en va par la fenêtre.",
    "Parmi les hommes, le plus faible est celui qui ne sait pas garder un secret. Le plus fort, celui qui maîtrise sa colère, le plus patient, celui qui cache sa pauvreté, le plus riche, celui qui se contente de la part que dieu lui a faite.",
    "Souviens-toi qu'au moment de ta naissance tout le monde était dans la joie et toi dans les pleurs. Vis de manière qu'au moment de ta mort, tout le monde soit dans les pleurs et toi dans la joie.",
    "Il vaut mieux se disputer avec quelqu'un d'intelligent que parler à un imbécile.",
    "On ne peut empêcher le chien d'aboyer, ni le menteur de mentir.",
    "La femme est la ceinture qui tient le pantalon de l'homme.",
    "L'amitié se finit parfois en amour, mais rarement l'amour en amitié.",
    "Aime-toi et tu auras des amis.",
    "Mieux vaut vivre un jour comme un lion que cent ans comme un mouton.",
    "Qui veut faire quelque chose trouve un moyen, qui ne veut rien faire trouve une excuse.",
    "La douceur du miel ne console pas de la piqûre de l'abeille.",
    "Avec du temps et de la patience, on vient à bout de tout.",
    "On ne peut pas peindre du blanc sur du blanc, du noir sur du noir.",
    "Chacun a besoin de l'autre pour se révéler."];


function main() {
    //Création d'un objet "gestionProverbes"
    let GP = new GestionProverbes(proverbes, NBR_PROVERBES);

    //Pour le test
    //Attention exceptionnellement j'utilise l'attribut de la classe
    //À ne pas faire
    for (let i = 0; i < GP._tabProverbes.length; i++) {
        proverbes_choisis.innerHTML += GP._tabProverbes[i] + "<br /><br />";
    }

    suivant.addEventListener("click", (e) => {
        sortie.value = GP.donnerSuivant();
    });
    courant.addEventListener("click", (e) => {
        sortie.value = GP.donnerCourant();
    });
    precedent.addEventListener("click", (e) => {
        sortie.value = GP.donnerPrecedent();
    });
    compter_mots.addEventListener("click", (e) => {
        sortie.value = GP.compterMotsCourant();
    });
    compter_tous_les_mots.addEventListener("click", (e) => {
        sortie.value = GP.compterMotsTous();
    });
    doublons.addEventListener("click", (e) => {
        sortie.value = (GP.doublonsExiste()) ? "Il y a des doublons." : "Il n'y a pas de doublon.";
    });
    nbr_suivant.addEventListener("click", (e) => {
        sortie.value = "il y a eu " + GP.compterSuivant + " suivant(s) de fait!";
    });
    nbr_precedent.addEventListener("click", (e) => {
        sortie.value = "il y a eu " + GP.compterPrecedent + " precédent(s) de fait!";
    });
}

main();