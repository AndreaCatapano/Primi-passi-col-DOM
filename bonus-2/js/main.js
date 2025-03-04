const lamp = document.getElementById("lamp");
const container = document.querySelector(".container");
const button = document.querySelector(".button");



function toggleLight (){
   if (lamp.src.includes("white_lamp.png")) {
      lamp.src = "img/yellow_lamp.png";
      button.textContent = "Premi per spegnere"
      button.classList.replace("button-on", "button-off")
      container.classList.replace("bg-color-dark", "bg-color-yellow")
  } else {
      lamp.src = "img/white_lamp.png";
      button.textContent = "Premi per accendere"
      button.classList.replace("button-off", "button-on")
      container.classList.replace("bg-color-yellow", "bg-color-dark")
  }
}

button.addEventListener("click", toggleLight);


