// add "plus" button
let plus_btn = document.createElement("button"); // creo elemento button
let plus = document.querySelector(".strength");  //
plus.appendChild(plus_btn);
plus_btn.classList.add("more")
plus_btn.classList.add("more_strength")

let plus_text = document.createTextNode(" + ");
plus_btn.appendChild(plus_text)

// add "minus" button
let less_btn = document.createElement("button");
let less = document.querySelector(".strength"); 
less.appendChild(less_btn);
less_btn.classList.add("less")
less_btn.classList.add("less_strength")

let less_text = document.createTextNode(" - ");
less_btn.appendChild(less_text)

// add value field
let value_field = document.createElement("div");
let value = document.querySelector(".strength"); 
value.appendChild(value_field);
value_field.classList.add("value")
value_field.classList.add("value_strength")

let value_text = document.createTextNode(" 10 ");
value_field.appendChild(value_text)

// Funzionalità Javascript della pagina

let count = 10; // Inizializza il valore di count

// Definisci un oggetto che associa il costo ai valori validi
const costMap_str = {
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
function updateValueAndCost_str() {
  const valueStrengthDiv = document.querySelector(".value_strength"); // legge il valore aggiornato dal div value_strenght
  const costStrengthDiv = document.querySelector(".cost_str"); // legge il valore aggiornato dal div cost_str

  const newValue_str = parseInt(valueStrengthDiv.textContent); // legge il valore del div e lo converte il cifra

  // Valore tra 8 e 15
  if (newValue_str < 8) {
    valueStrengthDiv.textContent = "8";
  } else if (newValue_str > 15) {
    valueStrengthDiv.textContent = "15";
  }

  const updatedValue_str = parseInt(valueStrengthDiv.textContent);

  // Aggiorna il costo
  costStrengthDiv.textContent = "Cost: " + costMap_str[updatedValue_str]; // scrive nel campo cost il nuovo valore
  console.log("Valore aggiornato:", updatedValue_str); // for debugging
  console.log("Costo aggiornato:", costMap_str[updatedValue_str]); // for debugging
}

// Funzione per incrementare il valore
function increaseValue() {
  const valueStrengthDiv = document.querySelector(".value_strength");
  let newValue_str = parseInt(valueStrengthDiv.textContent);
  newValue_str++;
  valueStrengthDiv.textContent = newValue_str;
  updateValueAndCost_str();
  updateRemainingPoints(); // Aggiorna i punti rimanenti
    // alert(`Total cost: ${totalCost}`); // for debugging
    // alert(`Final Result: ${SubtractionResult}`); // for debugging
}

// Funzione per decrementare il valore
function decreaseValue() {
  const valueStrengthDiv = document.querySelector(".value_strength");
  let newValue_str = parseInt(valueStrengthDiv.textContent);
  newValue_str--;
  valueStrengthDiv.textContent = newValue_str;
  updateValueAndCost_str();
  updateRemainingPoints(); // Aggiorna i punti rimanenti

}

// Aggiungi event listener ai pulsanti "+" e "-"
document.querySelector(".more_strength").addEventListener("click", increaseValue);
document.querySelector(".less_strength").addEventListener("click", decreaseValue);

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

  // Aggiorna solo il campo value_strength
  document.querySelector(".value_strength").textContent = somma;
  updateValueAndCost_str();
  updateRemainingPoints(); // Aggiorna i punti rimanenti

}

// Aggiungi event listener al pulsante "Roll the dice!"
document.querySelector(".roll_strength").addEventListener("click", rollDice);

// Chiamata iniziale per resettare il costo iniziale
updateValueAndCost_str();

var ww = window.innerWidth;
console.log('width: ' + ww); //for debugging

var dpr = window.devicePixelRatio;
console.log('pixel ratio: ' + dpr); //for debugging

