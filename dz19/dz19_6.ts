function countDuplicates(arr: number[]): Record<number, number> {
    // Об'єкт для зберігання кількостей
    const counts: Record<number, number> = {};
    
    // Ітеруємо через масив
    for (const num of arr) {
        // Якщо число вже є в об'єкті, збільшуємо лічильник
        if (counts[num]) {
            counts[num]++;
        } else {
            // Інакше, ініціалізуємо лічильник
            counts[num] = 1;
        }
    }
    
    return counts;
}

// Приклад використання
let arr1 = [2, 2, 2, 2, 3, 3, 7, 4, 4];

console.log(countDuplicates(arr1));
// { '2': 4, '3': 2, '4': 2, '7': 1 }
