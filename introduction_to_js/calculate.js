const add = require('./add');
const multiply = require('./multiply');

const a = 2;
const b = 4;

const result = multiply(a, add(b, b));
console.log(result);