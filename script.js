let score = 0;
const ball = document.getElementById('ball');
const scoreDisplay = document.getElementById('score');

function moveBall() {
    const gameArea = document.getElementById('gameArea');
    const maxWidth = gameArea.clientWidth - ball.clientWidth;
    const maxHeight = gameArea.clientHeight - ball.clientHeight;

    const randomX = Math.floor(Math.random() * maxWidth);
    const randomY = Math.floor(Math.random() * maxHeight);

    ball.style.left = randomX + 'px';
    ball.style.top = randomY + 'px';
}

ball.addEventListener('click', () => {
    score++;
    scoreDisplay.textContent = `Score: ${score}`;
    moveBall();
});

// Move the ball for the first time
moveBall();

// Move the ball every second
setInterval(moveBall, 1000);