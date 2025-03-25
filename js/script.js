// inizializzo le variabili della lampada e del bottone
const lamp = document.getElementById("lamp");
const buttonSwitch = document.getElementById("btn-on-off");

// creo la funzione per il bottone in modo che venga
buttonSwitch.addEventListener("click", function(){
    if(lamp.src.includes("yellow")){
        lamp.src = "./img/white_lamp.png";
        buttonSwitch.textContent = "Accendi";
    }
    else{
        lamp.src = "./img/yellow_lamp.png";
        buttonSwitch.textContent = "Spegni";
    }
})