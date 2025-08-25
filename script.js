let numeroSecreto = Math.floor(Math.random() * 100) + 1;
let tentativasRestantes = 10;

const inputPalpite = document.getElementById("palpite");
const chute = document.getElementById("chute");
const mensagem = document.getElementById("mensagem");
const tentativas = document.getElementById("tentativas");

tentativas.textContent = `Tentativas restantes: ${tentativasRestantes}`;

chute.addEventListener("click", () => {
  const palpite = parseInt(inputPalpite.value);

  if (isNaN(palpite) || palpite < 1 || palpite > 100) {
    mensagem.textContent = "Digite um número válido entre 1 e 100!";
    return;
  }

  if (palpite === numeroSecreto) {
    mensagem.textContent = `Parabéns! Você acertou! O número secreto era ${numeroSecreto}`;
    chute.disabled = true;
    inputPalpite.disabled = true;
  } else if (palpite < numeroSecreto) {
    mensagem.textContent = "O número secreto é maior";
  } else {
    mensagem.textContent = "O número secreto é menor";
  }

  tentativasRestantes--;
  tentativas.textContent = `Tentativas restantes: ${tentativasRestantes}`;

  if (tentativasRestantes === 0 && palpite !== numeroSecreto) {
    mensagem.textContent = `Você perdeu! O número secreto era ${numeroSecreto}`;
    chute.disabled = true;
    inputPalpite.disabled = true;
  }

  
  inputPalpite.value = "";
  inputPalpite.focus();
  
});
