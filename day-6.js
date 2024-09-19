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
