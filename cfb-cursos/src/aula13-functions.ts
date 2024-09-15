/*
FUNCTIONS
    1 - Parâmetros default, são parâmetros (omitidos) na chamada da função.
    Ex.:
    function soma(n1: number = 0, n2: number = 0): number {
        return n1 + n2;
    }

    2 - Parâmetros opcionais são parâmetros que podem, ou não ser usados na 
    chamada da função representado por " ? ", indica que um parâmetro e opcional
    Ex.:
    par: [ nome?: string ]
    function novoUser(user: string, pass: string, nome?: string): void {
        console.log(``);
    }

*/

// Parâmetros default
function soma(n1: number = 0, n2: number = 0): number {
    return n1 + n2;
}

console.log(soma(5, 0));

// Parâmetros opcionais
function novoUser(user: string, pass: string, nome?: string): void {
    let dados = {user, pass, nome}
    //console.log(`User: ${user}\nPass: ${pass}\nNome: ${nome}`);
}

novoUser('jose', '123');