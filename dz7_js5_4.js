function glueArrays(arr1, arr2) {
    const mergedArray = Array.from(new Set([...arr1, ...arr2]));
    if (mergedArray.length === arr1.length + arr2.length) {
        return mergedArray;
    } else {
        return null;
    }
}