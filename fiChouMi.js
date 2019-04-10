
    //var joueur = prompt("Fais ton choix : pierre, feuille ou ciseaux");



function clicResult(x) {
    var joueur = x;

    var random = Math.floor(Math.random() * 3 + 1);

    var ordi;

    if (random === 1) {
        ordi = 'pierre';
        document.getElementById('pierre').innerHTML= pierre;
    } else if (random === 2) {
        ordi = 'ciseaux';
        document.getElementById('ciseaux').innerHTML= ciseaux;
    } else {
        ordi = 'feuille';
        document.getElementById('feuille').innerHTML= viewImage;
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

    var afficher=false; //permet de savoir si l'image est affichée ou non
			
			function viewImage(id) { 
				var contenuImage=!afficher ? "<img src='img/feuille.png'>" : ""; //en fonction de afficher on met l'image ou non
				afficher=!afficher;
				var contenuBouton=afficher ? "Cacher l'image" : "Afficher l'image" ; //On met un texte correspondant
				
				document.getElementById(id).innerHTML=contenuImage;
				document.getElementById().innerHTML=contenuBouton; 
			} 




