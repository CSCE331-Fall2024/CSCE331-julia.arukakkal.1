document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.geode');
    const stylesheet = document.getElementById('theme-stylesheet');

    console.log('Slides:', slides);
    const totalSlides = slides.length;

    // Check current stylesheet href
    const currentStylesheet = stylesheet.getAttribute('href');
    console.log('Current Stylesheet:', currentStylesheet);

    if (totalSlides === 0) {
        console.error('No slides found. Please check the HTML structure.');
    } else if (currentStylesheet === 'style2.css') { // Replace 'style2.css' with your specific stylesheet
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
    } else {
        console.log('Slide show is not enabled for the current stylesheet.');
    }
});

