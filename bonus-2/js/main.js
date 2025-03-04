const lamp = document.getElementById("lamp");
const container = document.querySelector(".container");
const button = document.querySelector(".button");
const counter = document.getElementById("counter");
let counterNumber = 0;



function toggleLight (){
   if (lamp.src.includes("white_lamp.png")) {
      lamp.src = "img/yellow_lamp.png";
      button.textContent = "Premi per spegnere";
      button.classList.replace("button-on", "button-off");
      container.classList.replace("bg-color-dark", "bg-color-yellow");
      counter.classList.replace("button-on", "button-off");
  } else {
      lamp.src = "img/white_lamp.png";
      button.textContent = "Premi per accendere";
      button.classList.replace("button-off", "button-on");
      container.classList.replace("bg-color-yellow", "bg-color-dark");
      counter.classList.replace("button-off", "button-on");
  }
  counterNumber++;
  counter.textContent = counterNumber;
}

button.addEventListener("click", toggleLight);


