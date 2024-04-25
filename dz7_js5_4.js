function glueArrays(arr1, arr2) {
    const intersection = arr1.filter(value => arr2.includes(value));
    if (intersection.length > 0) {
        return null;
    }
    return [...arr1, ...arr2];
}