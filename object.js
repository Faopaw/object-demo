// const myCar = {
//     make: 'Toyota',
//     model: 'Aygo',
//     year: 2020
// }

// myCar.colour = 'red';

// console.log(myCar.colour);

// delete myCar.colour;

// console.log(myCar);

// let myFruit1 = { name: 'apple' };
// let myFruit2 = myFruit1;

// console.log(myFruit1 === myFruit2);  // true

// const myself = {
//     name: 'leo',
//     hobbies: ['computer games', 'nba', 'soccer']
// };

// const person = { ...myself };
// person.hobbies = [ ...myself.hobbies ];

// console.log(person);

// person.hobbies.push('badminton');

// console.log(person);
// console.log(myself);

// const myCar = {
//     make: 'Toyota',
//     model: 'Aygo',
//     year: 2020
// }

// for (let x of myCar) {
//     console.log(x);
// }

// let a = [2, 4, 6];

// let a = {
//     '0': 2,
//     '1': 4,
//     '2': 6
// }

// for (let x in a) {
//     console.log(x);
// }

// function printMake(obj) {
//     console.log(obj.make);
// }
// printMake(myCar);


// const myCar = {
//     make: 'Toyota',
//     model: 'Aygo',
//     year: 2020,
//     printMake: () => {
//         console.log(this.make);
//     }
// }
// myCar.printMake();

// function Car(make, model, year, owner) {
//     this.make = make;
//     this.model = model;
//     this.year = year;
//     this.owner = { ...owner };
// }

// let owner = {firstName: 'Leo', lastName: 'Ho'};
// const myCar = new Car ('Toyota', 'Aygo', 2020, owner);

// myCar.owner = {};

// const myself = {
//     firstName: 'Leo',
//     lastName:  'Ho',
//     fullName:  function () {
//         return this.firstName + ' ' + this.lastName;
//     }
// }

// console.log(myself.fullName());

const myself = {
    firstName: 'Leo',
    lastName:  'Ho',
    get fullName () {
        return this.firstName + ' ' + this.lastName;
    },
    set fullName (aName) {
        names = aName.split(' ');
        this.firstName = names[0];
        this.lastName = names[1];
    }
}

myself.fullName = 'Kirti Lad';
console.log(myself.fullName);

