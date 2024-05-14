/* Напишіть функцію checkDogBreed(dogObject, Breed) яка приймає в якості параметрів об'єкт собаки і 
породу (клас). Функція вертає true якщо в нащадках собаки є представники породи. Окрім імплементації необхідно 
надати приклад використання.
*/

class Animal {
    constructor(name) {
        this.name = name;
    }
}
class Dog extends Animal {
    constructor(name, breed) {
        super(name);
        this.breed = breed;
    }
}
class Bulldog extends Dog {
    constructor(name, breed, color) {
        super(name, breed);
        this.color = color;
    }
}

function checkDogBreed(dogObject, Breed) {
    return dogObject instanceof Breed;
}

const genericAnimal = new Animal('Generic Animal');
const genericDog = new Dog('Generic Dog', 'Mixed Breed');
const bulldog = new Bulldog('Bulldog', 'English Bulldog', 'white');

// examples:
console.log(checkDogBreed(genericDog, Dog)); 
console.log(checkDogBreed(genericDog, Bulldog));
console.log(checkDogBreed(bulldog, Animal));
console.log(checkDogBreed(genericAnimal, Animal));
