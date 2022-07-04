//Consegue pegar a referência pro objeto o qual deve ser movido.
const container = document.querySelector(".container"); //Cenario
const explosao = document.querySelector(".explosao");
const start = document.querySelector(".start");

//Alvo ou Inimigo
const nave = document.createElement("img");
nave.setAttribute("class", "nave");
nave.setAttribute("src", "../img/dark.png");

const contHeight = container.offsetHeight;
const contWidth = container.offsetWidth;

//Gerador de posições aleatórias + intervalo do inimigo
setInterval(() => {
  const randTop = Math.random() * (400 - 100) + 100;
  const randLeft = Math.random() * (400 - 100) + 100;

  nave.style.position = "relative";
  nave.style.top = randTop + "px";
  nave.style.left = randLeft + "px";
}, 1000);

let score = 0;
const acertos = document.querySelector(".acertos");

//Iniciar o jogo + mudar o botão para número de acertos + iniciar o tempo
start.addEventListener("click", () => {
  container.appendChild(nave);

  acertos.innerText = "acertos: " + score;

  sec = 10;
  score = 0;
  c = 0;
  watch();
  interval = setInterval(watch, 10);

});

//Selecionando o alvo 
window.addEventListener("click", (e) => {
  explosao.style.top = e.pageY + "px";
  explosao.style.left = e.pageX + "px";

  if (e.target === nave) score++;

  acertos.innerText = "acertos: " + score;
});

//Propriedade cursor
const cursor = document.querySelector(".cursor");
window.addEventListener("mousemove", (e) => {
  cursor.style.top = e.pageY + "px";
  cursor.style.left = e.pageX + "px";
});

//Cronometro
let sec = 0;
let miliSec = 0;
let interval;

function twoDigits(digit) {
  if (digit < 10) {
    return ('0' + digit)
  } else {
    return (digit)
  }
}

function watch() {
  miliSec--
  if (miliSec < 0) {
    sec--
    miliSec = 60
  }
  if (sec == 0 && miliSec == 0) {
    clearInterval(interval);

    //History
    let lista = document.querySelector("#lista_historico");
    let x;

    //Mensagem na tela
    // Tempo vai ser definito como 10:00, pois aqui o jogo vai levar o tempo até o fim
    let nome = prompt("Digite seu nome:\n" + 'Acertos: ' + score + '\n' + 'Tempo: 10:00'
      + '\n' + 'Tentativas: ' + c);
    let li = document.createElement("li");

    //Criação de elemento na lista
    if (nome != null) {
      x = "Nome: " + nome + " - Acertos: " + score + ' - Tempo: 10:00'
        + ' - Tentativas: ' + c;

      li.innerHTML = x;
      lista.appendChild(li);
    }
    sec = 10;
  }
  document.getElementById('tempo').innerHTML = twoDigits(sec) + ':' + twoDigits(miliSec);
}

function resetJogo() {
  //reiniciar a página - document.location.reload(true);

  /*Caso o jogo seja cancelado, surge uma popup pedindo o nome do jogador, para que assim seus dados sejam salvo

  let hTime = twoDigits(sec) + ':' + twoDigits(miliSec);

  //Mensagem na tela
  // Tempo vai ser definito como hTime, pois quando o jogador cancelar o jogo pegamos o intervalo de tempo em que ele estava.
    let nomeH = prompt("Digite seu nome:\n" + 'Acertos: ' + score + '\n' + 'Tempo: ' + hTime
      + '\n' + 'Tentativas: ' + c);
    let liH = document.createElement("liH");

    //Criação de elemento na lista
    if (nomeH != null) {
      x = "Nome: " + nomeH + " - Acertos: " + score + ' - Tempo: ' + hTime
        + ' - Tentativas: ' + c;

      liH.innerHTML = x;
      lista.appendChild(liH);
    }
  */

  //Voltar cronometro
  sec = 10;
  miliSec = 0;
  clearInterval(interval)
  document.getElementById('tempo').innerText = twoDigits(sec) + ':' + twoDigits(miliSec);

  //Voltar Acertos
  score = 00;
  acertos.innerText = "acertos: " + score;

  //Voltar Tentativas
  c = 0;
  document.getElementById('tent').innerText = 'tentativas: ' + c;

  //Tirar o alvo
  //container.parentNode.removeChild('.nave');

}

//Número de tentativas
let tent = document.getElementById("cenario");
const tentativas = document.querySelector(".tent");
let c = 0;

tent.addEventListener("click", function(event) {
  c++;
  tentativas.innerText = "tentativas: " + c;
});