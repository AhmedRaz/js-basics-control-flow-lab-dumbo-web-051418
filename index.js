// Write your code in this file!
function scuberGreetingForFeet(someValue) {
  let greeting = "";
  if (someValue > 2500) {
    greeting = "No can do.";
  }
  else if (someValue > 2000) {
    greeting = "I will gladly take your thirty bucks.";
  }
  else if (someValue <= 400){
    greeting = "This one is on me!";
  }

  return greeting;
}

function ternaryCheckCity(city) {
  let status = (city === "NYC")? "Ok, sounds good." : "No go.";
  return status;
}

function switchOnCharmFromTip(tip) {
  let response;

  switch(tip) {
    case "generous":
      response = "Thank you so much.";
      break;
    case "not as generous":
      response = "Thank you.";
      break;
    default:
      response = "Bye.";
      break;

  }
  return response;
}
