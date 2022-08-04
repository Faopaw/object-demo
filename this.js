const myObj = {
    number: 42,
    action: function () {
        let number = 22;
        return this.number;
    },
};
 
console.log(myObj.action());  // 'this' is bound to myObj;

const f = myObj.action;

global.number = 52;  // don't try it.

console.log(f());  // 'this' is bound to global

console.log( f.call(myObj) );
console.log( f.call(global) );

function f1(a, b) {
    console.log(a, b, this.c);
}

const o = {
    c: 1
};

f1(10, 100);
f1.call(o, 10, 100);
f1.apply(o, [10, 100]);
(f1.bind(o))(10, 100);

