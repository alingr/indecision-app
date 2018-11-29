//import './utils.js';
import subtract, { square, add } from './utils.js';
import isSenior, { isAdult, canDrink } from './person.js';

console.log("app.js is running!");
console.log(square(4));
console.log(add(100, 23));
console.log(subtract(100, 80));

console.log(isAdult(20));
console.log(canDrink(20));
console.log(isSenior(70));

import validator from 'validator';
console.log(validator.isEmail('test@gmail.com'));