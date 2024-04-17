//Напишіть функцію pow(x, n), яка повертає число x, піднесене до степеня n. Функція повинна підтримувати лише 
//натуральні значення n.

function pow(x, n) {
    if (Number.isInteger(n) && n > 0) {
        return Math.pow(x, n);
    } else {
        console.log('n не є натуральним числом');
        return undefined;
    }
}