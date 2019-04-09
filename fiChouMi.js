
    //var joueur = prompt("Fais ton choix : pierre, feuille ou ciseaux");

    document.getElementById("dynamic-label-input").value

    var random = Math.floor(Math.random() * 3 + 1);

    var ordi;
    if (random === 1) {
        ordi = 'pierre'
    } else if (random === 2) {
        ordi = 'ciseaux'
    } else {
        ordi = 'feuille'
    }

    if (joueur === 'pierre' | joueur === 'feuille' | joueur === 'ciseaux') {
        if (joueur === ordi) {
            alert('resultat ' + ordi + " " + "égalité");
        } else if (((joueur === "pierre") && (ordi === "ciseaux")) || ((joueur === "feuille") && (ordi === "pierre")) || ((joueur === "ciseaux") && (ordi === "feuille"))) {
            alert(ordi + " " + "victoire");
        } else {
            alert(ordi + " " + "lose")
        }
    } else {
        alert('Cette entrée n\'est pas correct')
    }

