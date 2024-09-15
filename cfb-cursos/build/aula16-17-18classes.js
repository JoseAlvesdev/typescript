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
    info() {
        console.log(`Nome..: ${this.nome}`);
        console.log(`Ram...: ${this.ram}`);
        console.log(`CPU...: ${this.cpu}`);
        console.log(`Ligado: ${this.ligado ? 'Sim' : 'Não'}`, '\n-----------------------------------');
    }
    ligar() {
        this.ligado = true;
    }
    desligar() {
        this.ligado = false;
    }
}
const comp1 = new Computador('Rapidão', 64, 10);
const comp2 = new Computador('Carão', 32, 5);
const comp3 = new Computador('Gamer', 128, 10);
comp1.ligar();
comp3.ligar();
comp1.desligar();
comp1.info();
comp2.info();
comp3.info();
