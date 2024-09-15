/*
COMANDOS
  comando: tsc --help -> Exibe todos os comandos
  comando: tsc --watch -> Fica ouvindo os arquivos e os atualiza em caso de mudança.

TYPE INFERENCE
  Quando eu inicio minha variável com um tipo, o TS automaticamente já tipa
  a variavel, ou seja se eu tentar atribuir um tipo diferente dará erro.

  Ex.1:
  let nome; -> nome: any seguirá o resto do código com o tipo any
  nome = 'Jose';
  let nome = 1 -> Recebe qualquer coisa

  Ex.2:
  let nome = 'Jose'; -> nome: string seguirá o resto do código com o tipo string
  let nome = 1 -> ERROR

  Ex.3 declarando variável já com tipo especifico:
  let nome: string;
  nome = 'Jose';
  nome = 1; -> ERROR
*/

let nome;
nome = 'Jose';

let valor: number; //int, float, bin, hex
valor = 10

console.log(valor);