
    //var joueur = prompt("Fais ton choix : pierre, feuille ou ciseaux");



function clicResult(x) {

    var joueur = x;

    var random = Math.floor(Math.random() * 3 + 1);

    var imgSpawn = document.getElementById("imgOrdi");

    var imgPierre = new Image(100, 200);
    imgPierre.src = 'img/pierre2.png';

    var imgCiseaux = new Image(100, 200);
    imgCiseaux.src = 'img/ciseaux.png';

    var imgFeuille = new Image(100, 200);
    imgFeuille.src = 'img/feuille.png';

    var ordi;
    
    if (random === 1) {
        ordi = 'pierre';
        imgSpawn.replaceChild(imgPierre, imgSpawn.childNodes[0]);

    } else if (random === 2) {
        ordi = 'ciseaux';
        imgSpawn.replaceChild(imgCiseaux, imgSpawn.childNodes[0]);

    } else {
        ordi = 'feuille';
        imgSpawn.replaceChild(imgFeuille, imgSpawn.childNodes[0]);

    }

    //if (joueur === 'pierre' | joueur === 'feuille' | joueur === 'ciseaux'){
            if (joueur === ordi) {
                 result = ('resultat ' + ordi + " " + "égalité");
            } else if (((joueur === "pierre") && (ordi === "ciseaux")) || ((joueur === "feuille") && (ordi === "pierre")) || ((joueur === "ciseaux") && (ordi === "feuille"))) {
                result = (ordi + " " + "victoire");
            } else {
                result = (ordi + " " + "You lose")
            }
    //}
    //else {
    //    result = ('Cette entrée n\'est pas correct')
    //}

    document.getElementById("result").innerHTML = result;

    }




    /////////////////////////




				







