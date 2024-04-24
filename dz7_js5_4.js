let mergedArray = arr1.concat(arr2);
    
// Проверяем наличие дубликатов в объединенном массиве
let set = new Set(mergedArray);
if (set.size !== mergedArray.length) {
    return null;
}

// Если дубликатов нет, возвращаем объединенный массив
return mergedArray;