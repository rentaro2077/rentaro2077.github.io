function mettreAJourHeure() {

    let date = new Date();
    
    // Récupère les heures, minutes et secondes actuelles
    let heures = String(date.getHours()).padStart(2, '0');
    let minutes = String(date.getMinutes()).padStart(2, '0');
    let secondes = String(date.getSeconds()).padStart(2, '0');
    
    // Formate l'heure en HH:MM:SS
    let heureActuelle = heures + ":" + minutes + ":" + secondes;

    // Met à jour l'affichage de l'heure dans l'élément avec l'id "heure"
    document.getElementById("hour").textContent = heureActuelle;
}

// Appelle la fonction `mettreAJourHeure` chaque seconde (1000 ms)
setInterval(mettreAJourHeure, 1000);
mettreAJourHeure();