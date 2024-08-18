debugger;
// This function hides all content initially
function hideAllContent() {
    var contentAreas = document.querySelectorAll('.content');
    contentAreas.forEach(function(area) {
        area.style.display = 'none';
    });
}

// Function to show only the requested content area
function showContent(contentId) {
    hideAllContent();  // First, hide all content
    var content = document.getElementById(contentId);
    content.style.display = 'block';  // Then, show the requested content
}

// Adding listeners to each nav item
document.getElementById('about-btn').addEventListener('click', function() {
    showContent('about-content');
});

document.getElementById('education-btn').addEventListener('click', function() {
    showContent('education-content');  // Assuming you have an education-content div
});

document.getElementById('communities-btn').addEventListener('click', function() {
    showContent('communities-content');  // Assuming a communities-content div
});

document.getElementById('projects-btn').addEventListener('click', function() {
    showContent('projects-content');  // Assuming a projects-content div
});

document.getElementById('experience-btn').addEventListener('click', function() {
    showContent('experience-content');  // Assuming an experience-content div
});

document.getElementById('socials-btn').addEventListener('click', function() {
    showContent('socials-content');  // Assuming a socials-content div
})

// document.getElementById('about-btn').addEventListener('click', function() {
//     var aboutContent = document.getElementById('about-content');
//     if (aboutContent.style.display === 'block') {
//         aboutContent.style.display = 'none';
//     } else {
//         aboutContent.style.display = 'block';
//     }
// });