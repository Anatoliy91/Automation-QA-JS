function sortByAge(users) {
    return users.sort(function (a, b) { return a.age - b.age; });
}
// Приклад використання
var ivan = { name: "Іван", age: 25 };
var petro = { name: "Петро", age: 30 };
var mariya = { name: "Марія", age: 28 };
var arr = [petro, ivan, mariya];
var sortedArr = sortByAge(arr);
console.log(sortedArr);
// [{ name: "Іван", age: 25 }, { name: "Марія", age: 28 }, { name: "Петро", age: 30 }]
