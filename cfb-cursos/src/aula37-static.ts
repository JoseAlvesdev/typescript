// Static são propriedades que estão associados a classe e não a instância
// Ou seja eu não preciso de uma intância, propriedades que terão um endereço
// de memória fixo. 

import { Globais } from "./Globais";

console.log(Globais.teste);

Globais.teste = 10;

console.log(Globais.teste);

