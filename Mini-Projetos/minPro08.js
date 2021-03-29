// Mini Projeto (8) - Média de Nota Escolar //

// Obter a média a partir de um array

// 0 - 59: F
// 60 - 69: D
// 70 - 79: C
// 80 - 89: D
// 90 - 100: A

const array = [70,70,80];

console.log(mediaDoAluno(array));


function calcularMedia(array) {

 let soma = 0;
  for (let valor of array) {
      soma += valor;
  }

  return media = soma/(array.length);

}


function mediaDoAluno(notas) {
 
const media = calcularMedia(notas);

if (media <= 59) return 'F';
if (media <= 69) return 'D';
if (media <= 79) return 'C';
if (media <= 89) return 'B';
if (media <= 100) return 'A';

}