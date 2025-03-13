// Destructuring is a feature that allows you to extract values from arrays or objects and assign them to variables

// Object Destructuring
// Object destructuring is a feature in JavaScript that allows you to extract properties from objects and assign them to variables in a concise way.
const person = {
    name: "Bilal",
    age: 25,
    city: "Karachi"
};

// Destructuring assignment
const { name, age } = person;

console.log(name); // "Bilal"
console.log(age);  // 25


// Array Destructuring
// Array destructuring is a feature in JavaScript that allows you to extract elements from arrays and assign them to variables in a concise way.

const numbers = [10, 20, 30];

// Destructuring assignment
const [first, second, third] = numbers;

console.log(first);  // 10
console.log(second); // 20
console.log(third);  // 30
