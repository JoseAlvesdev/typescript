"use strict";
class Computador {
    nome;
    ram;
    cpu;
    ligado;
    constructor(nome, ram, cpu) {
        this.nome = nome;
        this.ram = ram;
        this.cpu = cpu;
        this.ligado = false;
    }
}
const comp1 = new Computador('Rapidão', 64, 10);
const comp2 = new Computador('Carão', 32, 5);
const comp3 = new Computador('Gamer', 128, 10);
console.log(comp1.nome);
