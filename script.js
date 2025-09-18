var nomeCantina = "Cantina da Escola";
let salgados = 20;
const precoSalgado = 5;
let totalVendido = 0;

// Pegando a div onde vamos mostrar as informações
let saida = document.getElementById("saida");

// Função para mostrar status da cantina
function mostrarStatus() {
    saida.innerHTML = `
        <h2>${nomeCantina}</h2>
        <p>Temos <strong>${salgados}</strong> salgados disponíveis.</p>
        <p>Cada salgado custa <strong>R$${precoSalgado}</strong>.</p>
        <p>Total vendido até agora: <strong>R$${totalVendido}</strong>.</p>
        <button onclick="comprar(1)">Comprar 1 salgado</button>
        <button onclick="comprar(5)">Comprar 5 salgados</button>
    `;
}

// Função para comprar salgados
function comprar(qtd) {
    if (salgados >= qtd) {
        salgados -= qtd;
        totalVendido += qtd * precoSalgado;
        mostrarStatus();
    } else {
        alert("Não temos salgados suficientes!");
    }
}

// Chama a função ao carregar
mostrarStatus();

// Testes de var, let e const
console.log("=== Testando var, let e const ===");

if (true) {
    var testeVar = "Sou var";
    let testeLet = "Sou let";

    console.log("Dentro do bloco →", testeVar);
    console.log("Dentro do bloco →", testeLet);
}

console.log("Fora do bloco →", testeVar);

try {
    console.log("Fora do bloco →", testeLet);
} catch (erro) {
    console.log("Fora do bloco → ERRO:", erro.message);
}

try {
    precoSalgado = 6;
} catch (erro) {
    console.log("Tentando alterar const → ERRO:", erro.message);
}