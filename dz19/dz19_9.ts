function extend(arr: (Record<string, any> | null)[]): Record<string, any> {
    const result: Record<string, any> = {};

    for (const item of arr) {
        if (item && typeof item === 'object') {
            for (const key in item) {
                // Додаємо властивість до результату, якщо вона ще не існує
                if (!result.hasOwnProperty(key)) {
                    result[key] = item[key];
                }
            }
        }
    }

    return result;
}

// Приклади використання
console.log(extend([{ a: 1, b: 2 }, { c: 3 }])); // { a: 1, b: 2, c: 3 }
console.log(extend([{ a: 1, b: 2 }, { c: 3 }, { d: 4 }])); // { a: 1, b: 2, c: 3, d: 4 }
console.log(extend([{ a: 1, b: 2 }, null, { a: 3, c: 3 }])); // { a: 1, b: 2, c: 3 }
