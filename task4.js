/*Напишіть цикл, який пропонує prompt ввести число більше за 100. Якщо відвідувач введе інше 
число – попросити ввести ще раз, і так далі. Цикл повинен запитувати число доти, доки відвідувач 
не введе число, більше за 100, або не скасує ввід. Ми припускаємо, що відвідувач може вводити не 
тільки числа. В цьому завданні обов’язково реалізовувати оброблення нечислового введення і пустого 
рядка. Завдання необхідно виконати у браузері, playground HTML/CSS/JS Starter. 
*/

do {
  let userInput = prompt('enter digit more than 100');
  if (userInput === null) {
    alert('You are cancell entering');
    break
  }
let number = Number(userInput)
if (number = !NaN && number>100){
  console.log('You are enter digit more than 100:' + " " + userInput);
}
else {
  console.log('You are entered wrong digit');
}
} while (number = !NaN && number>100);