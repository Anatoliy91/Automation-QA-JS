/* Створити клас User, конструктор якого в якості параметрів приймає ім'я та прізвище користувача. 
Клас має мати геттер/сеттер fullName який дозволяє в подальшому змінити у об'єкта user ім'я та прізвище. 
Можливість встановити ім'я та прізвище напряму має бути обмежена, скористайтеся приватними # властивостями.
*/

class User {
    #firstName;
    #lastName;

    constructor(firstName, lastName) {
        this.#firstName = firstName;
        this.#lastName = lastName;
    }

    get fullName() {
        return `${this.#firstName} ${this.#lastName}`;
    }

    set fullName(fullName) {
        const [firstName, lastName] = fullName.split(' ');
        if (firstName && lastName) {
            this.#firstName = firstName;
            this.#lastName = lastName;
        } else {
            throw new Error('Invalid full name');
        }
    }
}

const user = new User('John', 'Doe');
console.log(user.fullName);
user.fullName = 'Jane Smith';
console.log(user.fullName);