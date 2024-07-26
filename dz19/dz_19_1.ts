interface User {
    name: string;
    age: number;
}

function sortByAge(users: User[]): User[] {
    return users.sort((a, b) => a.age - b.age);
}

// Приклад використання
let ivan: User = { name: "Іван", age: 25 };
let petro: User = { name: "Петро", age: 30 };
let mariya: User = { name: "Марія", age: 28 };

let arr: User[] = [petro, ivan, mariya];

let sortedArr = sortByAge(arr);
console.log(sortedArr);
// [{ name: "Іван", age: 25 }, { name: "Марія", age: 28 }, { name: "Петро", age: 30 }]
