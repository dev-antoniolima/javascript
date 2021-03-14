// // (1) - Tipos de Variáveis //
// let idade = 10;
// const nome = "Antonio Lima";
// let profissao = "programador";

// console.log(idade,nome,profissao);
// //-------------------------------//



// // (2) - Tipos Primitivos //
// let nome = "Rafael"; //string literal = letras e números juntos.
// let idade = 25; //number = valor númeral.
// let estaAprovado = true; //boolean - condição verdadeira/falsa.
// let sobrenome: undefined; //Undefined.
// let corSelecionado = null // Resetar Valor.
// //-------------------------------//



// // (3) - Tipagem Dinâmica //
// let nome = "Rafael"; //typeof = string
// let idade = 25; //typeof = number
// let estaAprovado = true; //typeof = boolean
// let sobrenome: undefined; //typeof = undefined
// let corSelecionado = null //typeof = object
// //Javascript identifica o tipo de variável sem a necessidade de especificar-la.//
// //-------------------------------//



// (4) - Objetos //
// let pessoa = { 
//     nome: 'Rafael',
//     idade: 25,
//     estaAprovado: true,
//     sobrenome: 'de Souza'
// };

// console.log(pessoa);

// let carro = { 
//     modelo: 'Tesla',
//     ano: 1955,
//     placaVerificada: true,
//     numPlaca: '5u14abc'
// };

// console.log(carro);

// let produto = { 
//     nome: 'Caixa de som',
//     numIdentificacao: 55,
//     estoque: true,
//     modelo: '9839348934'
// };

// console.log(produto);
// //-------------------------------//



// // (5) - Arrays //
// let familia = [26, 45, 50, 17]
// console.log(familia.length);
// console.log(familia[2]);
// //indice identificado pelo número 2 (posição na array)

// //Array: Conjunto de dados que pode ser acessado por um índice.
// //-------------------------------//



// // (6) - Funções //
// let corSite = "Azul";

// function resetaCor(cor, tonalidade){
// corSite = cor + ' ' + tonalidade;
// };

// console.log(corSite);
// resetaCor("Verde","claro");
// console.log(corSite);
// //-------------------------------//



// // (7) - Tipos de Funções //

// // Realiza uma tarefa e não retorna nada.
// function dizerNome(){
//     console.log('jhonatan');
// }
// dizerNome();
// ///////////////////////////////////////////

// // Realiza uma tarefa e retona seu valor em uma variável.
// function MultiplicarPorDois(valor){
//     return valor * 2;
// }

// let resultado = MultiplicarPorDois(5);
// console.log(resultado);
// //-------------------------------//



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



// // 8.3 Operadores de Igualdade://

// // Igualdade estrita
// console.log ( 1 === 1); //Compração de valor e tipo
// console.log ( '1' === 1); // Tipo diferente

// //Igualdade solta
// console.log( 1 == 1 ); // Comparar valor, converte para mesmo tipo.
// console.log( '1' == 1); 
// /////////////////////////////////////////////////

// // 8.4 Operador Ternário://

// let pontos = 100;
// let tipo = pontos > 100 ? 'premim' : 'comum'; // comparação (if)
// console.log(tipo);

// //-------------------------------//


// // 8.5 Operadores Lógicos://

// // && = Retorna TRUE se os dois operandos forem true.
// console.log(true && true);
// console.log(false && true);

// let maiorDeidade = true;
// let pussuiCarteira = true;
// let podeAplicar = maiorDeIdade && possuiCarteira;

// console.log(podeAplicar);

// ||(ou) = Retorna TRUE se um dos operandos forem true.

// let maiorDeIdade = true;
// let pussuiCarteira = true;
// let podeAplicar = maiorDeIdade || possuiCarteira;

// console.log(podeAplicar);

// // Operador NOT(!) = Retorna TRUE se um dos operandos forem true.
// console.log("Pode aplicar: ", podeAplicar);

// let candidatoRecusado = !podeAplicar;

// console.log('Candidato Recusado', candidatoRecusado);

//-------------------------------//

//Falsy = undefined, null, 0, false, '', NaN
//Truthy

// let corPersonalizada = '';
// let corPadrao = 'azul';
// let corPerfil = corPersonalizada || corPadrao;

// console.log(corPerfil);

//-------------------------------//




