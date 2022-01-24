// countdown

function countdown(){ 
    // declarer variables et les dates
    let anniversaire = new Date(2022, 7, 16, 22, 30, 0 , 0); 
    let date_actuelle = new Date();
    let duree = anniversaire.getTime() - date_actuelle.getTime(); 

    // si le countdown arrive à zero afficher le message
    if (duree < 0)  { 
         document.body.innerHTML = "<div class='message'> Bravo c gagné youpi</div>"; 
        return ;
    }  

    // diviser le temps date_actuelle qui est en millisecondes en jours heures minutes
    let seconds = Math.floor(duree / 1000); 
    let millis = duree % 1000; 

    const days = Math.floor(seconds/ 86400);
        seconds = seconds % 86400 ; 
    const hours = Math.floor( seconds / 3600 ); 
        seconds = seconds % 3600; 
    const minutes = Math.floor( seconds / 60 );
        seconds = seconds % 60;

    // mettre les temps dans le HTML
    document.getElementById("days").innerHTML=days;
    document.getElementById("hours").innerHTML=hours.toString().padStart(2, '0'); 
    document.getElementById("minutes").innerHTML=minutes.toString().padStart(2, '0'); 
    document.getElementById("seconds").innerHTML=seconds.toString().padStart(2, '0'); 
    document.getElementById("millis").innerHTML=millis.toString().padStart(3, '0'); 

    // fonction animation
    requestAnimationFrame(countdown);
}

    // executé la fonction en boucle 
requestAnimationFrame(countdown);