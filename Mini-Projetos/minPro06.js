// Mini Projeto (6) - Encontre o String //

// Criar um método para ler propriedades de um objeto e
// exibir somente as propriedades do tipo string que estão nesse objeto 

const filme = {
    titulo: 'Kong',
    ano: 2021,
    diretor: 'Diretor',
    personagem: 'Macaco'
}
    

exibirPropriedades(filme);

function exibirPropriedades(obj) {
    for (prop in obj)
    if(typeof obj[prop] === 'string')
    console.log(prop,obj[prop])

}