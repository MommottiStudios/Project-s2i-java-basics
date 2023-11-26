// add "plus" button
let plus_btn_cha = document.createElement("button");
let plus_cha = document.querySelector(".charisma"); 
plus_cha.appendChild(plus_btn_cha);
plus_btn_cha.classList.add("more")
plus_btn_cha.classList.add("more_charisma")

let plus_text_cha = document.createTextNode(" + ");
plus_btn_cha.appendChild(plus_text_cha)

// add "minus" button
let less_btn_cha = document.createElement("button");
let less_cha = document.querySelector(".charisma"); 
less_cha.appendChild(less_btn_cha);
less_btn_cha.classList.add("less")
less_btn_cha.classList.add("less_charisma")

let less_text_cha = document.createTextNode(" - ");
less_btn_cha.appendChild(less_text_cha)

// add value field
let value_field_cha = document.createElement("div");
let value_cha = document.querySelector(".charisma"); 
value_cha.appendChild(value_field_cha);
value_field_cha.classList.add("value")
value_field_cha.classList.add("value_charisma")

let value_text_cha = document.createTextNode(" 10 ");
value_field_cha.appendChild(value_text_cha)

// Funzionalità Javascript della pagina

let count_cha = 10; // Inizializza il valore di count

// Definisci un oggetto che associa il costo ai valori validi
const costMap_cha = {
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
function updateValueAndCost_cha() {
  const valueCharismaDiv = document.querySelector(".value_charisma");
  const costCharismaDiv = document.querySelector(".cost_cha");

  // Incrementa o decrementa il valore
  const newValue_cha = parseInt(valueCharismaDiv.textContent);

  // Assicurati che il valore rimanga nell'intervallo valido
  if (newValue_cha < 8) {
    valueCharismaDiv.textContent = "8";
  } else if (newValue_cha > 15) {
    valueCharismaDiv.textContent = "15";
  }

  const updatedValue_cha = parseInt(valueCharismaDiv.textContent);

  // Aggiorna il costo
  costCharismaDiv.textContent = "Cost: " + costMap_cha[updatedValue_cha];
  // console.log("Valore aggiornato:", updatedValue_cha); // for debugging
  // console.log("Costo aggiornato:", costMap_cha[updatedValue_cha]); // for debugging
}

// Funzione per incrementare il valore
function increaseValue() {
  const valueCharismaDiv = document.querySelector(".value_charisma");
  let newValue_cha = parseInt(valueCharismaDiv.textContent);
  newValue_cha++;
  valueCharismaDiv.textContent = newValue_cha;
  updateValueAndCost_cha();
  updateRemainingPoints(); // Aggiorna i punti rimanenti
}

// Funzione per decrementare il valore
function decreaseValue() {
  const valueCharismaDiv = document.querySelector(".value_charisma");
  let newValue_cha = parseInt(valueCharismaDiv.textContent);
  newValue_cha--;
  valueCharismaDiv.textContent = newValue_cha;
  updateValueAndCost_cha();
  updateRemainingPoints(); // Aggiorna i punti rimanenti
}

// Aggiungi event listener ai pulsanti "+" e "-"
document.querySelector(".more_charisma").addEventListener("click", increaseValue);
document.querySelector(".less_charisma").addEventListener("click", decreaseValue);

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
  document.querySelector(".value_charisma").textContent = somma;
  updateValueAndCost_cha();
  updateRemainingPoints(); // Aggiorna i punti rimanenti
}

// Aggiungi event listener al pulsante "Roll the dice!"
document.querySelector(".roll_charisma").addEventListener("click", rollDice);

// Chiamata iniziale per impostare il costo iniziale
updateValueAndCost_cha();