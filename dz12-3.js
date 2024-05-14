class Animal {
    constructor(name) {
        this.name = name;
    }

    eat() {
        console.log(`${this.name} is eating.`);
    }
}
class Dog extends Animal {
    constructor(name, breed) {
        super(name);
        this.breed = breed;
    }

    bark() {
        console.log(`${this.name} is barking.`);
    }
}
class Bulldog extends Dog {
    constructor(name, breed, color) {
        super(name, breed);
        this.color = color;
    }

    snore() {
        console.log(`${this.name}, the ${this.color} bulldog, is snoring.`);
    }
}

const animal = new Animal('Generic Animal');
const dog = new Dog('Generic Dog', 'Mixed Breed');
const bulldog = new Bulldog('Bulldog', 'English Bulldog', 'white');