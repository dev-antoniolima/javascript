// (24) - Introdução a Arrays - Esvaziando um Array /

let numeros = [1,2,3,4,5,6,7];
let outros = numeros;

// Solução 1:
numeros = [];
console.log(numeros);
console.log(outros);


// Solução 1:
numeros.length = 0;
console.log(numeros);
console.log(outros);