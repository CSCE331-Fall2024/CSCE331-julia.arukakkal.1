# Internal Code Documentation: Theme Toggler

## Table of Contents

* [1. Overview](#1-overview)
* [2. Code Structure](#2-code-structure)
* [3. Functions](#3-functions)
    * [3.1 `loadScript(url)`](#31-loadscripturl)
    * [3.2 `unloadScript()`](#32-unloadscript)
* [4. Event Handling](#4-event-handling)


## 1. Overview

This document details the functionality and implementation of the theme toggler JavaScript code.  The code dynamically switches between two stylesheets (`mystyle.css` and `style2.css`), persisting the selection in the browser's `localStorage`.  It also conditionally loads and unloads an external script (`slideshow.js`) based on the active stylesheet.


## 2. Code Structure

The code utilizes the `DOMContentLoaded` event listener to ensure that all DOM elements are loaded before executing the theme toggling logic. It primarily interacts with:

*   **`button`:**  The button element that triggers the theme change (ID: `toggle-theme`).
*   **`stylesheet`:** The `<link>` element containing the stylesheet (ID: `theme-stylesheet`).
*   **`localStorage`:**  Browser storage for persisting the selected theme.
*   **`slideshow.js`:** An external script conditionally loaded or unloaded.

The core logic involves:

1.  Retrieving the saved theme from `localStorage` or defaulting to `mystyle.css`.
2.  Setting the `href` attribute of the `<link>` element to apply the selected theme.
3.  Adding an event listener to the button to handle theme switching.
4.  Conditionally loading or unloading `slideshow.js` based on the selected theme.


## 3. Functions

### 3.1 `loadScript(url)`

This function asynchronously loads an external JavaScript script.

| Parameter       | Type    | Description                                                                 |
| --------------- | -------- | ------------------------------------------------------------------------------ |
| `url`           | String  | The URL of the script to be loaded.                                           |

**Algorithm:**

1.  Creates a new `<script>` element.
2.  Sets the `src` attribute to the provided `url` and sets an `id` to `slideshow-script` for management.
3.  Attaches an `onload` event handler that resolves a Promise when the script loads successfully, logging a success message to the console.
4.  Attaches an `onerror` event handler that rejects the Promise if an error occurs during loading, logging the error to the console.
5.  Appends the `<script>` element to the `document.body`.
6.  Reloads the page using `window.location.reload()` to ensure the newly loaded script's changes are reflected immediately.  This is a less than ideal solution and should be replaced with a more elegant approach in a production environment.  The reload could be omitted if the script doesn't make changes that directly affect the DOM.
7.  Returns a Promise that resolves with the successfully loaded script element or rejects with an error.


### 3.2 `unloadScript()`

This function removes the slideshow script from the DOM if it exists.

**Algorithm:**

1.  Gets a reference to the script element with the id `slideshow-script`.
2.  If the script element exists, it removes it from the DOM using `remove()`.
3.  Reloads the page using `window.location.reload()` to reflect the removal of the script.  Again, this is not the optimal solution for production and should be improved.
4. Logs a success message to the console.



## 4. Event Handling

The `DOMContentLoaded` event listener ensures the code executes after the page's DOM is fully loaded.  The click event listener attached to the theme toggle button triggers the following actions:

1.  Gets the currently active theme from the stylesheet's `href` attribute.
2.  Determines the new theme based on the current theme (toggling between `stylesheet1` and `stylesheet2`).
3.  Updates the stylesheet's `href` attribute with the new theme.
4.  Saves the new theme to `localStorage`.
5.  If the new theme is `stylesheet2`, it calls the `loadScript` function to load `slideshow.js` using `async/await` for proper asynchronous handling.  Error handling is included using a `try...catch` block.
6.  If the new theme is `stylesheet1`, it calls the `unloadScript` function to remove the `slideshow.js` script.

The use of `async/await` ensures that the theme switch is completed before the next action, preventing potential race conditions.  The error handling in `loadScript` and the use of promises ensures that the application remains responsive even if there are issues loading the external script.
