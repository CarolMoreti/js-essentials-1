console.log(Boolean(0));        // false
console.log(Boolean(1));        // true
console.log(Boolean(""));       // false
console.log(Boolean("Hello"));    // true
console.log(Boolean(null));     // false
console.log(Boolean(undefined));  // false
console.log(Boolean({}));       // true (objetos vazios são "truthy")
console.log(Boolean([]));       // true (arrays vazios são "truthy")
