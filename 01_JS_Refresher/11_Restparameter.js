// rest parameter is a special parameter that allows you to pass a variable number of arguments to a function

const sum = (a, b, ...rest) => {
    console.log(rest);
    return a + b + rest.reduce((acc, el) => acc + el);
}

console.log(sum(1, 2, 3, 4, 5));