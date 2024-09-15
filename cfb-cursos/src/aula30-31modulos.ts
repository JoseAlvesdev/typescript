// Como as classes vem do mesmo arquivo posso importar em uma linha
// Objetos de exportação padrão ficam fora das chaves
// Objetos de exportação não padrões dentro das chaves
import Pessoa, { Objeto, Coisas } from "./Classes";
//import { Objeto } from "./Classes";

const p1 = new Pessoa('Jose', 1.68);
const o1 = new Objeto('Mesa');

console.log(p1.nome);
console.log(p1.altura);
console.log(Coisas);
