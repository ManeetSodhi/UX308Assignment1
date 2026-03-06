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
  currentState = toppings
  if (sInput.toLowerCase().startsWith('ice')) {
    modification = "iced";
    aReturn.push(`What size would you like? (S/M/L)`);
  } else if (sInput.toLowerCase().startsWith('hot')) {
    modification = "hot";
    aReturn.push(`What size would you like? (S/M/L)`);
  } else {
    currentState = ordering;
    aReturn.push("Please try again");
  }
  return aReturn;
}

let size = "";

function toppings(sInput) {
  let aReturn = [];
  currentState = upsell
  if (sInput.toLowerCase().startsWith('s')) {
    size = "small";
    aReturn.push(`Which toppings would you like to add?`);
    aReturn.push(`Select: Whipped Cream, Caramel or none`);
  } else if (sInput.toLowerCase().startsWith('m')) {
    size = "medium";
    aReturn.push(`Which toppings would you like to add?`);
    aReturn.push(`Select: Whipped Cream, Caramel or none`);
  } else if (sInput.toLowerCase().startsWith('l')) {
    size = "large";
    aReturn.push(`Which toppings would you like to add?`);
    aReturn.push(`Select: Whipped Cream, Caramel or none`);
  } else {
    currentState = modifying;
    aReturn.push("Please try again");
  }
  return aReturn;
}

let topping = "";

function upsell(sInput) {
  let aReturn = [];
  currentState = confirming
  if (sInput.toLowerCase().startsWith('whipped cream')) {
    topping = "whipped cream";
    aReturn.push(`You ordered a ${size} ${modification} coffee with ${topping}.`);
    aReturn.push(`Would you like to add a donut? (please answer yes/no only)`);
  } else if (sInput.toLowerCase().startsWith('caramel')) {
    topping = "caramel";
    aReturn.push(`You ordered a ${size} ${modification} coffee with ${topping}.`);
    aReturn.push(`Would you like to add a donut? (please answer yes/no only)`);
  } else if (sInput.toLowerCase().startsWith('no')) {
    topping = "no toppings";
    aReturn.push(`You ordered a ${size} ${modification} coffee with ${topping}.`);
    aReturn.push(`Would you like to add a donut? (please answer yes/no only)`);
  } else {
    currentState = toppings;
    aReturn.push("Please try again");
  }
  return aReturn;
}

function confirming(sInput) {
  let aReturn = [];
  currentState = welcoming
  if (sInput.toLowerCase().startsWith('ye')) {
    aReturn.push(`You ordered a ${size} ${modification} coffee with ${topping} and a donut.`);
    aReturn.push(`Please order again!`);
  } else {
    currentState = welcoming;
    aReturn.push(`You ordered a ${size} ${modification} coffee with ${topping}.`);
    aReturn.push(`Please order again!`);
  }
  return aReturn;
}
