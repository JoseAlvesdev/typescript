/*
ENUM
  São conjuntos de dados, que podem ser utilizados e classificados por
  valores numerais ou textuais.

  Estrutura:
  enum dias {
    domingo = 1,
    segunda = 2
  }

  P.: O que muda?
  R.: E parecido com um objeto só que precisa da palavra chave enum, não 
  precisa atribuir a uma variável com " = ", e por fim o sinal de atribuição 
  e o " = " ao invés de " : "

  Enum indexavel (tipo numerico)
  Este:
  enum tipoUsuario {
    USER,
    ADMIN,
    SUPER
  }
    
  Esquivale a este:
  enum tipoUsuario {
    USER = 0,
    ADMIN = 1,
    SUPER = 2
  }

  console.log(tipoUsuario.ADMIN); // 1
  console.log(tipoUsuario[1]); // ADMIN

  METODOS DE DATA E HORA

    - getDate(): retorna o dia do mês
    - getDay(): retorna o dia da semana
*/

enum dias {
    domingo = 0,
    segunda = 1,
    terca = 2,
    quarta = 3,
    quinta = 4,
    sexta = 5,
    sabado = 6
}

//console.log(dias.domingo);
//console.log(dias['domingo']); // Igual no Python
//console.log(dias[1]); // Retorna a chave

const d = new Date();
//console.log(d.getDate());
//console.log(d.getDay());
//console.log(dias[d.getDay()]);

enum cores {
    branco = "#fff",
    preto = "#000",
    vermelho = "#f00",
    verde = "#0f0",
    azul = "#00f"
}

console.log(cores.branco);
console.log(cores['branco']);

enum tipoUsuario {
    USER = 10,
    ADMIN = 100,
    SUPER = 1000
}

console.log(tipoUsuario.SUPER);

const tp: tipoUsuario = tipoUsuario.SUPER;
console.log(tp);
