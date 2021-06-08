// (25) - Introdução a Arrays - Operador Spread //


const primeiro = [1,2,3];
const segundo = [4,5,6];

// Combinar:
const combinado = [...primeiro,"a",...segundo];
console.log(combinado);

const clonado = [...combinado];
console.log(clonado);

