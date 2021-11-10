const _ = require('lodash');

function Clone(obj){
    let obj2=_.cloneDeep(obj);
    Object.freeze(obj2);
    return obj2;
}

function Freeze(obj){
    Object.freeze(obj);
    return obj;
}

module.exports = {Clone, Freeze};


