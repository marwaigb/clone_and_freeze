const cloneFreeze = require("./clone_and_freeze.js");

let obj={
    "name":"marwa"
};

let obj2 = cloneFreeze.Clone(obj);
console.log(obj2);
cloneFreeze.Freeze(obj2);
obj2.name="marwa2";
console.log(obj2);








