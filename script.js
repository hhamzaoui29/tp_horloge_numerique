 //
 let heuresDiv = document.querySelector('.heures');
 let dateDiv   = document.querySelector('.date');

 let afficherHeure = function(){
    let  annee, listeMois, mois, listeJours, jourNumero, jourNom,
         today, heures, minutes, secondes, deuxChiffres; 

// Récuperation de la date de jour
    today =new Date();
//Récuperation de l'année
    annee = today.getFullYear();
//Récuperation du mois
    listeMois = ["Janvier","Fèvrier","Mars","Avril","Mai","Juin","Juillet","Août",
                  "Septembre","Octobre","Novembre","Décembre"];
    mois = listeMois[today.getMonth()];// donne 7 " Aout" car les mois debute de 0 à 11
//Récuperation du Numero du jour du mois
    jourNumero = today.getDate(); 
//Récuperation du jour, Attention la semaine commence le dimanche dans les pays anglo-saxons ("le system d'exploitation)") 
    listeJours = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];
    jourNom = listeJours[today.getDay()];
// Afficher les heures, les minutes & les secondes
    deuxChiffres = function (element){
        if(element < 10){
            return element = "0" + element;
        } else {
            return element;
        }
    }
// On récupere les heures
    heures = deuxChiffres(today.getHours());

// On récupere les minutes
    minutes = deuxChiffres(today.getMinutes());

// On récupere les secondes
    secondes = deuxChiffres(today.getSeconds());
// On affiche dans nos div
    heuresDiv.textContent = heures + ":" + minutes  + ":" + secondes; 
    dateDiv.textContent = jourNom + ", " + jourNumero + " " + mois + " " + annee;
// on lance la fonction d'affichage tous les 1000ms soit tout les secondes
    setTimeout(afficherHeure,1000);
 }

 // on lance la fonction 
 afficherHeure();