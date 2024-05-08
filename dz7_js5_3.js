function partialReverse(arr) {
    if (arr.length <= 2) {
        return arr;
    }

    const middle = arr.slice(1, -1);
    middle.reverse();

    return [arr[0], ...middle, arr[arr.length - 1]];
}