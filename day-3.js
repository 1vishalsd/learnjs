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
