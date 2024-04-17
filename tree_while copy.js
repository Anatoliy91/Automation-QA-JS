/*
Напиши програму яка виводить всі парні числа від 1 до 10

Напиши програму яка виведе перше парне число з массиву [1, 3, 5, 8, 9, 10]

І нарешті програму яка поверне суму всіх чисел у массиві [1, 3, 5, 8, 9, 10] поділену на 3
*/


number = 10
for (i=1; i<number; i++) {
  if (i%2==0) {
      console.log('number is pair ' + number)
    }
}

//Напиши програму яка виведе перше парне число яке ділиться на 4  (1 до 10)


for (let i=1; i<10; i++) {
  if (i%4==0) {
    console.log(i)
    break
  }
}


//І нарешті програму яка поверне суму всіх чисел у массиві від 10 до 20 помножену на 2


let result=0;
for (let i=10; i<=20; i++) {
  let newelement = i * 2; //20, 22 ....
  result += newelement;
}
console.log(result);




let result2=0;
for (let i=10; i<=20; i++) {
  result2 += i;
}
result2 = result2 *2
console.log(result2)
