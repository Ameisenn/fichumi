
    //var joueur = prompt("Fais ton choix : pierre, feuille ou ciseaux");



function clicResult(x) {
    var joueur = x;

    var random = Math.floor(Math.random() * 3 + 1);

    var ordi;

    if (random === 1) {
        ordi = 'pierre'
        document.createElement("img").innerHTML = choixordi;
    } else if (random === 2) {
        ordi = 'ciseaux'

    } else {
        ordi = 'feuille'

    }

    //if (joueur === 'pierre' | joueur === 'feuille' | joueur === 'ciseaux'){
            if (joueur === ordi) {
                 result = ('resultat ' + ordi + " " + "égalité");
            } else if (((joueur === "pierre") && (ordi === "ciseaux")) || ((joueur === "feuille") && (ordi === "pierre")) || ((joueur === "ciseaux") && (ordi === "feuille"))) {
                result = (ordi + " " + "victoire");
            } else {
                result = (ordi + " " + "lose")
            }
    //}
    //else {
    //    result = ('Cette entrée n\'est pas correct')
    //}

    document.getElementById("result").innerHTML = result;

    }







