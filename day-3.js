// Task 1
const num = 7;

if (num > 0) {
  console.log(" Your Number is postive");
} else if (num == 0) {
  console.log(" Your Number is equal of zero");
} else {
  console.log(" Your number is negative ");
}

const age = 20;
const check =
  age >= 18
    ? console.log(" You are eligible for giving the vote")
    : console.log(" You are not eligible to giving the vote");

// Task 2

var num1 = 45;

var num2 = 93;

var num3 = 100;

if (num1 >= num2) {
  if (num1 >= num3) {
    console.log(`${num1} is lagest number`);
  } else {
    console.log(`${num3} is largest number`);
  }
} else {
  if (num2 >= num3) {
    console.log(`${num2} is largest number`);
  } else {
    console.log(`${num3} is largest number`);
  }
}
//  Task 3
function getDayOfWeek(dayNumber) {
  switch (dayNumber) {
    case 1:
      console.log("Sunday");
      break;
      case2: console.log("Monday");
      break;
    case 3:
      console.log("Tuesday");
      break;
    case 4:
      console.log("Wednesday");
      break;
    case 5:
      console.log("Thursday");
      break;
    case 6:
      console.log("Friday");
      break;
    case 7:
      console.log("Saturday");
      break;
    default:
      console.log("Invalid input. Please enter a number between 1 and 7.");
  }
}
getDayOfWeek(6);

function gradeScore(score) {
  switch (true) {
    case score >= 85:
      console.log(` You got the Grade A , You scored ${score} number`);
      break;
    case score >= 75:
      console.log(`You got the Grade B , You scored ${score} number`);
      break;
    case score >= 65:
      console.log(`You got the Grade C , You scored ${score} number`);
      break;
    case score >= 55:
      console.log(`You got the Grade D , You scored ${score} number`);
      break;
    case score >= 45:
      console.log(`You got the Grade E , You scored ${score} number`);
      break;
    default:
      if (score < 45 && score >= 0) {
        console.log(` You Got grade F , You scored ${score} number`);
      } else {
        console.log("Invalide score");
      }
  }
}
gradeScore(50);

// Task 3

var number = 90;
var remainder = number % 2;
const checkEvenOdd =
  remainder == 0
    ? console.log("Number is Even")
    : console.log(" Number is Odd");

// Task 4
