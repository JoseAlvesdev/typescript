"use strict";
class Conta {
    numero;
    titular;
    constructor(titular) {
        this.numero = this.gerarNumeroConta();
        this.titular = titular;
    }
    gerarNumeroConta() {
        return Math.floor(Math.random() * 100000) + 1;
    }
    info() {
        console.log(`Titular: ${this.titular}\nNúmero: ${this.numero}\n---------------------------------`);
    }
}
class ContaPF extends Conta {
    cpf;
    constructor(cpf, titular) {
        super(titular);
        this.cpf = cpf;
        console.log(`Conta PF criada: ${this.titular}\n---------------------------------`);
    }
    info() {
        console.log(`Tipo....: PF\nCPF.....: ${this.cpf}`);
        super.info();
    }
}
class ContaPJ extends Conta {
    cnpj;
    constructor(cnpj, titular) {
        super(titular);
        this.cnpj = cnpj;
        console.log(`Conta PJ criada: ${this.titular}\n---------------------------------`);
    }
    info() {
        console.log(`Tipo....: PJ\nCNPJ....: ${this.cnpj}`);
        super.info();
    }
}
const cont1 = new ContaPF(111, 'Jose');
const cont2 = new ContaPJ(222333, 'CFBCursos');
cont1.info();
cont2.info();

