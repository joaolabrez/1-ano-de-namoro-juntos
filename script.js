function showMessage() {
    const message = "Eu te amo pra sempre Sabrina Tormes! ❤️";
    const surpriseMessage = document.getElementById('surpriseMessage');
    surpriseMessage.textContent = message;
    surpriseMessage.classList.remove('hidden');
}

function answer(response) {
    if (response === 'sim') {
        alert("Obrigado amor, a gente vai ficar juntos pra sempre, ta? ❤️");
    }
}

function moveNoButton() {
    const button = document.getElementById('noButton');
    const container = document.querySelector('.question-box');
    const containerWidth = container.offsetWidth;
    const containerHeight = container.offsetHeight;
    const buttonWidth = button.offsetWidth;
    const buttonHeight = button.offsetHeight;

    const newX = Math.random() * (containerWidth - buttonWidth);
    const newY = Math.random() * (containerHeight - buttonHeight);

    button.style.position = 'absolute';
    button.style.left = `${newX}px`;
    button.style.top = `${newY}px`;
}

// Pega o botão "Não"
const noButton = document.getElementById('noButton');

// Aplica transição suave
noButton.style.transition = "all 0.3s ease";

// Quando o mouse passar por cima → botão se move
noButton.addEventListener("mouseenter", moveNoButton);
