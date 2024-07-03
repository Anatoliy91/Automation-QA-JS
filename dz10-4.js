function doublePrices(obj) {
    let result = {};
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        result[key] = obj[key] * 2;
      }
    }
    return result;
  }
  
  let obj = { banana: 1, orange: 2, meat: 4 };
  let result = doublePrices(obj);
  
  console.log(result.orange); // 4
  