var student = {
    name : "David Rayy",
    sclass : "VI",
    rollno : 12 
};

// const result = [];
// for (let x in student) {
//     result.push(x);
// }

// console.log(result.join(','));

console.log(Object.keys(student).join(','));

const result = Object.keys(student);
console.log(result.join(','));