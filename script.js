
document.addEventListener("DOMContentLoaded", function() {
    const glassContainer = document.getElementById("glass-container");
    setTimeout(() => {
        glassContainer.classList.add("show");
    }, 100); // Delay to show the animation effect
});


document.addEventListener("DOMContentLoaded", function() {
    const glassContainer = document.querySelector(".glass-container");
    setTimeout(() => {
        glassContainer.classList.add("show");
    }, 500); // Delay to show the animation effect
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

let messageIndex = 0;
const messages = [




        'مرحبا !',
        'طاب يومك..',
        'أوه انظر..',
        'هنالك ادوات هنا',
      'عبر الزر اعلاه ↗',
        
'هيا تفضل بالتصفح.',
        'و يمكنك اخباري',
            'اِن احتجت شيئاً.',
           'شكراً لك ^_^'

];
let typingInProgress = false; // Flag to check if typing is in progress

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

    typingInProgress = true; // Set flag to indicate typing is in progress
    type();
}

function displayMessages() {
    const greetingText = document.getElementById('greeting-text');

    if (messageIndex < messages.length) {
        typeEffect(greetingText, messages[messageIndex], () => {
            setTimeout(() => {
                greetingText.textContent = ''; // Clear text for the next message
                messageIndex++;
                displayMessages(); // Move to next message
            }, 1000); // Delay before clearing text
        });
    } else {
        // Keep the last message visible indefinitely
        typingInProgress = false; // Reset flag when done
        greetingText.textContent = messages[messages.length - 1];
        greetingText.style.opacity = '1'; // Ensure the last message is visible
    }
}

function resetMessages() {
    if (!typingInProgress) { // Only reset if typing is not in progress
        messageIndex = 0; // Reset the message index
        displayMessages(); // Start displaying messages again
    }
}

// Start displaying messages when the page loads
window.onload = function() {
    const greetingText = document.getElementById('greeting-text');
    greetingText.style.opacity = '1'; // Ensure text is visible
    displayMessages(); // Start displaying messages

    // Add click event listener to the image only
    const profileImage = document.querySelector('.profile-image');
    profileImage.addEventListener('click', resetMessages);
};



// منع النسخ
document.addEventListener('copy', function(e) {
    e.preventDefault();
});

// منع استخدام قائمة السياق (النقر بزر الفأرة الأيمن)
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});

// منع تحديد النصوص
document.addEventListener('selectstart', function(e) {
    e.preventDefault();
});

document.addEventListener('keydown', function(e) {
    if ((e.ctrlKey && e.key === 'c') || (e.ctrlKey && e.key === 'v')) {
        e.preventDefault();
    }
});
