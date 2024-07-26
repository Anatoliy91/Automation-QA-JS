function numbersToObjects(numbers: number[]): Record<string, string>[] {
    return numbers.map(num => {
        if (num >= 97 && num <= 122) {
            return { [num.toString()]: String.fromCharCode(num) };
        }
        return { [num.toString()]: '' };
    });
}

// Example usage:
const inputArray = [97, 98, 99, 100];
console.log(numbersToObjects(inputArray));
// Output: [ { '97': 'a' }, { '98': 'b' }, { '99': 'c' }, { '100': 'd' } ]
