//Створити функцію partialReverse яка отримує масив і повертає масив у якому всі елементи крім 
//першого і останнього мають зворотній порядок.



function partialReverse(arr) {
    if (arr.length < 2) {
        return arr;
    }
    for (let i = 1; i < arr.length - 1; i++) {
        arr[i] = arr[i].toString().split('').reverse().join('');
    }

    return arr;
}