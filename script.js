
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
    star.style.animationDuration = `${Math.random() * 4 + 3}s`;
    starContainer.appendChild(star);

    setTimeout(() => {
        star.remove();
    }, 9000);
}

setInterval(createStar, 200);

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




const menuButton = document.getElementById('menu-button');
const sideMenu = document.getElementById('side-menu');

// فتح القائمة الجانبية عند الضغط على زر القائمة
menuButton.addEventListener('click', () => {
    sideMenu.classList.toggle('open');
    menuButton.classList.toggle('clicked'); // إضافة أو إزالة الفئة لإحداث الحركة
});

// إغلاق القائمة الجانبية عند النقر في أي مكان داخل الموقع
document.addEventListener('click', (e) => {
    if (!sideMenu.contains(e.target) && e.target !== menuButton) {
        sideMenu.classList.remove('open');
        menuButton.classList.remove('clicked'); // إزالة الفئة عند إغلاق القائمة
    }
});


    // دالة لفتح صفحات الويب عند النقر على أزرار القائمة
    function openPage(url) {
        window.open(url, '_blank');
    }

    // استماع لحدث النقر على أزرار القائمة وفتح الصفحات المناسبة
    sideMenu.querySelectorAll('button').forEach(button => {
        button.addEventListener('click', () => {
            const url = button.dataset.url;
            if (url) {
                openPage(url);
            }
        });
 

 });
function openPage(url) {
    window.location.href = url;
}





function handleClick() {
    const image = document.querySelector('.profile-image');
    const greetingText = document.getElementById('greeting-text');

    // Hide the greeting text
    greetingText.style.opacity = '0';

    // Start bounce, rotate, and color change animation
    image.style.animation = 'bounceRotate 2s, colorChange 2s';

    // Show the greeting text again after the animation ends
    setTimeout(() => {
        image.style.animation = ''; // Clear animation
        greetingText.style.opacity = '1'; // Show the greeting text again
    }, 2000); // Duration of the animation in milliseconds
}




