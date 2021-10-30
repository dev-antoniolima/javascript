// Mini Projeto (16) - Verificar CNH

var nome = prompt("Qual é o seu nome ?");
var idade = prompt("Qual é a sua idade ?");
var cnh = false;

if (idade >= 18) {
    var resp = prompt("Tem CNH ? S - SIM, N - NÃO");
    if (resp == "S") {
        cnh = true;
    }
    if (!cnh) {
        alert("Faça sua inscrição");
    }
}
else {
    alert("O candidato " + nome + " não está apto a entrar no sistema");
}
if (cnh) {
    alert("Bem vindo ao sistema ");
}


