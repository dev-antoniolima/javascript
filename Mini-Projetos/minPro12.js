// Mini Projeto (12) - Encontre a igualdade //

function endereco(rua, cidade, cep){
    this.rua = rua,
    this.cidade = rua,
    this.cep = rua
}

const endereco1 = new endereco('a','b','c');
const endereco2 = new endereco('a','b','c');

function saoIguais(endereco1, endereco2){
// Comparar se as propriedades são iguais
return endereco1.rua === endereco2.rua &&
       endereco1.cidade === endereco2.cidade
       endereco1.cep === endereco2.cep
}
console.log(saoIguais(endereco1,endereco2));


function temEnderecoMemoriaIguais(endereco1, endereco2){
return endereco1 === endereco2;
}
console.log(temEnderecoMemoriaIguais(endereco1, endereco2));