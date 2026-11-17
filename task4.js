
let number = 47;

let leftDigit = (number - number % 10) / 10;
let rightDigit = number % 10;

console.log(leftDigit);
console.log(rightDigit);

