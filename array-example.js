function upperCaseArguments() {
//    var argsAsArray = Array.prototype.slice.call(arguments);
    var argsAsArray = arguments.slice();
    
    return argsAsArray.map(function (arg) {
        return arg.toUpperCase();
    });
}

function f(a, b) {
    console.log(upperCaseArguments(a, b));
}

f('john', 'mary');
