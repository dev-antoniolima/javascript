// (21) - Introdução a Arrays - Encontrando tipos de referência //

const marcas = [
    {id:1, nome:'Antonio'},
    {id:2, nome:'Lima'}
];

 const marca = marcas.find(function(marca){
return marca.nome === 'a'
});

console.log(marca);