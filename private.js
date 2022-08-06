class Person { 
    #name; // private fields can only be declared up-front in a field declaration   
    constructor(first, last, age) {
        this.#name = {
            first,
            last
        };
        this.age = age;
    }
 
    get fullName() {
        return `${this.#name.first} ${this.#name.last}`;
    }
   
    getFullName() {
        return `${this.#name.first} ${this.#name.last}`;
    }
 }
 
//  Person.prototype.getFullName = function() {
//     return `${this.#name.first} ${this.#name.last}`;
//  }

 const person = new Person('Martha', 'Sully');
 console.log(person.name); // undefined
// console.log(person.#name);

 console.log(person.fullName);
 
 console.log(person.getFullName());