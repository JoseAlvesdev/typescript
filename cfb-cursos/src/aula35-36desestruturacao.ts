// O container de variáveis tem que ser sempre igual ao container que vc
// está desestruturando.
// Ex.: []=[], {}={}

// Desestruturando cada posição para uma variável
const obj = {
    cor1: 'verde',
    cor2: 'Amarelo',
    cor3: 'Azul',
    cor4: 'Branco'
}
//let [aa, bb, cc, dd]: string[] = ['Verde', 'Amarelo', 'Azul', 'Branco'];

// Na desestruturação de objetos as variáveis tem que ser nomeadas, 
// exatamente como o mesmo nome das chaves do objeto
let {cor1, cor2, cor3, cor4} = obj;

// Desestruturando um array de items menor do que o array de variáveis
// Colocando valores padrão já que, o array só preenche a pósição zero
// Acusando erro sem os valores padrões
//let [nu1=0, nu2=0, nu3=0] = [10];

// Desestruturando com spread operator
let [nu1=0, nu2=0, ...nu3] = [10, 20, 30, 40, 50, 60, 70, 80, 90];

const fcores = () => {
    return ['Verde', 'Amarelo', 'Azul', 'Branco'];
}

let [co1, co2, co3, co4] = fcores();

// Desestruturando uma string
let texto = 'Curso de TypeScript';

//let[...t] = texto.split(' ');
let t = texto.split(' ');
let[p1, p2, p3] = texto.split(' ');



console.log(p1, p2, p3);
