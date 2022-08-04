/** 
  * Task description: Write a method that returns a deep array like [[key, value]] 
  * Expected Result: ({ a: 1, b: 2 }) => [['a', 1], ['b', 2]] 
  * Task complexity: 1 of 5 
  * @param {Object} object - Any object to transform into array 
  * @returns {Array} - a deep array 
*/

const makePairs = (object) => {
    const result = [];
    for (let x in object) {
        result.push(`['${x}', ${object[x]}]`);   // push "['a', 1]" into the array
    }
    return '[' + result.join(', ') + ']';
};

const data = { a: 1, b: 2 };
console.log(makePairs(data)); // [['a', 1], ['b', 2]]


/*
const makePairs = (object) => {
    return Object.entries(object);
};

const data = { a: 1, b: 2 };
console.log(makePairs(data)); // [['a', 1], ['b', 2]]
*/