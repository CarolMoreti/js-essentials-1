let valorNulo = null;
let valorIndefinido = undefined;

console.log(`Tipo de null: ${typeof valorNulo}`); // Retorna "object" - isso é um comportamento conhecido do JavaScript.
console.log(`Tipo de undefined: ${typeof valorIndefinido}`);

let meuObjeto = {};
let meuArray = [];

console.log(`Tipo de um objeto: ${typeof meuObjeto}`);
console.log(`Tipo de um array: ${typeof meuArray}`); // Retorna "object" - arrays são considerados objetos em JavaScript.

let meuBigInt = 9007199254740991n;

console.log(`Tipo de um BigInt: ${typeof meuBigInt}`);
