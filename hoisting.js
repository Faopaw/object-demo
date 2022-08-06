// const arnold = new Person('Arnold', 'S', 74);
// console.log(arnold.name);

// // arnold.breathe();

// const Person = function (first, last, age) {
//     this.name = {
//         first: first,
//         last:  last
//     };
//     this.age = age;
//     // this.breathe = function() {
//     //     console.log("*breathing noise*");
//     // }
// }

// const i = 0;

// Person.prototype.breathe = function() {
//     console.log("*breathing noise*");
// }

Person.greet();  // Hello!

const arnold = new Person('arnold', 's');
const leo = new Person('l', 'l');

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



arnold.count++;  // error

console.log(Person.count);