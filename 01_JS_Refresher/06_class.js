// class is a blueprint for creating objects
// class is a collection of related properties and methods


class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    // creating a method
    displayProduct() {
        console.log(`Product name is ${this.name} and price is ${this.price}`);
    }

    calculateTax(tax) {
        return this.price * tax;
    }
}

// creating a new object
const Product1 = new Product('Laptop', 1000);
const Product2 = new Product('Mobile', 500);
Product1.displayProduct();
Product2.displayProduct();

console.log(Product1.calculateTax(0.1));
console.log(Product2.calculateTax(0.1));