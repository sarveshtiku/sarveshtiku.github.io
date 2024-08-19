function hideAllContent() {
    var contentAreas = document.querySelectorAll('.nav-tab-page');
    contentAreas.forEach(function(area) {
        area.style.display = 'none';
    });
    var mainPage = document.querySelector('.home-page');
    if (mainPage) {
        mainPage.style.display = 'none';
    }
}

function showContent(contentId) {
    var currentContent = document.getElementById(contentId);
    if (currentContent && currentContent.style.display !== 'block') {
        hideAllContent(); 
        currentContent.style.display = 'block'; 
    }
}

document.getElementById('about-btn').addEventListener('click', function() {
    showContent('about-content');
});

document.getElementById('education-btn').addEventListener('click', function() {
    showContent('education-content');  
});

document.getElementById('communities-btn').addEventListener('click', function() {
    showContent('communities-content');
});

document.getElementById('projects-btn').addEventListener('click', function() {
    showContent('projects-content');  
});

document.getElementById('experience-btn').addEventListener('click', function() {
    showContent('experience-content');  
});

document.getElementById('honors-btn').addEventListener('click', function() {
    showContent('honors-content');  
});

document.getElementById('publications-btn').addEventListener('click', function() {
    showContent('publications-content');  
});

// Check the URL fragment on page load and display the corresponding content
window.addEventListener('DOMContentLoaded', function() {
    var hash = window.location.hash.substring(1).toLowerCase();
    if (hash) {
        showContent(hash + '-content');
    } else {
        showContent('home-page'); // Show the home page by default if no hash is present
    }
});


function randomizeImagePosition() {
    const images = document.querySelectorAll('.full-screen-gallery img');

    images.forEach(img => {
        const randomX = Math.floor(Math.random() * (window.innerWidth - img.clientWidth));
        const randomY = Math.floor(Math.random() * (window.innerHeight - img.clientHeight));

        img.style.left = `${randomX}px`;
        img.style.top = `${randomY}px`;

        // Randomize size (optional)
        const randomSize = Math.random() * 10 + 10; // Between 10vw and 20vw
        img.style.width = `${randomSize}vw`;
        img.style.height = 'auto';
    });
}

// Run the function once the page is loaded
window.onload = randomizeImagePosition;

// Run the function on window resize to adjust positions
window.onresize = randomizeImagePosition;


document.addEventListener("DOMContentLoaded", function() {
    const welcomeText = document.getElementById('welcome-text');
    const messages = ["Yo, what's good? 👋", "Glad you pulled up! ", "You're chillin' at 🛋️", "Sarvesh Tiku's crib 🏠", "Feel free to vibe out "];


    let messageIndex = 0;

    function displayNextMessage() {
        if (messageIndex < messages.length) {
            welcomeText.innerHTML = messages[messageIndex];
            messageIndex++;
            setTimeout(displayNextMessage, 2000); // Change the message every 2 seconds
        } else {
            document.querySelector('.welcome-message').style.display = 'none';
            document.querySelector('.constant-name').style.display = 'block';
        }
    }

    displayNextMessage();
});
