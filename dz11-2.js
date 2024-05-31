/*№2. Створити функцію-конструктор Train(dog). Функція приймає обʼєкт собаки який включає 
властивості name, character (характер собаки). Функція повертає обʼєкт собаки зі зміненим характером,
 а також вивченими командами (доданими методами). Дана функція має повертати саме змінений вхідний обʼєкт, не новий. */


function Train(dog) {
    dog.character = 'trained';

    dog.sit = function() {
        console.log(`${this.name} is sitting.`);
    };

    dog.stay = function() {
        console.log(`${this.name} is staying.`);
    };

    dog.fetch = function() {
        console.log(`${this.name} is fetching.`);
    };
    return dog;
}


let myDog = {
    name: 'Rex',
    character: 'playful'
};

console.log('Before training:', myDog);

Train(myDog);

console.log('After training:', myDog);

myDog.sit();
myDog.stay();
myDog.fetch();
