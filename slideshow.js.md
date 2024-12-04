# Internal Code Documentation: Slideshow JavaScript

[Linked Table of Contents](#table-of-contents)

## Table of Contents <a name="table-of-contents"></a>

* [1. Overview](#overview)
* [2. Code Description](#code-description)
* [3. `showSlides()` Function Detail](#showslides-function-detail)
* [4. Algorithm Explanation](#algorithm-explanation)


## 1. Overview <a name="overview"></a>

This document details the JavaScript code responsible for implementing a slideshow functionality on a webpage. The slideshow is conditionally activated based on the currently applied stylesheet.  If the stylesheet is `style2.css`, the slideshow automatically displays slides with a 3-second interval.  Otherwise, a message is logged to the console indicating the slideshow is disabled.

## 2. Code Description <a name="code-description"></a>

The JavaScript code uses the `DOMContentLoaded` event listener to ensure the script executes after the page's DOM is fully loaded.  It then performs the following actions:

1. **Selects Slides:** It selects all elements with the class `geode` using `document.querySelectorAll('.geode')` and stores them in the `slides` variable.

2. **Gets Stylesheet:** It retrieves the currently applied stylesheet using `document.getElementById('theme-stylesheet').getAttribute('href')`.

3. **Error Handling:** It checks if any slides were found. If not, it logs an error message to the console.

4. **Conditional Slideshow Activation:** It checks if the current stylesheet is `style2.css`. If true, it proceeds with the slideshow functionality; otherwise, a message is logged to the console.

5. **Slideshow Logic (if `style2.css` is applied):**
    * Initializes `slideIndex` to 0.
    * Defines the `showSlides()` function (detailed below).
    * Calls `showSlides()` to display the first slide initially.
    * Uses `setInterval()` to repeatedly call `showSlides()` every 3 seconds, creating the automatic slideshow effect.


## 3. `showSlides()` Function Detail <a name="showslides-function-detail"></a>

The `showSlides()` function is the core of the slideshow logic. It performs these steps:

1. **Hides all Slides:** It iterates through all slides and sets their `display` style property to `'none'`, effectively hiding them.

2. **Slide Index Management:** It checks if `slideIndex` has exceeded the total number of slides. If so, it resets `slideIndex` to 0, creating a loop.

3. **Displays Current Slide:** It sets the `display` style property of the slide at the current `slideIndex` to `'block'`, making it visible.

4. **Increments Slide Index:** It increments `slideIndex` to prepare for the next slide in the next interval.


## 4. Algorithm Explanation <a name="algorithm-explanation"></a>

The slideshow algorithm is a simple cyclical display mechanism.  It can be summarized as follows:

1. **Initialization:**  The script identifies all slides and the active stylesheet.  If the stylesheet is not `style2.css`, the slideshow is not activated.

2. **Iteration:** The `setInterval()` function repeatedly calls the `showSlides()` function at a fixed interval (3000 milliseconds or 3 seconds).

3. **Hiding and Showing:** Inside `showSlides()`, all slides are first hidden. Then, the slide indicated by `slideIndex` is displayed.

4. **Cycling:** `slideIndex` is incremented after each display.  When `slideIndex` reaches the end of the slide array, it resets to 0, creating a continuous loop of slide presentations.

| Step        | Description                                         | Code Snippet                                      |
|-------------|-----------------------------------------------------|---------------------------------------------------|
| Initialization | Selects slides, gets stylesheet, checks conditions | `const slides = document.querySelectorAll('.geode');` |
| Iteration    | `setInterval()` calls `showSlides()` every 3 seconds | `setInterval(showSlides, 3000);`                  |
| Hiding       | Sets `display: 'none'` for all slides              | `slides.forEach(slide => slide.style.display = 'none');` |
| Showing      | Sets `display: 'block'` for the current slide     | `slides[slideIndex].style.display = 'block';`     |
| Cycling      | Resets `slideIndex` when it exceeds the slide count | `if (slideIndex >= totalSlides) { slideIndex = 0; }` |


The algorithm's simplicity ensures efficient and predictable slideshow behavior.  The use of `setInterval` provides a straightforward way to implement the automatic slide transitions.  Error handling is included to gracefully handle scenarios where no slides are found.
