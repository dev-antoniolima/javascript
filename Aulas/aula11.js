// (11) - Constructor Functions //



// Pascal Case - UmDoisTresQuatro
function celular(marcaCelular, tamanhoTela, capacidadeBateria){
    this.marcaCelular = marcaCelular,
    this.tamanhoTela = tamanhoTela,
    this.capacidadeBateria = capacidadeBateria,

    this.ligar = function(){
        console.log("Fazendo Ligação...")
    }
}
