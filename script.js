
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    initStars(); // إعادة تهيئة النجوم عند تغيير حجم النافذة
});






const starContainer = document.getElementById('star-container');

function createStar() {
    const star = document.createElement('div');
    star.classList.add('star');
    star.style.left = `${Math.random() * 100}%`;
    star.style.animationDuration = `${Math.random() * 3 + 2}s`;
    starContainer.appendChild(star);

    setTimeout(() => {
        star.remove();
    }, 5000);
}

setInterval(createStar, 100);

const starStyle = document.createElement('style');
starStyle.innerHTML = `
    .star {
        position: absolute;
        top: -10px;
        width: 5px;
        height: 5px;
        background-color: white;
        border-radius: 50%;
        box-shadow: 0 0 10px white;
        animation: fall linear infinite;
    }

    @keyframes fall {
        to {
            transform: translateY(100vh);
        }
    }
`;
document.head.appendChild(starStyle);










