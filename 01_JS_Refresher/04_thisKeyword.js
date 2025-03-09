// "This" keyword refers to the object where "This" is called
// this keyword does not work in arrow functions

const person = {
    name: 'Max',
    age: 27,
    isEmployed: true,
    greet: function() {
        console.log('Hello, I am ' + this.name);
    }
}

console.log(person.greet());