// static keyword is a keyword that defines properties and methods that are shared by all instances of a class
// they belong to the class itself rather than the instances of the class
// static keyword is used to define properties and methods that are shared by all instances of a class


class MathUtil {
    static PI = 3.145;
    static getDiameter(radius) {
        return 2 * radius;
    }
}

// static properties are shared by all instances of a class
console.log(MathUtil.PI);
console.log(MathUtil.getDiameter(10));

class User {
    static usercount = 0;

    constructor(name) {
        this.name = name;
        User.usercount++;
    }
}

const user1 = new User('Max');
console.log(User.usercount);

const user2 = new User('Spongebob');
console.log(User.usercount);

const user3 = new User('Patrick');
console.log(User.usercount);
