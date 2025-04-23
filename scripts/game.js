let canvas = document.getElementById("gameCanvas");
let ctx = canvas.getContext("2d");
let x = 50, y = 50;

function initGame() {
    window.addEventListener("keydown", moveCharacter);
    draw();
}

function moveCharacter(e) {
    switch(e.key) {
        case "ArrowUp": y -= 10; break;
        case "ArrowDown": y += 10; break;
        case "ArrowLeft": x -= 10; break;
        case "ArrowRight": x += 10; break;
    }
    draw();
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#0f0";
    ctx.fillRect(x, y, 30, 30);
}

window.onload = initGame;