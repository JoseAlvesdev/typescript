

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
