function Person (first, last, age) {
    this.name = {
        first: first,
        last:  last
    };
    this.age = age;
    // this.breathe = function() {
    //     console.log("*breathing noise*");
    // }
}

Person.prototype.breathe = function() {
    console.log("*breathing noise*");
}

const arnold = new Person('Arnold', 'S', 74);
arnold.breathe();

const leo = new Person('Leo', 'Ho', 44);
leo.breathe();

console.log(arnold.breathe === leo.breathe);