const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');
const music = document.getElementById('loveMusic');
const heartsContainer = document.getElementById('heartsContainer');
const message = document.getElementById('message');

// Make "No" button move randomly when hovered
noBtn.addEventListener('mouseenter', () => {
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    noBtn.style.position = 'absolute';
    noBtn.style.left = x + 'px';
    noBtn.style.top = y + 'px';
});

// Yes button click
yesBtn.addEventListener('click', () => {
    music.play();
    showHearts();
    message.classList.remove('hidden');
});

// Hearts animation
function showHearts() {
    for (let i = 0; i < 50; i++) {
        const heart = document.createElement('div');
        heart.textContent = '💖';
        heart.style.position = 'absolute';
        heart.style.left = Math.random() * window.innerWidth + 'px';
        heart.style.top = Math.random() * window.innerHeight + 'px';
        heart.style.fontSize = Math.random() * 30 + 10 + 'px';
        heart.style.animation = `float ${2 + Math.random() * 3}s ease-in infinite`;
        heartsContainer.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 5000);
    }
}

// Hearts keyframes
const style = document.createElement('style');
style.innerHTML = `
@keyframes float {
    0% {transform: translateY(0);}
    50% {transform: translateY(-100px);}
    100% {transform: translateY(-200px); opacity: 0;}
}
`;
document.head.appendChild(style);
