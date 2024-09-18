// Task 1
function isEvenOrOdd(num) {
  const checkEven =
    num % 2 == 0 ? console.log(`${num} is Even`) : console.log(`${num} is odd`);
}
isEvenOrOdd(60);

function calSquare(t) {
  ans = t * t;
  console.log(`${t} X ${t} = ${ans}`);
}
calSquare(5);

// Task 2
const maxNum = (num1, num2) => {
  const checkMax =
    num1 > num2
      ? console.log(`${num1} is bigger then ${num2}`)
      : console.log(`${num2} is bigger then ${num1}  `);
};
maxNum(34, 45);

const conTwoString = (str1, str2) => {
  console.log(`${str1}` + " " + `${str2}`);
};
conTwoString("hello", "world");

// Task 3

const addTwoNum = (fisrt, second) => {
  var add = fisrt + second;
  console.log(add);
};
addTwoNum(34, 56);

const specChar = (str, char) => {
  return str.includes(char);
};
console.log(specChar("Hello World", "H"));

// Task 4

const mulTwoNum = (a, b = 1) => {
  return a * b;
};
console.log(mulTwoNum(4, 8));
console.log(mulTwoNum(5));

const greeting = (name, age) => {
  return ` Mr. ${name}  i thing you are ${age} old `;
};
console.log(greeting("vishal", 21));

//  Task 5

const sayHello = () => {
  return " Hello";
};
const greet = (helloMassage, name) => {
  return console.log(helloMassage() + " " + name);
};
greet(sayHello, "Vishal");
