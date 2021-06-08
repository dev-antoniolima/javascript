// (21) - Introdução a Arrays - Arrow Functions //

const marcas = [
    {id: 1, nome: 'Antonio'},
    {id: 2, nome: 'Lima'}
];

// Mesma utilidade de uma function (=>)

console.log(marcas.find((marca) => marca.nome === 'a'));