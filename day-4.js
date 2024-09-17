// task 1

for (let i = 1; i <= 10; i++) {
  console.log(i);
}

for (let j = 5; j <= 50; j += 5) {
  console.log(j);
}

// Task 2

let p = 0;
let x = 0;

while (p < 10) {
  p++;
  x += p;
  console.log(x);
}

var n = 11;
while (n > 1) {
  n--;
  console.log(n);
}

// Task 3

let result = "";
let i = 0;

do {
  i = i + 1;
  result = result + i;
} while (i < 5);

console.log(result);

let factorial = 1;
let w = 4;
do {
  factorial *= w;
  w--;
} while (w >= 1);

console.log(factorial);

// Task 4

let r = 5;

for (let row = 1; row <= r; row++) {
  let pattern = "";
  for (let col = 1; col <= row; row++) {
    pattern += "*";
  }
  console.log(pattern);
}
