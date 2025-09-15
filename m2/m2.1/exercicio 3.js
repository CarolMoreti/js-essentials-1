const tiposPrimitivos = ["string", "number", "boolean", "undefined", "null", "symbol", "bigint"];

console.log(tiposPrimitivos);

let tipoString = "Texto";
let tipoNumero = 100;
let tipoBooleano = false;
let tipoNulo = null;
let tipoIndefinido = undefined;
let tipoSymbol = Symbol("id");
let tipoBigInt = 1234567890123456789012345678901234567890n;

console.log(`string: ${tipoString}`);
console.log(`number: ${tipoNumero}`);
console.log(`boolean: ${tipoBooleano}`);
console.log(`null: ${tipoNulo}`);
console.log(`undefined: ${tipoIndefinido}`);
console.log(`symbol: ${String(tipoSymbol)}`); // Symbol precisa ser convertido para string para ser exibido.
console.log(`bigint: ${tipoBigInt}`);

let minhaVariavel = Symbol("meuSymbol");

console.log(`A variável é um Symbol? ${typeof minhaVariavel === 'symbol'}`);
