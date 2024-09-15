"use strict";
function teste() {
    console.log('Teste');
}
const teste2 = (txt) => {
    console.log(txt);
};
const fsoma2 = (n) => {
    let s = 0;
    n.forEach((e) => s += e, n);
    return s;
};
teste2('CFBCursos');
teste2('Curso de TypeScript');
teste2('Youtube');
teste2();
let numbers = [10, 20, 30, 40];
console.log(fsoma2(numbers));
