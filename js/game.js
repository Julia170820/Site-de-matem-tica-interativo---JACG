let num1, num2;

function gerarPergunta() {
  num1 = Math.floor(Math.random() * 10);
  num2 = Math.floor(Math.random() * 10);
  document.getElementById("pergunta").textContent = `Quanto é ${num1} + ${num2}?`;
  document.getElementById("resposta").value = "";
  document.getElementById("resultado").textContent = "";
}

function verificarResposta() {
  const resposta = parseInt(document.getElementById("resposta").value);
  const resultado = document.getElementById("resultado");
  if (resposta === num1 + num2) {
    resultado.textContent = "Parabéns! Resposta correta.";
    resultado.style.color = "green";
  } else {
    resultado.textContent = "Resposta incorreta. Tente novamente.";
    resultado.style.color = "red";
  }
  gerarPergunta();
}

gerarPergunta();
