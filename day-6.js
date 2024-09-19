// Activites 1
// task 1
var arr = [1, 2, 3, 4, 5];
console.log(arr);
//task 2
console.log(`Task 2 => ${arr[0]} , ${arr[4]}`);

// Activities 2
// Task 3: Use the push method to add a new number to the end of the array and log the updated array.

arr.push(6);
console.log(arr);

// Task 4: Use the pop method to remove the last element from the array and log the updated array.

arr.pop();
console.log(arr);

// Task 5: Use the shift method to remove the first element from the array and log the updated array.
arr.shift();
console.log(arr);

// Task 6: Use the unshift method to add a new number to the beginning of the array and log the updated array.
arr.unshift(1, 6);
console.log(arr);

// Activity 3: Array Methods (Intermediate)

// Task 7: Use the map method to create a new array where each number is doubled and log the new array.

const mapArr = arr.map((x) => x * 2);
console.log(mapArr);

// Task 8: Use the filter method to create a new array with only even numbers and log the new array.

const filterArr = arr.filter((x) => x > 5);
console.log(filterArr);

// Task 9: Use the reduce method to calculate the sum of all numbers in the array and log the result.
const intialValue = 0;
const reduceArr = arr.reduce((x, y) => x + y, intialValue);
console.log(reduceArr);

// Activity 4: Array Iteration
//Task 10: Use a for loop to iterate over the array and log each element to the console.

let array = [1, 2, 3, 4, 5];

for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}

// Task 11: Use the forEach method to iterate over the array and log each element to the console.

array.forEach((element) => console.log(element));

// Activity 5: Multi-dimensional Arrays
// Task 12: Create a two-dimensional array (matrix) and log the entire array to the console.

let arr2 = [
  ["Banana", "Papaya", "Gauva"],
  ["Charries", "Apple"],
];
console.log(arr2);

// Task 13: Access and log a specific element from the two-dimensional array.

console.log(arr2[0][1]);
