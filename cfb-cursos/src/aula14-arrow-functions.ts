/*
ARROW FUNCTIONS
  Diferença entre função tradiconal e que arrow functions não funciona no
  hoisting (elevação).

  Hoisting, javaScript/typeScript sempre eleva funções e varáveis (var) ao topo do arquivo.
*/
//teste();
//teste2(); Gera erro

function teste(): void {
    console.log('Teste');
}

// Não elevada pelo hoisting
const teste2 = (txt?: string): void => {
    console.log(txt);
}

const fsoma2 = (n: number[]): number => {
    let s: number = 0; 
    n.forEach((e):number => s += e, n);
    return s;
}

teste2('CFBCursos');
teste2('Curso de TypeScript');
teste2('Youtube');
teste2();

let numbers: number[] = [10, 20, 30, 40];

console.log(fsoma2(numbers));
//console.log(fsoma2(90, 10));

// Teste de hoisting
//console.log(test1);

//var test1: string = 'Teste 1';
//let test2: string = 'Teste 2';
//const test3: string = 'Test 3';