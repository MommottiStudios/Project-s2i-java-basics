// add "plus" button
let plus_btn_wis = document.createElement("button");
let plus_wis = document.querySelector(".wisdom"); 
plus_wis.appendChild(plus_btn_wis);
plus_btn_wis.classList.add("more")
plus_btn_wis.classList.add("more_wisdom")

let plus_text_wis = document.createTextNode(" + ");
plus_btn_wis.appendChild(plus_text_wis)

// add "minus" button
let less_btn_wis = document.createElement("button");
let less_wis = document.querySelector(".wisdom"); 
less_wis.appendChild(less_btn_wis);
less_btn_wis.classList.add("less")
less_btn_wis.classList.add("less_wisdom")

let less_text_wis = document.createTextNode(" - ");
less_btn_wis.appendChild(less_text_wis)

// add value field
let value_field_wis = document.createElement("div");
let value_wis = document.querySelector(".wisdom"); 
value_wis.appendChild(value_field_wis);
value_field_wis.classList.add("value")
value_field_wis.classList.add("value_wisdom")

let value_text_wis = document.createTextNode(" 10 ");
value_field_wis.appendChild(value_text_wis)

// Funzionalità Javascript della pagina

let count_wis = 10; // Inizializza il valore di count

// Definisci un oggetto che associa il costo ai valori validi
const costMap_wis = {
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
function updateValueAndCost_wis() {
  const valueWisdomDiv = document.querySelector(".value_wisdom");
  const costWisdomDiv = document.querySelector(".cost_wis");

  // Incrementa o decrementa il valore
  const newValue_wis = parseInt(valueWisdomDiv.textContent);

  // Assicurati che il valore rimanga nell'intervallo valido
  if (newValue_wis < 8) {
    valueWisdomDiv.textContent = "8";
  } else if (newValue_wis > 15) {
    valueWisdomDiv.textContent = "15";
  }

  const updatedValue_wis = parseInt(valueWisdomDiv.textContent);

  // Aggiorna il costo
  costWisdomDiv.textContent = "Cost: " + costMap_wis[updatedValue_wis];
  // console.log("Valore aggiornato:", updatedValue_wis); // for debugging
  // console.log("Costo aggiornato:", costMap_wis[updatedValue_wis]); // for debugging
}

// Funzione per incrementare il valore
function increaseValue() {
  const valueWisdomDiv = document.querySelector(".value_wisdom");
  let newValue_wis = parseInt(valueWisdomDiv.textContent);
  newValue_wis++;
  valueWisdomDiv.textContent = newValue_wis;
  updateValueAndCost_wis();
  updateRemainingPoints(); 
}

// Funzione per decrementare il valore
function decreaseValue() {
  const valueWisdomDiv = document.querySelector(".value_wisdom");
  let newValue_wis = parseInt(valueWisdomDiv.textContent);
  newValue_wis--;
  valueWisdomDiv.textContent = newValue_wis;
  updateValueAndCost_wis();
  updateRemainingPoints(); 
}

// Aggiungi event listener ai pulsanti "+" e "-"
document.querySelector(".more_wisdom").addEventListener("click", increaseValue);
document.querySelector(".less_wisdom").addEventListener("click", decreaseValue);

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

  // Aggiorna solo il campo value_wisdom
  document.querySelector(".value_wisdom").textContent = somma;
  updateValueAndCost_wis();
  updateRemainingPoints(); // Aggiorna i punti rimanenti
}

// Aggiungi event listener al pulsante "Roll the dice!"
document.querySelector(".roll_wisdom").addEventListener("click", rollDice);

// Chiamata iniziale per impostare il costo iniziale
updateValueAndCost_wis();