// Mini Projeto (9) - Contador de asteriscos //

exibirAsteriscos(10);

function exibirAsteriscos(linhas) {
    let padrao = '';
    for ( let linha = 1; linha <= linhas; linha++){
        padrao += '*';
        console.log(padrao);
    }
}