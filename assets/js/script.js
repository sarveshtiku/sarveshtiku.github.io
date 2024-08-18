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
    hideAllContent(); 
    var content = document.getElementById(contentId);
    if (content) {
        content.style.display = 'block'; 
    }
}

document.getElementById('about-btn').addEventListener('click', function() {
    showContent('about-content');
    history.pushState(null, '', '#about');
});

document.getElementById('education-btn').addEventListener('click', function() {
    showContent('education-content');  
    history.pushState(null, '', '#education');
});

document.getElementById('communities-btn').addEventListener('click', function() {
    showContent('communities-content');
    history.pushState(null, '', '#communities');
});

document.getElementById('projects-btn').addEventListener('click', function() {
    showContent('projects-content');  
    history.pushState(null, '', '#projects');
});

document.getElementById('experience-btn').addEventListener('click', function() {
    showContent('experience-content');  
    history.pushState(null, '', '#experience');
});

document.getElementById('honors-btn').addEventListener('click', function() {
    showContent('honors-content');  
    history.pushState(null, '', '#honors');
});

document.getElementById('publications-btn').addEventListener('click', function() {
    showContent('publications-content');  
    history.pushState(null, '', '#publications');
});

window.addEventListener('DOMContentLoaded', function() {
    var hash = window.location.hash.substring(1).toLowerCase();
    if (hash) {
        showContent(hash + '-content');
    } else {
        showContent('home-page');
    }
});
