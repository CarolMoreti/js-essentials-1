let booleanoParaNumero = true;
console.log(`Resultado da conversão: ${Number(booleanoParaNumero)}, Tipo: ${typeof Number(booleanoParaNumero)}`); // true se torna 1

booleanoParaNumero = false;
console.log(`Resultado da conversão: ${Number(booleanoParaNumero)}, Tipo: ${typeof Number(booleanoParaNumero)}`); // false se torna 0

let nuloParaNumero = null;
console.log(`Resultado da conversão: ${Number(nuloParaNumero)}, Tipo: ${typeof Number(nuloParaNumero)}`); // null se torna 0

let indefinidoParaNumero = undefined;
console.log(`Resultado da conversão: ${Number(indefinidoParaNumero)}, Tipo: ${typeof Number(indefinidoParaNumero)}`); // undefined se torna NaN (Not a Number)
