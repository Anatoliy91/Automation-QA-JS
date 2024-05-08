function hasConsecutiveDifference(arr) {
    return arr.some(element => arr.includes(element + 1));
}

