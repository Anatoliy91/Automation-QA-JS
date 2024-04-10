const readline = require('readline-sync');

const a = readline.prompt('a');
const b = readline.prompt('b');
const c = readline.prompt('c');
const y = b * b - 4 * a * c;

const x1 = (-b + Math.sqrt(y)) / (2 * a);
const x2 = (-b - Math.sqrt(y)) / (2 * a);
readline.keyInPause(`x1= ${x1} and x2= ${x2}`);






// 1, -3, 2