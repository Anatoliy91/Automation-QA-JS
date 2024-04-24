//Створити функцію sum яка отримує масив чисел і повертає суму елементів масиву. Наприклад sum([1, 1, 4, 3]) має повернути 9.

function sum(arr){
    let sum =0;
    for (element of arr) {
        sum += element
    }
    return sum;
}