let name = 'Max';
let age = 27;
const hasHobbies = true;

age = 28;

console.log(name, age, hasHobbies);

function user(name, age, hasHobbies) {  
    return `Name is ${name} and age is ${age} and has hobbies ${hasHobbies}`
}

var output = user(name, age, hasHobbies);
console.log(output);