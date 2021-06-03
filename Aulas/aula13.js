// (13) - Clonando objetos //

const celular = {
    marcaCelular: 'Asus',
    tamanhoTela: {
        vertical: 155,
        horizontal: 75
    },

    ligar: function () {
        console.log("Fazendo Ligação...");
    }
}

// {} - Propiedades do próprio novoObjeto;
// () - Propriedades clonadas de outra constante;

const novoObjeto = Object.assign({bateria: 5000},celular);
console.log(novoObjeto);