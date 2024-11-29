document.addEventListener("DOMContentLoaded", function () {
    const text = [
        "violences", "sexuelles", "féminicides", "justice", "inégalités", "consentement", "féminisme",
        "patriarcat", "harcèlement", "viol", "abus", "oppression", "silence", "dénonciation", "égalité",
        "droits", "humains", "impunité", "résilience", "reconstruction", "victime", "agresseur", "violences",
        "conjugales", "féminicides", "solidarité", "loi", "éducation", "prévention", "culpabilisation",
        "culture du viol", "dénonciation", "législation", "soutien"
    ];

    // Attribuer une fréquence aléatoire pour chaque mot
    const wordList = text.map(word => [word, Math.floor(Math.random() * 50) + 10]);

    // Sélectionner le conteneur où afficher le nuage de mots
    const container = document.getElementById("wordcloud-container");

    // Créer le nuage de mots
    WordCloud(container, {
        list: wordList,
        gridSize: 5,
        weightFactor: 2,
        fontFamily: 'Montserrat',
        color: 'random-light',
        rotateRatio: 0.2,
        backgroundColor: '#f0f0f0',
        minSize: 2,
        maxSize: 10
    });
});