// normal functions

function sum(a, b) {
    return a + b;
}

function isPositive(num) {
    if (num > 0) {
        return true;
    } else {
        return false;
    }
}

function randomNumber() {
    return Math.random();
}


console.log(sum(1, 2));
console.log(isPositive(1));
console.log(randomNumber());

// Arrow functions

// remove function keyword + name and assign it to a variable

// syntax
// let variableName = (<params>) => {}

let sum2 = (a, b) => {
    return a + b
}


let isPositive2 = (num) => {
    if (num > 0) {
        return true;
    } else {
        return false;
    }
}

console.log(sum2(1, 2));
console.log(isPositive2(-1));