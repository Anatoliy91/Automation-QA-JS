interface User {
    id: string;
    name: string;
    age: number;
}

function groupById(arr: User[]): Record<string, User> {
    return arr.reduce((acc, user) => {
        acc[user.id] = user;
        return acc;
    }, {} as Record<string, User>);
}

// Приклад використання
let users: User[] = [
    { id: 'іван', name: "Іван Іванко", age: 20 },
    { id: 'ганна', name: "Ганна Іванко", age: 24 },
    { id: 'петро', name: "Петро Петренко", age: 31 },
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
