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
