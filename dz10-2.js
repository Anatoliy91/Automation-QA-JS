function groupById(arr) {
    return arr.reduce((acc, item) => {
      acc[item.id] = item;
      return acc;
    }, {});
  }
  
  let users = [
    {id: 'іван', name: "Іван Іванко", age: 20},
    {id: 'ганна', name: "Ганна Іванко", age: 24},
    {id: 'петро', name: "Петро Петренко", age: 31},
  ];
  
  let usersById = groupById(users);
  
  console.log(usersById);
  
  /*
  usersById = {
    іван: {id: 'іван', name: "Іван Іванко", age: 20},
    ганна: {id: 'ганна', name: "Ганна Іванко", age: 24},
    петро: {id: 'петро', name: "Петро Петренко", age: 31},
  }
  */
  