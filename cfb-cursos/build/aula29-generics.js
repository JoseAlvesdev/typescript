"use strict";
function f_teste(v, r) {
    return r;
}
class C_teste {
    valor;
    constructor(valor) {
        this.valor = valor;
    }
}
const ct1 = new C_teste(10);
const ct2 = new C_teste('10');
console.log(ct1.valor);
console.log(ct2.valor);
