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
let pessoa = { 
    nome: 'Rafael',
    idade: 25,
    estaAprovado: true,
    sobrenome: 'de Souza'
};

console.log(pessoa);

let carro = { 
    modelo: 'Tesla',
    ano: 1955,
    placaVerificada: true,
    numPlaca: '5u14abc'
};

console.log(carro);

let produto = { 
    nome: 'Caixa de som',
    numIdentificacao: 55,
    estoque: true,
    modelo: '9839348934'
};

console.log(produto);
//-------------------------------//



// (5) - Arrays //
let familia = [26, 45, 50, 17]
console.log(familia.length);
console.log(familia[2]);
//indice identificado pelo número 2 (posição na array)

//Array: Conjunto de dados que pode ser acessado por um índice.
//-------------------------------//



// (6) - Funções //
let corSite = "Azul";

function resetaCor(cor, tonalidade){
corSite = cor + ' ' + tonalidade;
};

console.log(corSite);
resetaCor("Verde","claro");
console.log(corSite);
//-------------------------------//



// (7) - Tipos de Funções //

// Realiza uma tarefa e não retorna nada.
function dizerNome(){
    console.log('jhonatan');
}
dizerNome();
///////////////////////////////////////////

// Realiza uma tarefa e retona seu valor em uma variável.
function MultiplicarPorDois(valor){
    return valor * 2;
}

let resultado = MultiplicarPorDois(5);
console.log(resultado);
//-------------------------------//



// (8) - Operadores Lógicos //

// 8.1 Operadores Aritméticos (Matemáticos)://
let salario = 100;

console.log(salario + salario); //Adição//
console.log(salario - salario); //Subtração//
console.log(salario * salario); //Multiplicação//
console.log(salario / salario); //Divisão//
console.log(salario ** salario); //Exponencial//

let idade = 18;

console.log(idade); 
console.log(++idade); //Incrementação(adiciona 1)

console.log(idade); 
console.log(idade--); //Decrementar(subtrai 1)


// 8.2 Operadores de Atribuição://
let valorTecladoGamer = 100; // (=) = atribuição 
valorTecladoGamer += valorTecladoGamer; // valorTecladoGamer = valorTecladoGamer + valorTecladoGamer;
valorTecladoGamer -= valorTecladoGamer; // valorTecladoGamer = valorTecladoGamer - valorTecladoGamer;  
console.log(valorTecladoGamer);
/////////////////////////////////////////////////








// Operadores de Comparação
// Operadores Bitwise



//-------------------------------//