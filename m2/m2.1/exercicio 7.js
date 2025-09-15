console.log(Number("123"));      // 123
console.log(Number("123.45"));   // 123.45
console.log(Number(""));        // 0
console.log(Number("abc"));     // NaN
console.log(Number("0"));       // 0

let strInt = "123.45";
let strFloat = "123.45";

console.log(`parseInt: ${parseInt(strInt)}`);     // 123
console.log(`parseFloat: ${parseFloat(strFloat)}`); // 123.45
