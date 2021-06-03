// (12) - Natureza dinâmica de objetos //
const mouse = {
    cor: 'red',
    marca: 'sony'
}

// Criando objetos
mouse.velocidade = 5000;
mouse.trocarDPI = function(){
    console.log('mudando DPI');
}

// Removendo objetos
delete mouse.velocidade;
delete mouse.trocarDPI;


console.log(mouse);