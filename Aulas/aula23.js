// (23) - Introdução a Arrays - Removendo Elementos /

const numeros = [1,2,3,4,5,6];
numeros.push();
numeros.unshift();
numeros.splice();


//Remover elemento no início do array
const primeiro = numeros.shift();
console.log(primeiro);
console.log(numeros);

//Remover elemento no meio do array
const meio = numeros.splice();
console.log(meio);
console.log(numeros);

//Remover elemento no final do array
const ultimo = numeros.pop();
console.log(ultimo);
console.log(numeros);
