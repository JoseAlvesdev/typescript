"use strict";
function fsoma(...n) {
    let s = 0;
    for (let num of n) {
        s += num;
    }
    return s;
}
console.log(fsoma(10, 20, 30, 40, 100));
