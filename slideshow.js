// Select all .geode elements and store them in a NodeList
const slides = document.querySelectorAll('.geode');
console.log('Slides:', slides);
const totalSlides = slides.length;

if (totalSlides === 0) {
    console.error('No slides found. Please check the HTML structure.');
} else {
    let slideIndex = 0; // Start from the first slide

    function showSlides() {
        // Hide all slides
        slides.forEach(slide => {
            slide.style.display = 'none'; // Hide each slide
        });

        // Ensure slideIndex is within bounds before displaying a slide
        if (slideIndex >= totalSlides) {
            slideIndex = 0; // Reset to the first slide
        }

        // Display the current slide
        slides[slideIndex].style.display = 'block';

        // Move to the next slide for the next interval
        slideIndex++;
    }

    // Show the first slide initially
    showSlides();

    // Automatically switch slides every 3 seconds
    setInterval(showSlides, 3000);
}
