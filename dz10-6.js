function countDuplicates(arr) {
    return arr.reduce((acc, item) => {
      if (acc[item]) {
        acc[item]++;
      } else {
        acc[item] = 1;
      }
      return acc;
    }, {});
  }
  
  let arr = [2, 2, 2, 2, 3, 3, 7, 4, 4];
  
  console.log(countDuplicates(arr));
