// Passo 1 – Declarando variáveis
var nomeCantina = "Cantina da Escola";
console.log("Bem-vindo à " + nomeCantina);

let salgados = 20;
console.log("Temos " + salgados + " salgados disponíveis.");

const precoSalgado = 5;
console.log("Cada salgado custa R$" + precoSalgado);

// Passo 2 – Atualizando valores
salgados = salgados - 5;
let totalVendido = 5 * precoSalgado;

console.log("Agora restam " + salgados + " salgados.");
console.log("A cantina vendeu R$" + totalVendido);

// Passo 3 – Teste rápido

// Tentar mudar precoSalgado vai gerar erro
// precoSalgado = 6; // Descomente para testar o erro

if (true) {
  var testeVar = "Sou var"; 
  let testeLet = "Sou let"; 
  console.log(testeVar); // funciona 
  console.log(testeLet); // funciona
} 

console.log(testeVar); // funciona 
// console.log(testeLet); // ERRO: testeLet não está definido fora do bloco

