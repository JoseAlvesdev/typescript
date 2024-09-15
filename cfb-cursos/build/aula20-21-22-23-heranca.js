"use strict";
class Conta {
    numero;
    titular;
    saldoConta;
    constructor(titular) {
        this.numero = this.gerarNumeroConta();
        this.titular = titular;
        this.saldoConta = 0;
    }
    gerarNumeroConta() {
        return Math.floor(Math.random() * 100000) + 1;
    }
    info() {
        console.log(`Titular: ${this.titular}\nNúmero: ${this.numero}\n---------------------------------`);
    }
    saldo() {
        return this.saldoConta;
    }
    deposito(valor) {
        this.saldoConta += valor;
    }
    saque(valor) {
        if (valor <= this.saldoConta) {
            this.saldoConta -= valor;
        }
        else {
            console.log('Saldo insuficiente!');
        }
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
    deposito(valor) {
        if (valor <= 1000) {
            super.deposito(valor);
        }
        else {
            console.log(`Valor de depósito muito grande para este tipo de conta`);
        }
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
    deposito(valor) {
        if (valor <= 10000) {
            super.deposito(valor);
        }
        else {
            console.log(`Valor de depósito muito grande para este tipo de conta`);
        }
    }
}
const cont1 = new ContaPF(111, 'Jose');
const cont2 = new ContaPJ(222333, 'CFBCursos');
cont1.deposito(100);
cont1.deposito(200);
cont1.deposito(1500);
console.log(cont1.saldo());
cont2.deposito(1000);
cont2.deposito(1000);
cont2.deposito(10001);
console.log(cont2.saldo());
