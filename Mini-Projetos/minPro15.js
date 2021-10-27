// // Mini Projeto(15) - Encontrar número de vezes que uma letra está presente na frase.

var frase = "java";
var letra = 'a';

function contarLetra(frase, letra) {
  var contador = 0

  for (let i = 0; i < frase.length; i++) {
    if (frase[i] == letra) {
      contador++
    }
  }
  return contador;
}


console.log("A letra  " + letra + "  apareceu: " + contarLetra(frase, letra) + " vezes na frase!")















