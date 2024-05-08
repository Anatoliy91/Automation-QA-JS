function getLastElements(matrix) {
    return matrix.map(subarray => subarray[subarray.length - 1]);
}



function shuffleArray(arr) {
    return arr.sort(() => Math.random() - 0.5);
}

function reverseString(str) {
    return str.split('').reduce((reversed, char) => char + reversed, '');
}
