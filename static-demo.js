class Person {
    constructor(first, last) {
        this.first = first;
        this.last = last;
        Person.count++;
    }

    static greet() {
        console.log('Hello!');
    }

    static count = 0;
}

Person.greet();  // Hello!

const arnold = new Person('arnold', 's');
const leo = new Person('l', 'l');

arnold.count++;  // error

console.log(Person.count);