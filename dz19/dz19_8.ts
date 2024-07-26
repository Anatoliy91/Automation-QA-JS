function combine(...objs: Record<string, number>[]): Record<string, number> {
    const result: Record<string, number> = {};

    for (const obj of objs) {
        for (const key in obj) {
            if (obj.hasOwnProperty(key)) {
                if (result.hasOwnProperty(key)) {
                    result[key] += obj[key];
                } else {
                    result[key] = obj[key];
                }
            }
        }
    }

    return result;
}

// Example usage
const objA = { a: 10, b: 20, c: 30 };
const objB = { a: 3, c: 6, d: 3 };

console.log(combine(objA, objB));
// Output: { a: 13, b: 20, c: 36, d: 3 }
