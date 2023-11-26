// add "plus" button
let plus_btn_con = document.createElement("button");
let plus_con = document.querySelector(".constitution"); 
plus_con.appendChild(plus_btn_con);
plus_btn_con.classList.add("more")
plus_btn_con.classList.add("more_constitution")

let plus_text_con = document.createTextNode(" + ");
plus_btn_con.appendChild(plus_text_con)

// add "minus" button
let less_btn_con = document.createElement("button");
let less_con = document.querySelector(".constitution"); 
less_con.appendChild(less_btn_con);
less_btn_con.classList.add("less")
less_btn_con.classList.add("less_constitution")

let less_text_con = document.createTextNode(" - ");
less_btn_con.appendChild(less_text_con)

// add value field
let value_field_con = document.createElement("div");
let value_con = document.querySelector(".constitution"); 
value_con.appendChild(value_field_con);
value_field_con.classList.add("value")
value_field_con.classList.add("value_constitution")

let value_text_con = document.createTextNode(" 10 ");
value_field_con.appendChild(value_text_con)

// Funzionalità Javascript della pagina

let count_con = 10; // Inizializza il valore di count

// Definisci un oggetto che associa il costo ai valori validi
const costMap_con = {
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
function updateValueAndCost_con() {
  const valueConstitutionDiv = document.querySelector(".value_constitution");
  const costConstitutionDiv = document.querySelector(".cost_con");

  // Incrementa o decrementa il valore
  const newValue_con = parseInt(valueConstitutionDiv.textContent);

  // Assicurati che il valore rimanga nell'intervallo valido
  if (newValue_con < 8) {
    valueConstitutionDiv.textContent = "8";
  } else if (newValue_con > 15) {
    valueConstitutionDiv.textContent = "15";
  }

  const updatedValue_con = parseInt(valueConstitutionDiv.textContent);

  // Aggiorna il costo
  costConstitutionDiv.textContent = "Cost: " + costMap_con[updatedValue_con];
  // console.log("Valore aggiornato:", updatedValue_con); // for debugging
  // console.log("Costo aggiornato:", costMap_con[updatedValue_con]); // for debugging
}

// Funzione per incrementare il valore
function increaseValue() {
  const valueConstitutionDiv = document.querySelector(".value_constitution");
  let newValue_con = parseInt(valueConstitutionDiv.textContent);
  newValue_con++;
  valueConstitutionDiv.textContent = newValue_con;
  updateValueAndCost_con();
  updateRemainingPoints();

}

// Funzione per decrementare il valore
function decreaseValue() {
  const valueConstitutionDiv = document.querySelector(".value_constitution");
  let newValue_con = parseInt(valueConstitutionDiv.textContent);
  newValue_con--;
  valueConstitutionDiv.textContent = newValue_con;
  updateValueAndCost_con();
  updateRemainingPoints(); // Aggiorna i punti rimanenti
}

// Aggiungi event listener ai pulsanti "+" e "-"
document.querySelector(".more_constitution").addEventListener("click", increaseValue);
document.querySelector(".less_constitution").addEventListener("click", decreaseValue);

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

  // Aggiorna solo il campo value_constitution
  document.querySelector(".value_constitution").textContent = somma;
  updateValueAndCost_con();
  updateRemainingPoints(); 
}

// Aggiungi event listener al pulsante "Roll the dice!"
document.querySelector(".roll_constitution").addEventListener("click", rollDice);

// Chiamata iniziale per impostare il costo iniziale
updateValueAndCost_con();