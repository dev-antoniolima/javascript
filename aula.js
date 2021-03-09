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