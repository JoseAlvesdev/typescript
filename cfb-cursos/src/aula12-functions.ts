/*
FUNCTIONS
  Sempre observar o tipo de valor que estou retornando.
  Ex.:
  function soma2(n1: number, n2: number): number {
    return n1 + n2; // number
  }
*/

function logar(user: string, password: string): void {
    console.log(`User....: ${user}\nPassword: ${password}`);
}

logar('jose', '123');

function soma2(n1: number, n2: number): number {
    return n1 + n2;
}

let n_res: number = soma2(10, 15);
let s_res: string = soma2(2, 8).toString();

console.log(n_res);
console.log(s_res);