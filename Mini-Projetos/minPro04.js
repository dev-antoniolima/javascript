// Mini Projeto (4): Medidor de Velocidade //

// Velocidade máxima de até 70
// a cada 5Km acima do limite, você ganha 1 ponto na carteira
// caso pontos sejam maiores ou iguais a 12 --> "Carteira Supendida"

// Math.Floor() --> Arredonda o valor para o inteiro mais próximo.

verificarVelocidade(130);

function verificarVelocidade(velocidade) {

const velocidadeMaxima = 70;
const kmPorPontos = 5;

if(velocidade <= velocidadeMaxima)
    console.log("ok");

else {
 const pontos = Math.floor(((velocidade - velocidadeMaxima) / kmPorPontos));
 if( pontos >= 12)
 console.log('Carteira Suspensa');

 else 
 console.log("Pontos: ",pontos);
}

}




