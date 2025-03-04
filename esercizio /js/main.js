const lamp = document.getElementById(`lamp`);
const button = document.querySelector("button");



function lightOn (){
   lamp.src = "img/yellow_lamp.png"; 
}

button.addEventListener("click", lightOn);
