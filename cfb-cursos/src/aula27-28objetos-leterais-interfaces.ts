

/*
Objeto literal abaixo

let curso2: {
    titulo: string;
    des: string;
    aulas: number;
    maxAlunos: number;
}

Função objeto tipado pela interface:

curso1 = {
    titulo: 'TypeScript',
    des: 'Curso de TypeScript',
    aulas: 100,
    maxAlunos: 50,
    iniciarCurso(t: string): void {
        console.log(t);
    }
}
*/

interface curso {
    titulo: string;
    des: string;
    aulas: number;
    maxAlunos?: number;
    iniciarCurso?(teste: string): void; // Declarando e tipando uma função
}

// Herança
interface cursoProg extends curso {
    aulas: number;
    maxAlunos?: number;
}

interface cursoArtes extends curso {
    aulas: number;
    maxAlunos?: number;
}

let curso1: cursoProg;
let curso2: cursoProg;
let curso3: cursoArtes;

function iniciarCurso(t: string): void {
    console.log(t);
    
}

curso1 = {
    titulo: 'TypeScript',
    des: 'Curso de TypeScript',
    aulas: 100,
    maxAlunos: 50,
    iniciarCurso(t: string): void {
        console.log(t);
    }
}

curso2 = {
    titulo: 'JavaScript',
    des: 'Curso de JavaScript',
    aulas: 100,
    maxAlunos: 50

}

curso3 = {
    titulo: 'C++',
    des: 'Curso de c++',
    aulas: 100,
}

console.log(curso1);
console.log(curso2);
console.log(curso3);

/*
Sobrescrevendo com &:
Se você precisar combinar os atributos de uma interface com novos tipos 
ou modificações, você pode usar a interseção de tipos (&).
*/

interface Pessoa {
    nome: string;
    idade: number;
  }
  
  interface Funcionario extends Pessoa {
    salario: number;
  }
  
  type FuncionarioModificado = Pessoa & {
    salario: number;
    idade: string; // Sobrescrevendo a idade para ser uma string
  };
  
  const funcionario: FuncionarioModificado = {
    nome: 'Carlos',
    idade: '30', // Aqui idade é uma string, como esperado
    salario: 5000,
  };
  