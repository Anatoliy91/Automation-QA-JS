function extend(arr) {
    return arr.reduce((acc, item) => {
      if (item && typeof item === 'object') {
        for (let key in item) {
          if (!acc.hasOwnProperty(key)) {
            acc[key] = item[key];
          }
        }
      }
      return acc;
    }, {});
  }
  
  console.log(extend([{ a: 1, b: 2 }, { c: 3 }])); 
  // { a: 1, b: 2, c: 3 }
  console.log(extend([{ a: 1, b: 2 }, { c: 3 }, { d: 4 }])); 
  // { a: 1, b: 2, c: 3, d: 4 }
  console.log(extend([{ a: 1, b: 2 }, null, { a: 3, c: 3 }])); 
  // { a: 1, b: 2, c: 3 }
  