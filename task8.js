
var x = 1;
var y = 2;

var res1 = String(x) + y;
console.log(res1); // "12"
console.log(typeof res1); // "string"

var res2 = (x > 0) + String(y);
console.log(res2); // "true2"
console.log(typeof res2); // "string"

var res3 = x < y;
console.log(res3); // true
console.log(typeof res3); // "boolean"

var res4 = x / (x - y);
console.log(res4); // -1
console.log(typeof res4); // "number"
