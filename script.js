document.addEventListener('DOMContentLoaded', () => {
    const postForm = document.getElementById('post-form');
    const postsContainer = document.getElementById('posts-container');

    // Load existing posts from localStorage
    loadPosts();

    postForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const title = document.getElementById('post-title').value;
        const content = document.getElementById('post-content').value;

        if (title && content) {
            const post = { title, content, date: new Date().toLocaleString() };
            addPost(post);
            savePost(post); // Save to localStorage
            postForm.reset();
        }
    });

    // Function to add a post to the DOM
    function addPost(post) {
        const postElement = document.createElement('article');
        postElement.classList.add('blog-post');

        const titleElement = document.createElement('h3');
        titleElement.textContent = post.title;

        const contentElement = document.createElement('p');
        contentElement.textContent = post.content;

        const dateElement = document.createElement('small');
        dateElement.textContent = post.date;

        postElement.appendChild(titleElement);
        postElement.appendChild(contentElement);
        postElement.appendChild(dateElement);

        postsContainer.insertBefore(postElement, postsContainer.firstChild);
    }

    // Function to save the post to localStorage
    function savePost(post) {
        let posts = JSON.parse(localStorage.getItem('posts')) || [];
        posts.unshift(post); // Add new post at the beginning of the array
        localStorage.setItem('posts', JSON.stringify(posts));
    }

    // Function to load posts from localStorage and display them
    function loadPosts() {
        const posts = JSON.parse(localStorage.getItem('posts')) || [];
        posts.forEach(post => addPost(post));
    }
});
