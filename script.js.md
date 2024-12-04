# Internal Code Documentation: Blog Post Application

[Linked Table of Contents](#table-of-contents)

## <a name="table-of-contents"></a>Table of Contents

* [1. Overview](#overview)
* [2. Code Structure and Logic](#code-structure)
    * [2.1. Event Listeners](#event-listeners)
    * [2.2. `addPost` Function](#addpost-function)
    * [2.3. `savePost` Function](#savepost-function)
    * [2.4. `loadPosts` Function](#loadposts-function)
* [3. Data Handling](#data-handling)


## <a name="overview"></a>1. Overview

This document details the JavaScript code for a simple blog post application.  The application allows users to create and display blog posts. Posts are stored in the browser's `localStorage` for persistence between sessions.


## <a name="code-structure"></a>2. Code Structure and Logic

The code utilizes `DOMContentLoaded` event listener to ensure that the script executes after the page's DOM is fully loaded.  The core functionality is divided into several functions: event handling, post creation (`addPost`), local storage management (`savePost`, `loadPosts`).


### <a name="event-listeners"></a>2.1. Event Listeners

The code starts by attaching two event listeners:

1.  **`DOMContentLoaded`**: This listener ensures that all the DOM elements are loaded before executing the rest of the JavaScript code.  This prevents errors caused by trying to access elements that haven't been rendered yet.

2.  **`submit` event on `postForm`**: This listener is attached to the form with the ID "post-form". When the form is submitted:
    * It prevents the default form submission behavior (`e.preventDefault()`).
    * It retrieves the title and content from the input fields.
    * It validates that both title and content are provided.
    * If valid, it creates a `post` object containing the title, content, and the current date.
    * The `addPost` function is called to display the post on the page.
    * The `savePost` function is called to persist the post in `localStorage`.
    * Finally, the form is reset using `postForm.reset()`.


### <a name="addpost-function"></a>2.2. `addPost` Function

The `addPost` function is responsible for creating and adding a new post element to the DOM.  The algorithm is as follows:

1.  A new `<article>` element is created and assigned the class "blog-post".
2.  `<h3`>, `<p>`, and `<small>` elements are created for the title, content, and date respectively.
3.  The text content of these elements is set using the data from the `post` object.
4.  The title, content, and date elements are appended to the `<article>` element.
5.  The new `<article>` element (representing the post) is inserted at the beginning of the `postsContainer` element (using `insertBefore`) to ensure the newest post appears at the top.

| Step | Description | Code Snippet |
|---|---|---|
| 1 | Create article element | `const postElement = document.createElement('article');` |
| 2 | Create and populate title element | `titleElement.textContent = post.title;` |
| 3 | Create and populate content element | `contentElement.textContent = post.content;` |
| 4 | Create and populate date element | `dateElement.textContent = post.date;` |
| 5 | Append elements and insert into DOM | `postsContainer.insertBefore(postElement, postsContainer.firstChild);` |


### <a name="savepost-function"></a>2.3. `savePost` Function

The `savePost` function handles saving the new post to the browser's `localStorage`.

1. It retrieves existing posts from `localStorage` using `localStorage.getItem('posts')`.  If no posts exist, it initializes an empty array.
2.  The new post is added to the beginning of the array using `unshift`. This ensures that the latest posts are displayed first.
3. The updated array of posts is stringified using `JSON.stringify` and saved back to `localStorage` using `localStorage.setItem('posts', JSON.stringify(posts));`.

### <a name="loadposts-function"></a>2.4. `loadPosts` Function

The `loadPosts` function retrieves and displays posts from `localStorage` when the page loads.

1. It retrieves the posts from `localStorage` similar to `savePost`.
2. It iterates through each post in the array using `forEach`.
3. For each post, it calls the `addPost` function to display it on the page.


## <a name="data-handling"></a>3. Data Handling

The application uses `localStorage` to store and retrieve blog posts.  Posts are stored as a JSON array.  This approach provides simple persistence for the application's data within the user's browser.  The use of `JSON.parse` and `JSON.stringify` ensures proper data serialization and deserialization.
