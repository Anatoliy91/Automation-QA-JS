//Напишіть функцію sortByAge(users), яка приймає масив обʼєктів з властивістю age і сортує їх по ньому.

let ivan = { name: "Іван", age: 25 };
let petro = { name: "Петро", age: 30 };
let mariya = { name: "Марія", age: 28 };

let arr = [ petro, ivan, mariya ];

sortByAge(arr); 
// [{ name: "Іван", age: 25 }, { name: "Марія", age: 28 }, { name: "Петро", age: 30 }]



function sortByAge(users) {
    users.sort((a, b) => a.age - b.age);
}