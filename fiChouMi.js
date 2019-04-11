function clicResult(x) {


    //toute cette ligne sont toute les variables (avoir mit des virgules signifie la répétion de "var")
    var joueur = x, // x = à la var qui lance tout la fonction
        random = Math.floor(Math.random() * 3 + 1),
        imgSpawn = document.getElementById("imgOrdi"), // var imgSpawn est s'incremente dans la div id imgOrdi

        ordi, // la var ordi
        imgPierre = new Image(100, 200), // On appel une variable imgPierre qui "construit" une image 100*200
        imgCiseaux = new Image(100, 200), // On appel une variable imgPierre qui "construit" une image 100*200
        imgFeuille = new Image(100, 200) // On appel une variable imgPierre qui "construit" une image 100*200
    //
        imgPierre.src = 'img/pierre2.png' // on y met le src de l'image souhaité dans la variable imgPierre
        imgCiseaux.src = 'img/ciseaux.png' // idem
        imgFeuille.src = 'img/feuille.png' // idem
    //
    if (random === 1) {          // si var random ===1
        ordi = 'pierre'            // var ordi = string "pierre"
        imgSpawn.innerHTML= ""      //  var imgSpawn inject en html " rien "
        imgSpawn.appendChild(imgPierre) // puis la var imgPierre remplace imgSpawn                ********* La je ne suis sur de capter **********
    } else if (random === 2) {       // idem sinon si
        ordi = 'ciseaux'
        imgSpawn.innerHTML= ""
        imgSpawn.appendChild(imgCiseaux)
    } else {                            // sinon
        ordi = 'feuille'
        imgSpawn.innerHTML= ""
        imgSpawn.appendChild(imgFeuille)
    }
    //
    let result;                     // creation de la variable reslut
    if (joueur === ordi) {           // si resultat strict égalite
            result = ("Equal"); // result = "chaine de carcateur" + varOrdi pierre feuille ou ciseau + chaine de caractere
    } else if (((joueur === "pierre") && (ordi === "ciseaux")) || ((joueur === "feuille") && (ordi === "pierre")) || ((joueur === "ciseaux") && (ordi === "feuille"))) { // different resultat possible de victoire
        result = ("You Win"); //result = varOrdi pierre feuille ou ciseau + "chaine de caractere
    } else {
        result = ("You Lose") // idem + you lose
    }
    document.getElementById("result").innerHTML= result; // inject le resulat dans le html par la div id=result.
}



				







