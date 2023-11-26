// add "plus" button
let plus_btn_dex = document.createElement("button");
let plus_dex = document.querySelector(".dexterity"); 
plus_dex.appendChild(plus_btn_dex);
plus_btn_dex.classList.add("more")
plus_btn_dex.classList.add("more_dexterity")

let plus_text_dex = document.createTextNode(" + ");
plus_btn_dex.appendChild(plus_text_dex)

// add "minus" button
let less_btn_dex = document.createElement("button");
let less_dex = document.querySelector(".dexterity"); 
less_dex.appendChild(less_btn_dex);
less_btn_dex.classList.add("less")
less_btn_dex.classList.add("less_dexterity")

let less_text_dex = document.createTextNode(" - ");
less_btn_dex.appendChild(less_text_dex)

// add value field
let value_field_dex = document.createElement("div");
let value_dex = document.querySelector(".dexterity"); 
value_dex.appendChild(value_field_dex);
value_field_dex.classList.add("value")
value_field_dex.classList.add("value_dexterity")

let value_text_dex = document.createTextNode(" 10 ");
value_field_dex.appendChild(value_text_dex)

// Funzionalità Javascript della pagina

let count_dex = 10; // Inizializza il valore di count

// Definisci un oggetto che associa il costo ai valori validi
const costMap_dex = {
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
function updateValueAndCost_dex() {
  const valueDexterityDiv = document.querySelector(".value_dexterity");
  const costDexterityDiv = document.querySelector(".cost_dex");

  // Incrementa o decrementa il valore
  const newValue_dex = parseInt(valueDexterityDiv.textContent);

  // Assicurati che il valore rimanga nell'intervallo valido
  if (newValue_dex < 8) {
    valueDexterityDiv.textContent = "8";
  } else if (newValue_dex > 15) {
    valueDexterityDiv.textContent = "15";
  }

  const updatedValue_dex = parseInt(valueDexterityDiv.textContent);

  // Aggiorna il costo
  costDexterityDiv.textContent = "Cost: " + costMap_dex[updatedValue_dex];
//   console.log("Valore aggiornato:", updatedValue_dex); // for debugging
//   console.log("Costo aggiornato:", costMap_dex[updatedValue_dex]); // for debugging
}

// Funzione per incrementare il valore
function increaseValue() {
  const valueDexterityDiv = document.querySelector(".value_dexterity");
  let newValue_dex = parseInt(valueDexterityDiv.textContent);
  newValue_dex++;
  valueDexterityDiv.textContent = newValue_dex;
  updateValueAndCost_dex();
  updateRemainingPoints(); // Aggiorna i punti rimanenti
}

// Funzione per decrementare il valore
function decreaseValue() {
  const valueDexterityDiv = document.querySelector(".value_dexterity");
  let newValue_dex = parseInt(valueDexterityDiv.textContent);
  newValue_dex--;
  valueDexterityDiv.textContent = newValue_dex;
  updateValueAndCost_dex();
}

// Aggiungi event listener ai pulsanti "+" e "-"
document.querySelector(".more_dexterity").addEventListener("click", increaseValue);
document.querySelector(".less_dexterity").addEventListener("click", decreaseValue);

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
  document.querySelector(".value_dexterity").textContent = somma;
  updateValueAndCost_dex();
  updateRemainingPoints(); // Aggiorna i punti rimanenti
}

// Aggiungi event listener al pulsante "Roll the dice!"
document.querySelector(".roll_dexterity").addEventListener("click", rollDice);

// Chiamata iniziale per impostare il costo iniziale
updateValueAndCost_dex();