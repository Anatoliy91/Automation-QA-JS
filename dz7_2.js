/*Створити функцію calculate яка має 4 параметри: 2 операнди, операцію і звіт. Якщо звіт не заданий - 
функція має повернути значення, інакше повернути звіт. Приклади виклику:
*/

/*calculate(2, 5, (a, b) => a + b, r => console.log(`Result: ${r}`));
функція поверне undefined

calculate(3, 6, (a, b) => a / b, r => r.toString());
функція поверне '0.5' */


function calculate(a, b, operation, report) {
    const result = operation(a, b);
    if (report) {
        return report(result);
    } else {
        return result;
    }
}