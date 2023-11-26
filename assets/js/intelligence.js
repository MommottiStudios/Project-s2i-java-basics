// add "plus" button
let plus_btn_int = document.createElement("button");
let plus_int = document.querySelector(".intelligence"); 
plus_int.appendChild(plus_btn_int);
plus_btn_int.classList.add("more")
plus_btn_int.classList.add("more_intelligence")

let plus_text_int = document.createTextNode(" + ");
plus_btn_int.appendChild(plus_text_int)

// add "minus" button
let less_btn_int = document.createElement("button");
let less_int = document.querySelector(".intelligence"); 
less_int.appendChild(less_btn_int);
less_btn_int.classList.add("less")
less_btn_int.classList.add("less_intelligence")

let less_text_int = document.createTextNode(" - ");
less_btn_int.appendChild(less_text_int)

// add value field
let value_field_int = document.createElement("div");
let value_int = document.querySelector(".intelligence"); 
value_int.appendChild(value_field_int);
value_field_int.classList.add("value")
value_field_int.classList.add("value_intelligence")

let value_text_int = document.createTextNode(" 10 ");
value_field_int.appendChild(value_text_int)

// Funzionalità Javascript della pagina

let count_int = 10; // Inizializza il valore di count

// Definisci un oggetto che associa il costo ai valori validi
const costMap_int = {
  8: 0,
  9: 1,
  10: 2,
  11: 3,
  12: 4,
  13: 5,
  14: 7,
  15: 9
};

// Funzione per aggiornare il valore e il costo
function updateValueAndCost_int() {
  const valueIntelligenceDiv = document.querySelector(".value_intelligence");
  const costIntelligenceDiv = document.querySelector(".cost_int");

  // Incrementa o decrementa il valore
  const newValue_int = parseInt(valueIntelligenceDiv.textContent);

  // Assicurati che il valore rimanga nell'intervallo valido
  if (newValue_int < 8) {
    valueIntelligenceDiv.textContent = "8";
  } else if (newValue_int > 15) {
    valueIntelligenceDiv.textContent = "15";
  }

  const updatedValue_int = parseInt(valueIntelligenceDiv.textContent);

  // Aggiorna il costo
  costIntelligenceDiv.textContent = "Cost: " + costMap_int[updatedValue_int];
  // console.log("Valore aggiornato:", updatedValue_int); // for debugging
  // console.log("Costo aggiornato:", costMap_int[updatedValue_int]); // for debugging
}

// Funzione per incrementare il valore
function increaseValue() {
  const valueIntelligenceDiv = document.querySelector(".value_intelligence");
  let newValue_int = parseInt(valueIntelligenceDiv.textContent);
  newValue_int++;
  valueIntelligenceDiv.textContent = newValue_int;
  updateValueAndCost_int();
  updateRemainingPoints(); // Aggiorna i punti rimanenti
}

// Funzione per decrementare il valore
function decreaseValue() {
  const valueIntelligenceDiv = document.querySelector(".value_intelligence");
  let newValue_int = parseInt(valueIntelligenceDiv.textContent);
  newValue_int--;
  valueIntelligenceDiv.textContent = newValue_int;
  updateValueAndCost_int();
  updateRemainingPoints(); // Aggiorna i punti rimanenti
}

// Aggiungi event listener ai pulsanti "+" e "-"
document.querySelector(".more_intelligence").addEventListener("click", increaseValue);
document.querySelector(".less_intelligence").addEventListener("click", decreaseValue);

// Funzione per lanciare i dadi
function rollDice() {
  // Genera tre numeri casuali tra 1 e 6
  const risultatiDadi = [
    Math.floor(Math.random() * 6) + 1,
    Math.floor(Math.random() * 6) + 1,
    Math.floor(Math.random() * 6) + 1
  ];

  // Calcola la somma dei risultati dei dadi
  const somma = risultatiDadi.reduce((sum, num) => sum + num, 0);

  // Aggiorna solo il campo value_intelligence
  document.querySelector(".value_intelligence").textContent = somma;
  updateValueAndCost_int();
  updateRemainingPoints(); // Aggiorna i punti rimanenti
}

// Aggiungi event listener al pulsante "Roll the dice!"
document.querySelector(".roll_intelligence").addEventListener("click", rollDice);

// Chiamata iniziale per impostare il costo iniziale
updateValueAndCost_int();