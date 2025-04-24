
let canvas = document.getElementById("gameCanvas");
let ctx = canvas.getContext("2d");

let x = 50, y = 50;
let personagem = new Image();
personagem.src = "images/char_humano.png";

function initGame() {
  window.addEventListener("keydown", moveCharacter);
  personagem.onload = () => {
    draw();
  };
}

function moveCharacter(e) {
  switch (e.key) {
    case "ArrowUp": y -= 10; break;
    case "ArrowDown": y += 10; break;
    case "ArrowLeft": x -= 10; break;
    case "ArrowRight": x += 10; break;
  }
  draw();
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(personagem, x, y, 50, 50);
}

window.onload = initGame;