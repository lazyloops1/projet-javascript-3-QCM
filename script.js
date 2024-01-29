//creation of quizz (after the let quizz, write the value on the opt in html)
let quizzjeuxVideo = [{
    Question: "Combien de pokemon il y a dans la première génération?",
    value: "151",
    r1: "149",
    r2: "150",
    r3: "151",
    r4: "152"
}, {
    Question: "De quelle couleur sont les habits de Mario après avoir pris une fleur de feu?",
    value: "rouge et blanc",
    r1: "rouge et noir",
    r2: "bleu et blanc",
    r3: "bleu et rouge",
    r4: "rouge et blanc"
}, {
    Question: "Qui est le boss de fin d'Undertale en route normal?",
    value: "flowey",
    r1: "toriel",
    r2: "flowey",
    r3: "asgore",
    r4: "sans"
}, {
    Question: "Comment s'appelle le héros connu de la licence Halo?",
    value: "master chief",
    r1: "master class",
    r2: "master chief",
    r3: "master chef",
    r4: "master en études de droits"
}, {
    Question: "Quel joueur de football partage son nom avec un héros de la saga Final Fantasy?",
    value: "Zidane",
    r1: "Benzema",
    r2: "Platini",
    r3: "Zidane",
    r4: "Dugarry"
}, {
    Question: "A quelle date le jeu animal crossing : new hrizons est-il sortit?",
    value: "mars 2020",
    r1: "mars 2020",
    r2: "avril 2020",
    r3: "mars 2021",
    r4: "avril 2021"
}];

let quizzgeographie = [{

    Question: "Quel est le plus grand pays du monde?",
    value: "Russie",
    r1: "Canada",
    r2: "Chine",
    r3: "Russie",
    r4: "Etats-Unis"
}, {
    Question: "Quel est le pays le plus peuplé du monde?",
    value: "Chine",
    r1: "Inde",
    r2: "Chine",
    r3: "Etats-Unis",
    r4: "Russie"
}, {
    Question: "Quel est le plus petit pays du monde?",
    value: "Vatican",
    r1: "Monaco",
    r2: "Vatican",
    r3: "Nauru",
    r4: "Tuvalu"
}, {
    Question: "Quel est le pays le plus pauvre du monde?",
    value: "République centrafricaine",
    r1: "Burundi",
    r2: "République centrafricaine",
    r3: "République démocratique du Congo",
    r4: "Malawi",
}, {
    Question: "Quel est le pays le plus riche du monde?",
    value: "Qatar",
    r1: "Luxembourg",
    r2: "Suisse",
    r3: "Qatar",
    r4: "Irlande"
}, {
    Question: "Quel est le pays le plus visité du monde?",
    value: "France",
    r1: "France",
    r2: "Espagne",
    r3: "Etats-Unis",
    r4: "Chine"
}];

let quizzfilm = [{
    Question: "Quel est le film le plus cher de l'histoire du cinéma?",
    value: "Pirates des Caraïbes : La Fontaine de jouvence",
    r1: "Avengers : Endgame",
    r2: "Avengers : Infinity War",
    r3: "Pirates des Caraïbes : La Fontaine de jouvence",
    r4: "Pirates des Caraïbes : Jusqu'au bout du monde"
}, {
    Question: "Quel est le film le plus rentable de l'histoire du cinéma?",
    value: "Avengers : Endgame",
    r1: "Avengers : Endgame",
    r2: "Avatar",
    r3: "Titanic",
    r4: "Star Wars : Le Réveil de la Force"
}, {
    Question: "Quel est le film le plus long de l'histoire du cinéma?",
    value: "La Commune",
    r1: "Les Dix Commandements",
    r2: "Shoah",
    r3: "La Commune",
    r4: "Autant en emporte le vent"
}, {
    Question: "Quel est le film le plus court de l'histoire du cinéma?",
    value: "Fresh Guacamole",
    r1: "The Old Mill",
    r2: "The Bath",
    r3: "The Confession",
    r4: "Fresh Guacamole"
}, {
    Question: "Quel est le film le plus oscarisé de l'histoire du cinéma?",
    value: "Titanic",
    r1: "Ben-Hur",
    r2: "Titanic",
    r3: "Le Seigneur des anneaux : Le Retour du roi",
    r4: "La La Land"
}, {
    Question: "Quel est le film le plus primé de l'histoire du cinéma?",
    value: "Ben-Hur",
    r1: "Ben-Hur",
    r2: "Titanic",
    r3: "Le Seigneur des anneaux : Le Retour du roi",
    r4: "La La Land"
}];

