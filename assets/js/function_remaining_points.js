// Funzione per determinare i punti rimanenti

function showTotalCost() {
    const costElements = document.querySelector('.cost_str');
    updateValueAndCost_str();
    const cost_str = parseInt(costElements.textContent.split(":")[1].trim());
  
    const costElements_dex = document.querySelector('.cost_dex');
    updateValueAndCost_dex();
    const cost_dex = parseInt(costElements_dex.textContent.split(":")[1].trim());
  
    const costElements_con = document.querySelector('.cost_con');
    updateValueAndCost_con();
    const cost_con = parseInt(costElements_con.textContent.split(":")[1].trim());
  
    const costElements_int = document.querySelector('.cost_int');
    updateValueAndCost_int();
    const cost_int = parseInt(costElements_int.textContent.split(":")[1].trim());
  
    const costElements_wis = document.querySelector('.cost_wis');
    updateValueAndCost_wis();
    const cost_wis = parseInt(costElements_wis.textContent.split(":")[1].trim());
  
    const costElements_cha = document.querySelector('.cost_cha');
    updateValueAndCost_cha();
    const cost_cha = parseInt(costElements_cha.textContent.split(":")[1].trim());
  
    let totalCost = cost_str + cost_dex + cost_con + cost_int + cost_wis + cost_cha;
    let SubtractionResult = 27 - totalCost;

    // alert(`Total cost: ${totalCost}`); // for debugging
    // alert(`Final Result: ${SubtractionResult}`); // for debugging

    return SubtractionResult;
  }
  
  const numberRemainingPointsElement = document.querySelector(".number_remaining_points");
  let remainingPoints = 17;
  remainingPoints = showTotalCost();
  numberRemainingPointsElement.innerHTML = remainingPoints;

  function updateRemainingPoints() {
    const numberRemainingPointsElement = document.querySelector(".number_remaining_points");
    let remainingPoints = showTotalCost();
    numberRemainingPointsElement.innerHTML = remainingPoints;
}