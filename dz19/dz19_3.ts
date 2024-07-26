interface Person {
    name: string;
    city: string;
}

function groupByCity(users: Person[]): Record<string, string[]> {
    return users.reduce((acc, user) => {
        // Якщо місто вже існує в об'єкті, додаємо нове ім'я до масиву
        if (!acc[user.city]) {
            acc[user.city] = [];
        }
        acc[user.city].push(user.name);
        return acc;
    }, {} as Record<string, string[]>);
}

// Приклад використання
const people: Person[] = [
    { name: 'Oleksii', city: 'Kyiv' },
    { name: 'Simona', city: 'Lviv' },
    { name: 'Nastia', city: 'Kyiv' },
];

const groupedByCity = groupByCity(people);

console.log(groupedByCity);
// { Kyiv: [ 'Oleksii', 'Nastia' ], Lviv: [ 'Simona' ] }
