const person1 = {
    homePostCode: 'AB1 9FW',
    getAreaCode: function() {
        return this.homePostCode.split(' ')[0];
    }
};

console.log(person1.homePostCode);
console.log(person1.getAreaCode());

const person2 = {
    homeAreaCode: 'AB1',
    homeStreetCode: '9FW',
    get homePostCode() {
        return this.homeAreaCode + ' ' + this.homeStreetCode;
    }
};

console.log(person2.homePostCode);