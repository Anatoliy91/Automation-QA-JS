function groupByCity(users) {
    return users.reduce((acc, user) => {
      if (!acc[user.city]) {
        acc[user.city] = [];
      }
      acc[user.city].push(user.name);
      return acc;
    }, {});
  }
  
  const people = [
    { name: 'Oleksii', city: 'Kyiv' },
    { name: 'Simona', city: 'Lviv' },
    { name: 'Nastia', city: 'Kyiv' },
  ];
  
  console.log(groupByCity(people));
  // { Kyiv: [ 'Oleksii', 'Nastia' ], Lviv: [ 'Simona' ] }
  