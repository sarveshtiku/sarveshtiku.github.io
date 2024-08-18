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
    content.style.display = 'block'; 
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