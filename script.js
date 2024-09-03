function showMessage() {
    const message = "Eu te amo muito! ❤️";
    const surpriseMessage = document.getElementById('surpriseMessage');
    surpriseMessage.textContent = message;
    surpriseMessage.classList.remove('hidden');
}

function answer(response) {
    if (response === 'nao') {
        moveNoButton();
    } else {
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
