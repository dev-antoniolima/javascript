// (10) - Factory Functions //

// camelCase umDoisTresQuatro
function gerarProduto(marca, peso, preco, local) {
    return {
        marca,
        peso,
        preco,
        local
    }

}

const produto = gerarProduto('SONY,','5KG','R$: 750,00','Japão');
console.log(produto);






