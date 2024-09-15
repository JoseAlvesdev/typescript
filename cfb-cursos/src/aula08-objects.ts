/*
TIPO OBJECT

let dados: object = {
    nome: "Jose",
    idade: 25,
    status: 'A'
}

*/

let dados = {
    nome: "Jose",
    idade: 25,
    status: 'A',
    ola: () => console.log('Oi'),
    info: (p: string) => console.log(p)
}

dados.nome = 'Henrique'

console.log(typeof(dados));
console.log(dados.nome);

dados.ola();
dados.info(dados.nome);