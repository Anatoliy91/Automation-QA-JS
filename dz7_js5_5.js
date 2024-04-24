function reverseString(str) {
    let reversed = ''; // Создаем переменную для хранения обратной строки
    // Проходим по строке справа налево
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i]; // Добавляем каждый символ в начало обратной строки
    }
    return reversed;
}