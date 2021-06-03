// (11) - Constructor Functions //

// Pascal Case - UmDoisTresQuatro
function Celular(marcaCelular, tamanhoTela, capacidadeBateria){
    this.marcaCelular = marcaCelular,
    this.tamanhoTela = tamanhoTela,
    this.capacidadeBateria = capacidadeBateria,

    this.ligar = function(){
        console.log("Fazendo Ligação...")
    }
}

const celular = new Celular ('asus', '5.5', '500mah');
console.log(celular);
