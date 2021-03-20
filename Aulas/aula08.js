// // (8) - Operadores Lógicos //

// // 8.1 Operadores Aritméticos (Matemáticos)://
// let salario = 100;

// console.log(salario + salario); //Adição//
// console.log(salario - salario); //Subtração//
// console.log(salario * salario); //Multiplicação//
// console.log(salario / salario); //Divisão//
// console.log(salario ** salario); //Exponencial//

// let idade = 18;

// console.log(idade); 
// console.log(++idade); //Incrementação(adiciona 1)

// console.log(idade); 
// console.log(idade--); //Decrementar(subtrai 1)


// // 8.2 Operadores de Atribuição://
// let valorTecladoGamer = 100; // (=) = atribuição 
// valorTecladoGamer += valorTecladoGamer; // valorTecladoGamer = valorTecladoGamer + valorTecladoGamer;
// valorTecladoGamer -= valorTecladoGamer; // valorTecladoGamer = valorTecladoGamer - valorTecladoGamer;  
// console.log(valorTecladoGamer);
// /////////////////////////////////////////////////



// 8.3 Operadores de Igualdade://

// Igualdade estrita
console.log ( 1 === 1); //Compração de valor e tipo
console.log ( '1' === 1); // Tipo diferente

//Igualdade solta
console.log( 1 == 1 ); // Comparar valor, converte para mesmo tipo.
console.log( '1' == 1); 
/////////////////////////////////////////////////

// // 8.4 Operador Ternário://

let pontos = 100;
let tipo = pontos > 100 ? 'premim' : 'comum'; // comparação (if)
console.log(tipo);

// //-------------------------------//


// // 8.5 Operadores Lógicos://

// && = Retorna TRUE se os dois operandos forem true.
console.log(true && true);
console.log(false && true);

let maiorDeidade = true;
let pussuiCarteira = true;
let podeAplicar = maiorDeIdade && possuiCarteira;

console.log(podeAplicar);

// ||(ou) = Retorna TRUE se um dos operandos forem true.

let maiorDeIdade = true;
let pussuiCarteira = true;
let podeAplicar = maiorDeIdade || possuiCarteira;

console.log(podeAplicar);

// Operador NOT(!) = Retorna TRUE se um dos operandos forem true.
console.log("Pode aplicar: ", podeAplicar);

let candidatoRecusado = !podeAplicar;

console.log('Candidato Recusado', candidatoRecusado);


Falsy = undefined, null, 0, false, '', NaN
Truthy

let corPersonalizada = '';
let corPadrao = 'azul';
let corPerfil = corPersonalizada || corPadrao;

console.log(corPerfil);
