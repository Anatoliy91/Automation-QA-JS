function doublePrices(obj: Record<string, number>): Record<string, number> {
    const result: Record<string, number> = {};
    for (const key of Object.keys(obj)) {
        result[key] = obj[key] * 2;
    }
    return result;
}

// Приклад використання
let obj = { banana: 1, orange: 2, meat: 4 };
let result = doublePrices(obj);

console.log(result.orange); // 4
