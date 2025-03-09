// constructor is a special function that is called when an object is created
// constructor is used to construct objects automatically

function Car(make, model, year, color) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
}

const car1 = new Car('Toyota', 'Camry', 2022, 'Red');
const car2 = new Car('Honda', 'Civic', 2021, 'White');

console.log(car1);
console.log(car2);

console.log(car1.make);
console.log(car1.model);
console.log(car1.year);
console.log(car1.color);