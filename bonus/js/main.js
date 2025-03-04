const lamp = document.getElementById("lamp");
const button = document.querySelector("button");



function toggleLight (){
   if (lamp.src.includes("white_lamp.png")) {
      lamp.src = "img/yellow_lamp.png";
      button.textContent = "Premi per spegnere"
  } else {
      lamp.src = "img/white_lamp.png";
      button.textContent = "Premi per accendere"
  }
}

button.addEventListener("click", toggleLight);


