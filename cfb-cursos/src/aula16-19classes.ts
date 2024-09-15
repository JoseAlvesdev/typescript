/*

*/

class Computador {
    private id: number = 0;
    public nome: string;
    private ram: number;
    private cpu: number;
    protected ligado: boolean;

    constructor(nome: string, ram: number, cpu: number) {
        this.nome = nome;
        this.ram = ram;
        this.cpu = cpu;
        this.ligado = false;
    }

    info(): void {
        console.log(`Nome..: ${this.nome}`);
        console.log(`Ram...: ${this.ram}`);
        console.log(`CPU...: ${this.cpu}`);
        console.log(`Ligado: ${this.ligado ? 'Sim': 'Não'}`, '\n-----------------------------------');
    }

    ligar(): void {
        this.ligado = true;
    }

    desligar(): void {
        this.ligado = false;
    }

    upRam(qtde: number): void {
        if (qtde >= 0 && qtde <= 1000) 
            this.ram = qtde;
        else
            console.log(`Quantidade ${qtde} para o computador ${this.nome} não é permitido`);
    }
}

// Instâncias
const comp1 = new Computador('Rapidão', 64, 10);
const comp2 = new Computador('Carão', 32, 5);
const comp3 = new Computador('Gamer', 128, 10);

// comp1.nome = 'Rapidão';
// comp2.nome = 'Carão';
// comp3.nome = 'Gamer';

comp1.ligar();
comp3.ligar();

comp1.upRam(128);

comp1.nome = 'Super Rapidão';

comp1.info()
comp2.info()
comp3.info()
