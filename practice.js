// Define the fruit type you want to check
var currentFruit = " Orange "; // Change this to test different fruits

// Use the currentFruit variable in the switch statement
switch (
  currentFruit.trim() // Trim spaces for accurate matching
) {
  case "Orange":
    console.log("Oranges are $0.59 a pound.");
    break;
  case "Apples":
    console.log("Apples are $0.32 a pound.");
    break;
  case "Bananas":
    console.log("Bananas are $0.48 a pound.");
    break;
  case "Cherries":
    console.log("Cherries are $3.00 a pound.");
    break;
  case "Mangos":
    console.log("Mangoes are $0.56 a pound.");
    break;
  case "Papaya":
    console.log("Papayas are $2.79 a pound.");
    break;
  default:
    console.log(`Sorry, we are out of ${currentFruit}.`);
}

console.log("Is there anything else you'd like?");
