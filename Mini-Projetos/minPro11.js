// Mini Projeto (10) - Montador de Endereços //

// Criar um objeto endereço que contém
// - RUA
// - Cidade
// - CEP
// Function Endereço

let enderecoCompleto = {
    rua: 'Rua do Imperador',
    cidade: 'Petrópolis - RJ',
    CEP: '21221310'
}

function exibirEndereco(endereco){
    for(let chave in endereco){
        console.log(chave);    }
}