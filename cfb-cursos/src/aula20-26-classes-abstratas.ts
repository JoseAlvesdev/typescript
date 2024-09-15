/*
Classes abstratas são modelos de classes não podem ser intanciandas, só
podem ser herdadas.

Ou seja não posso criar um objeto da mesma.
*/

abstract class Conta {
    private readonly numero: number;
    protected titular: string;
    private saldoConta: number;

    constructor(titular: string) {
        this.numero = this.gerarNumeroConta();
        this.titular = titular;
        this.saldoConta = 0;
        //this.numero = 0; // No momento da criação do objeto ainda e possível fazer alterações no atributo
    }

    private gerarNumeroConta(): number {
        return Math.floor(Math.random() * 100000) + 1;
    }

    protected info(): void {
        console.log(`Titular: ${this.titular}\nNúmero: ${this.numero}\n---------------------------------`);
    }

    get saldo(): number { // Getter
        return this.saldoConta;
    }

    private set saldo(valor: number) { // Setter
        this.saldoConta = valor;
    }

    protected deposito(valor: number): void {
        if (valor < 0) {
            console.log('Valor inválido');
            return;
        }

        this.saldo += valor;
    }

    protected saque(valor: number): void {
        if (valor <= 0) {
            console.log('Valor inválido');
            return;
        }
        
        if (valor <= this.saldoConta) {
            this.saldo -= valor;
        } else {
            console.log('Saldo insuficiente!');
        }
    }
}

// Implementando uma interface na classe
// Obriga que a classe tenha implementado os atributos e métodos definidos na interface
interface Tributos { // Como se fosse uma assinatura
    taxaCalculo: number;
    calcularTrib(valor: number): number;
}

class ContaPF extends Conta implements Tributos {
    taxaCalculo: number = 10;
    cpf: number;

    constructor(cpf: number, titular: string) {
        super(titular);
        this.cpf = cpf;
        console.log(`Conta PF criada: ${this.titular}\n---------------------------------`);
    }

    calcularTrib(valor: number): number {
        return valor * this.taxaCalculo;
    }

    public info(): void {
        console.log(`Tipo....: PF\nCPF.....: ${this.cpf}`);
        super.info();
    }

    public deposito(valor: number): void {
        if (valor <= 1000) {
            super.deposito(valor);
        } else {
            console.log(`Valor de depósito muito grande para este tipo de conta`);
        }
        
    }

    public saque(valor: number): void {
        if (valor <= 1000) {
            super.saque(valor);
        } else {
            console.log(`Valor de saque muito grande para este tipo de conta`);
        }
    }
}

class ContaPJ extends Conta {
    cnpj: number;

    constructor(cnpj: number, titular: string) {
        super(titular);
        this.cnpj = cnpj;
        console.log(`Conta PJ criada: ${this.titular}\n---------------------------------`);
    }

    public info(): void {
        console.log(`Tipo....: PJ\nCNPJ....: ${this.cnpj}`);
        super.info();
    }

    public deposito(valor: number): void {
        if (valor <= 10000) {
            super.deposito(valor);
        } else {
            console.log(`Valor de depósito muito grande para este tipo de conta`);
        }
        
    }

    public saque(valor: number): void {
        if (valor <= 10000) {
            super.saque(valor);
        } else {
            console.log(`Valor de saque muito grande para este tipo de conta`);
        }
    }
}

const cont1 = new ContaPF(111, 'Jose');
const cont2 = new ContaPJ(222333, 'CFBCursos');
//const cont3 = new Conta('Clark');

// console.log(cont2.titular);
// console.log(cont2.numero);

cont1.deposito(1000);
// cont1.saque(500);
// cont1.saque(-100)
//cont1.saldo = 2000;
console.log(cont1.saldo);


cont2.deposito(10000);
cont2.saque(5000)
cont2.saque(-100)
console.log(cont2.saldo);

// cont1.info();
// cont2.info();