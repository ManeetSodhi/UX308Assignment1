let currentState = welcoming;

export function handleInput(sInput) {
  return currentState(sInput);
}

export function clearInput(){
  currentState = welcoming;  
}

function welcoming() {
  let aReturn = [];
  currentState = ordering;
  aReturn.push("Welcome to Maneet Hortons.");
  aReturn.push("Would you like to place an order? (please answer yes/no only)");
  return aReturn;
}

function ordering(sInput) {
  let aReturn = [];
  currentState = modifying
  if (sInput.toLowerCase().startsWith('yes')) {
    aReturn.push(`Great!`);
    //let d = new Date();
    //d.setMinutes(d.getMinutes() + 120);
    aReturn.push(`Would you like an iced or hot coffee?`);
  } else {
    currentState = welcoming
    aReturn.push("Thanks for trying our ordering system");
    aReturn.push("See you next time");
  }
  return aReturn;
}

let modification = "";

function modifying(sInput) {
  let aReturn = [];
  currentState = confirming
  if (sInput.toLowerCase().startsWith('ice')) {
    modification = "Iced";
    aReturn.push(`What size would you like? (S/M/L)`);
  } else if (sInput.toLowerCase().startsWith('hot')) {
    modification = "Hot";
    aReturn.push(`What size would you like? (S/M/L)`);
  } else {
    currentState = ordering;
    aReturn.push("Please try again");
  }
  return aReturn;
}


function confirming(sInput) {
  let aReturn = [];
  currentState = welcoming
  if (sInput.toLowerCase().startsWith('s')) {
    aReturn.push(`You ordered a Small ${modification} Coffee`);
    aReturn.push(`Please order again!`);
  } else if (sInput.toLowerCase().startsWith('m')) {
    aReturn.push(`You ordered a Medium ${modification} Coffee`);
    aReturn.push(`Please order again!`);
  } else if (sInput.toLowerCase().startsWith('l')) {
    aReturn.push(`You ordered a Large ${modification} Coffee`);
    aReturn.push(`Please order again!`);
  } else {
    currentState = modifying;
    aReturn.push("Please try again");
  }
  return aReturn;
}
