// Stack (Primitive),

let myCars = " buggati";
let anotherCar = myCars;
anotherCar = " BMW";

console.log(anotherCar);
console.log(myCars);

// Heap(Non Primitive)

let userOne = {
  name: " Raju",
  age: 56,
};
let userTwo = userOne;
userTwo.age = 78;

console.log(userOne.age);
console.log(userTwo.age);
