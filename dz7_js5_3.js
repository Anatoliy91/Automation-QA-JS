function partialReverse(arr) {
    if (arr.length < 3) {
        return arr;
    }
    for (let i = 1; i < arr.length - 1; i++) {
        arr[i] = reverseElement(arr[i]);
    }

    return arr;
}
function reverseElement(element) {
    if (typeof element === 'string') {
        return element.split('').reverse().join('');
    }
    return element;
}