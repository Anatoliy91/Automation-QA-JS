function removeDuplicates(arr) {
    return arr.filter((element, index) => arr.indexOf(element) === index);
}
const arr = [1, 2, 3, 4, 2, 3, 5];
console.log(removeDuplicates(arr));