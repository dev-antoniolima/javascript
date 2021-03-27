// Mini Projeto (5) - Determinar se o valor é par ou impar //

exibirTipo(5);

function exibirTipo(limite) {
    for ( let i = 0; i <= limite; i++){
        if ( i % 2 === 0)
            console.log(i, "O número é par");
            else 
            console.log(i, 'O número é impar');
        }
    }
