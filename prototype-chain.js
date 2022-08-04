// const myself = {
//     firstName: 'Leo',
//     lastName:  'Ho'
// };

function Person (first, last) {
    this.firstName = first;
    this.lastName  = last;
}

const myself = new Person('Leo', 'Ho');

console.log(myself);