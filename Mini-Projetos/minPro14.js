// Mini Projeto (14) - Faixa de Preço //

function faixa(tooltip, minimo, maximo){
    
      return {
          tooltip,
          minimo,
          maximo
      }

    
}

 let faixas = [
     faixa('exibir1', 'R$: 1000,00', 'R$: 2000,00'),
     faixa('exibir2', 'R$: 2000,00', 'R$: 4000,00'),
     faixa('exibir3', 'R$: 3000,00', 'R$: 6000,00')
 ]

 console.log(faixas);