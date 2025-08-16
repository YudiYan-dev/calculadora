var tela = document.getElementById("result");

function add(valor) {
    if (tela.innerText === "0") {
        tela.innerText = valor
    } else {
        tela.innerText += valor
    }
}

function limpar() {
    tela.innerText = "0"
}

function calcular() {
    try { // Tenta executar oque está dentro do bloco 
        tela.innerText = eval(tela.innerText) // Executa string como se fosse código ex: "2 + 3" retorna 5
    } catch (e) { // Se houver algum erro do usuário, retorna: "Erro"
        tela.innerText = "Erro"
    }
}