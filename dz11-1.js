/*№1. Створити обʼєкти animal, dog, bulldog. Обʼєкт bulldog має мати прототип dog. Обʼєкт dog 
має мати прототип animal. Кожен обʼєкт має містити унікальні властивості (мінімум 1) і методи (мінімум 1). 
Продемонструвати виклики всіх методів на обʼєкті bulldog. 
*/


// создание обьекта animal
const animal = {
    species: 'Animal',
    makeSound: function() {
        console.log('Generic animal sound');
    }
};

// создание обьекта dog с прототипом animal
const dog = Object.create(animal);
dog.breed = 'Generic Dog';
dog.bark = function() {
    console.log('Woof woof');
};

// создание обьекта bulldog с прототипом dog
const bulldog = Object.create(dog);
bulldog.name = 'Bulldog';
bulldog.snore = function() {
    console.log('Bulldog snoring');
};

bulldog.makeSound();
bulldog.bark(); 
bulldog.snore();


console.log(bulldog.species);
console.log(bulldog.breed);
console.log(bulldog.name);
