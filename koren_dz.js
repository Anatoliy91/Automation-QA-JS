const readline = require('readline-sync');

const a = parseFloat(readline.question('a: '));
const b = parseFloat(readline.question('b: '));
const c = parseFloat(readline.question('c: '));
const y = b * b - 4 * a * c;

if (isNaN(a)||isNaN(b)||isNaN(c)) {
    console.log('please enter number for coeficients a, b та c');
} else {
    const x1 = (-b + Math.sqrt(y)) / (2 * a);
    const x2 = (-b - Math.sqrt(y)) / (2 * a);
    console.log(`x1 = ${x1} та x2 = ${x2}`);
}




// 1, -3, 2