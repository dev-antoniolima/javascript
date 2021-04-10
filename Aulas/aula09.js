// // (9) Condicionais://

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
// let i = 0;
// do {
//     console.log('Digitando!',i);
// i++;
// } while ( i < 10)

// 4.For..In

// const pessoa = {
//     nome: "Antonio",
//     idade: 22
// };

// //key-values = chave/valor
// for(let chave in pessoa) {
//     console.log(chave,pessoa.nome);
// }

//  const cores = ['Vermelho', 'Azul', 'Verde'];

// for (let indice in cores){
//     console.log(indice,cores[indice]);
// }



// 5.For..of
const cores = ['Vermelho', 'Azul', 'Verde'];

for(let cor of cores){
console.log(cor);
}

const marcas = ['nestle', 'fiat', 'globo'];

for(let marca of marcas){
console.log(marca);
}


//-------------------------------//