//beacons html and audios
let h1 = document.getElementById('h1');
let h2 = document.getElementById('h2');
let reponses = document.querySelectorAll('.b');
let meme = document.getElementById('meme');
let resultat = document.getElementById('resultat');
let theme = document.getElementById('quizzTheme');
let bonne_reponse = new Audio("son/bonne_reponse.mp3");
let mauvaise_reponse = new Audio("son/mauvaise_reponse.mp3");
let quizz = document.getElementById('quizz');
let question = document.getElementById('question');
let score = 0;
let n = 0;

//when we have nothing in the selector we have no quizz
let quizzSelected = null;

//hide buttons
question.style.display = 'none';

//if we have an value in the selector 
theme.addEventListener('change', function() {
    n = 0;
    score = 0;
    switch (this.value) {
        case 'jeuxVideo':
            quizzSelected = quizzjeuxVideo;
            break;
        case 'films':
            quizzSelected = quizzfilm;
            break;
        case 'geographie':
            quizzSelected = quizzgeographie;
            break;
        default:
            quizzSelected = null;
    }

//the background and the audio change in relation of quizz selected
    if (quizzSelected) {
        quizz.style.backgroundImage = "url('img/" + this.value + ".jpg')";  
        let musiqueTheme = new Audio("son/"+this.value+".mp3");
        musiqueTheme.play();
        question.style.display = 'block';
    }
    
    Quizz();
});

function Quizz() {
//for show the title of the quizz and answers on buttons while we have questions
    if (quizzSelected && n < quizzSelected.length) {
        h2.style.display = 'block';
        h2.textContent = quizzSelected[n].Question;
        meme.style.display = 'none';
        for (let i = 0; i < reponses.length; i++) {
            reponses[i].textContent = quizzSelected[n]['r' + (i + 1)];
        }
    }
//when he finish
    else {
        h2.style.display = 'none';
        question.style.display = 'none';
//show pictures and the score on the end game in relation to your score
        if(score >= 5){
            meme.style.display = 'block';
            meme.style.backgroundImage = "url('img/bon.jpg')";
            resultat.textContent = "Votre score est de " + score + " sur " + quizzSelected.length+" vraiment pas mal!!";
        }
        else if(score >= 3){
            meme.style.display = 'block';
            meme.style.backgroundImage = "url('img/moyen.jpg')";
            meme.style.height = '120px'
            resultat.textContent = "Votre score est de " + score + " sur " + quizzSelected.length+" ouais t'as la moyenne, pas mal!";
        }
        else if(score >=0){
            meme.style.display = 'block';
            meme.style.backgroundImage = "url('img/mauvais_score.jpg')";
            resultat.textContent = "Votre score est de " + score + " sur " + quizzSelected.length+" vas falloir réviser la.";
        }
        
    }
}

//function when we click on buttons
for (let i = 0; i < reponses.length; i++) {
    reponses[i].addEventListener('click', function() {
//if we click on a good purpose
        if (this.textContent === quizzSelected[n].value) {
            resultat.textContent = "Bonne réponse !";
            bonne_reponse.play();
            score++;
            n++;
        }
//if he's a bad answer
        else {
            resultat.textContent = "Mauvaise réponse ! La bonne réponse était : "+quizzSelected[n].value;
            mauvaise_reponse.play();
            n++;
        }

        Quizz();
    });
}