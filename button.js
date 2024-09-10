document.addEventListener('DOMContentLoaded', function() {
    var navbarToggle = document.querySelector('.name');
    var navbarContent = document.querySelector('.links');
    
    navbarToggle.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent default link behavior
        navbarContent.classList.toggle('collapsed'); // Toggle the collapsed class
    });
});
