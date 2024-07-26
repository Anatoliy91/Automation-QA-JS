function getTopSalary(people: Record<string, number>): string | null {
    // Отримуємо масив імен (ключів) та зарплат (значень)
    const names = Object.keys(people);
    const salaries = Object.values(people);

    // Перевірка на порожній об'єкт
    if (names.length === 0) {
        return null;
    }

    // Знаходимо індекс найбільшої зарплати
    const maxSalary = Math.max(...salaries);
    const maxSalaryIndex = salaries.indexOf(maxSalary);

    // Повертаємо ім'я особи з найбільшою зарплатою
    return names[maxSalaryIndex];
}

// Приклад використання
let people1: Record<string, number> = { "Іван": 100, "Петро": 300, "Марія": 250 };

console.log(getTopSalary(people1)); // Петро
