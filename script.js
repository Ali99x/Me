
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





function typeEffect(element, text, callback) {
    let index = 0;
    element.textContent = '';

    function type() {
        if (index < text.length) {
            element.textContent += text.charAt(index);
            index++;
            setTimeout(type, 50); // Adjust typing speed here
        } else if (callback) {
            setTimeout(callback, 500); // Pause before calling the callback
        }
    }

    type();
}

function typeEffect(element, text, callback) {
    let index = 0;
    element.textContent = '';

    function type() {
        if (index < text.length) {
            element.textContent += text.charAt(index);
            index++;
            setTimeout(type, 50); // Adjust typing speed here
        } else if (callback) {
            setTimeout(callback, 500); // Pause before calling the callback
        }
    }

    type();
}
function typeEffect(element, text, callback) {
    let index = 0;
    element.textContent = '';

    function type() {
        if (index < text.length) {
            element.textContent += text.charAt(index);
            index++;
            setTimeout(type, 50); // Adjust typing speed here
        } else if (callback) {
            setTimeout(callback, 500); // Pause before calling the callback
        }
    }

    type();
}

function typeEffect(element, text, callback) {
    let index = 0;
    element.textContent = '';

    function type() {
        if (index < text.length) {
            element.textContent += text.charAt(index);
            index++;
            setTimeout(type, 50); // Adjust typing speed here
        } else if (callback) {
            setTimeout(callback, 500); // Pause before calling the callback
        }
    }

    type();
}

function typeEffect(element, text, callback) {
    let index = 0;
    element.textContent = ''; // Clear any existing text

    function type() {
        if (index < text.length) {
            element.textContent += text.charAt(index);
            index++;
            setTimeout(type, 50); // Adjust typing speed here
        } else if (callback) {
            setTimeout(callback, 500); // Pause before calling the callback
        }
    }

    type();
}

function typeEffect(element, text, callback) {
    let index = 0;
    element.textContent = ''; // Clear any existing text

    function type() {
        if (index < text.length) {
            element.textContent += text.charAt(index);
            index++;
            setTimeout(type, 50); // Adjust typing speed here
        } else if (callback) {
            setTimeout(callback, 500); // Pause before calling the callback
        }
    }

    type();
}

function displayMessages(index) {
    const greetingText = document.getElementById('greeting-text');
    const messages = [
        'مرحبا',
        'أوه انظر..',
        'يمكنك تصفح أدوات الموقع',
        'استمتع بالتصفح!'
    ];

    if (index < messages.length) {
        typeEffect(greetingText, messages[index], () => {
            setTimeout(() => {
                greetingText.textContent = ''; // Clear text for the next message
                displayMessages(index + 1); // Move to next message
            }, 1300); // Delay before clearing text
        });
    } else {
        // Keep the last message visible indefinitely
        greetingText.textContent = messages[messages.length - 1];
        greetingText.style.opacity = '1'; // Ensure the last message is visible
    }
}

// Start displaying messages when the page loads
window.onload = function() {
    const greetingText = document.getElementById('greeting-text');
    greetingText.style.opacity = '1'; // Ensure text is visible
    displayMessages(0); // Start displaying messages
};
