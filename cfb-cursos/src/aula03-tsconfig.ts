/*
JavaScript compilado para uma versão antiga

var Curso = /[**] @class [*]/ (function () {
    function Curso(canal, curso) {
        this.canal = null;
        this.curso = null;
        this.canal = canal;
        this.curso = curso;
    }
    return Curso;
}());
var c1 = new Curso('CFBCurso', 'TypeScript');
console.log(c1.canal);
console.log(c1.curso);

COMANDOS TERMINAL
  
  - comando: tsc -> Mostra todos os comandos que podemos executar no terminal (
    quando não há um tsconfig.json)
  - comando: tsc -> Compila todos os arquivos TypeScript
  - comando: tsc aula03.ts --target -> retorna a versoes disponiveis
  - comando: tsc aula03.ts --target "es2022" -> define a versão
  - comando: tsc aula03.ts --target "ESNEXT" -> pega a ultima versão do JavaScript
  - comando tsc --init -> gera o arquivo de configuração

CONFIG BÁSICA NO TSCONFIG
  // "target": "ESNext", -> mudar pra pegar a ultima versao do JavaScript
  // "removeComments": true, -> remove os comentarios no arquivo js compilado
  // "outDir": "./", -> Define a pasta de saida para os arquivos javascript compilados
  // "rootDirs": [], -> Defina a pasta onde estarão os arquivos typeScript
*/

class Curso {
    canal = null;
    curso = null;

    constructor (canal: any, curso: any) {
        this.canal = canal;
        this.curso = curso;
    }
}

let c1 = new Curso('CFBCurso', 'TypeScript')

console.log(c1.canal);
console.log(c1.curso);