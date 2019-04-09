
    //var joueur = prompt("Fais ton choix : pierre, feuille ou ciseaux");

    var joueur = document.getElementById(choixjoueur);
    //si joueur input pierre ou feuille ou ciseau et clic btn
    //    alors le jeu se lance + affiche le resultat

    var random = Math.floor(Math.random() * 3 + 1);

    var ordi;
    if (random === 1) {
        ordi = 'pierre'
    } else if (random === 2) {
        ordi = 'ciseaux'
    } else {
        ordi = 'feuille'
    }


        
    if (joueur === 'pierre' | joueur === 'feuille' | joueur === 'ciseaux'){
            if (joueur === ordi) {
                alert('resultat ' + ordi + " " + "égalité");
            } else if (((joueur === "pierre") && (ordi === "ciseaux")) || ((joueur === "feuille") && (ordi === "pierre")) || ((joueur === "ciseaux") && (ordi === "feuille"))) {
                alert(ordi + " " + "victoire");
            } else {
                alert(ordi + " " + "lose")
            }
        }
    } else {
        alert('Cette entrée n\'est pas correct')
    }

    //p.onclick = function() { alert("moot!"); };