document.addEventListener('DOMContentLoaded', () => {
    const postForm = document.getElementById('post-form');
    const postsContainer = document.getElementById('posts-container');

    postForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const title = document.getElementById('post-title').value;
        const content = document.getElementById('post-content').value;

        if (title && content) {
            addPost(title, content);
            postForm.reset();
        }
    });

    function addPost(title, content) {
        const postElement = document.createElement('article');
        postElement.classList.add('blog-post');

        const titleElement = document.createElement('h3');
        titleElement.textContent = title;

        const contentElement = document.createElement('p');
        contentElement.textContent = content;

        const dateElement = document.createElement('small');
        dateElement.textContent = new Date().toLocaleString();

        postElement.appendChild(titleElement);
        postElement.appendChild(contentElement);
        postElement.appendChild(dateElement);

        postsContainer.insertBefore(postElement, postsContainer.firstChild);
    }
});
