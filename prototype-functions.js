// function Person(first, last) {
//     this.first = first;
//     this.last = last;
//     this.fullName = function () {
//         return this.first + ' ' + this.last;
//     }
// }

// function fullName2() {
//     return this.first + ',' + this.last;
// }

// const leo = new Person('leo', 'ho');
// const manu = new Person('em', 'o');

// leo.fullName = fullName2;

// console.log(leo.fullName());
// console.log(manu.fullName());

function Person(first, last) {
    this.first = first;
    this.last = last;
}

Person.prototype.fullName = function () {
    return this.first + ' ' + this.last;
}

Person.prototype.fullName = fullName2;

function fullName2() {
    return this.first + ',' + this.last;
}

const leo = new Person('leo', 'ho');
const manu = new Person('em', 'o');

console.log(leo.fullName());
console.log(manu.fullName());