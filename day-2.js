// Arthimetic Operations
let a = 90;
let b = 3;

let add = a + b;
let subtract = a - b;
let multiply = a * b;
let divide = a / b;
let remainder = a % b;
console.log(add, subtract, multiply, divide, remainder);

// Assigenment Operator

let c = 8;
let d = 10;
let assig1 = (c += d);
let assig2 = (d -= c);

console.log(assig1, assig2);

// Compersion Operator

let f = 7;
let e = 2;
let comp1 = f > e; //true
let comp2 = f < e; //false
let comp3 = f <= e; //false
let comp4 = f >= e; // true
console.log(comp1, comp2, comp3, comp4);

// Logical Operator

let and = comp1 < comp2 && comp1 > comp2;
let or = comp1 < comp2 || comp1 > comp2;
let not = comp1 < comp2 != comp1 > comp2;
console.log(and, or, not);

// ternary operator

let number = -3;
const check =
  number > 0
    ? console.log("Your Number is Positive")
    : console.log("Your Number is negative");
