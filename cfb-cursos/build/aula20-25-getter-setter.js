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
    get saldo() {
        return this.saldoConta;
    }
    set saldo(valor) {
        this.saldoConta = valor;
    }
    deposito(valor) {
        if (valor < 0) {
            console.log('Valor inválido');
            return;
        }
        this.saldo += valor;
    }
    saque(valor) {
        if (valor <= 0) {
            console.log('Valor inválido');
            return;
        }
        if (valor <= this.saldoConta) {
            this.saldo -= valor;
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
    saque(valor) {
        if (valor <= 1000) {
            super.saque(valor);
        }
        else {
            console.log(`Valor de saque muito grande para este tipo de conta`);
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
    saque(valor) {
        if (valor <= 10000) {
            super.saque(valor);
        }
        else {
            console.log(`Valor de saque muito grande para este tipo de conta`);
        }
    }
}
const cont1 = new ContaPF(111, 'Jose');
const cont2 = new ContaPJ(222333, 'CFBCursos');
cont1.deposito(1000);
console.log(cont1.saldo);
cont2.deposito(10000);
cont2.saque(5000);
cont2.saque(-100);
console.log(cont2.saldo);
