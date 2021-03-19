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


// // 9 Condicionais://

//If..Else

// Se a hora estiver entre 06:00 e 12:00 : Bom dia!
// Se estiver entre 12:00 ate as 18:00 : Boa tarde!
// Caso contrário: Boa noite!
let hora = 6;

if(hora > 6 && hora < 12 ){
console.log("Bom dia");
}
else if(hora >= 12 && hora < 18){
console.log("Boa tarde");
}
else{
console.log("Boa noite");
}


//Switch .. case

let permissao; // comum, gerente, diretor
permissao = 'gerente';

switch(permissao) {
    case 'comum':
        console.log('usuário comum');
        break;

         case 'gerente':
        console.log('usuário gerente');
        break;

         case 'diretor':
        console.log('usuário diretor');
        break;


        default: console.log("Usuário não reconhecido");
}


// Laço/Loop For

// 1.For

// for(let i = 0;i < 5; i++){
//     console.log("Estou aprendendo!", i);
// }

// 2.While
// let i = 5;

// while (i >= 1){
//     if(i % 2 !== 0){
//         console.log(i);
//     }
//     i--;
// }

// 3.Do..while
let i = 0;
do {
    console.log('Digitando!',i);
i++;
} while ( i < 10)

// 4.For..In
// 5.For..of





//-------------------------------//