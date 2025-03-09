// Object is a collection of related properties and methods
// Object can represent a real world object
// Name of an object must be unique
const person1 = {
    name: 'Max',
    age: 27,
    isEmployed: true,
};

console.log(person1);
console.log(person1.name);
console.log(person1.age);
console.log(person1.isEmployed);

// objects can have dedicated functions which are called methods
const person2 = {
    name: 'Spongebob',
    age: 30,
    isEmployed: false,
    greet() {
        console.log('Hello, I am Spongebob!');
    },
}

console.log(person2.greet());