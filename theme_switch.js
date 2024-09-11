/*document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('toggle-theme');
    const stylesheet = document.getElementById('theme-stylesheet');
    
    const stylesheet1 = 'mystyle.css';
    const stylesheet2 = 'style2.css';

    function loadScript(url, callback) {
        const script = document.createElement('script');
        script.src = url;
        script.onload = callback;
        script.onerror = (error) => console.error('Error loading script:', error);
        document.body.appendChild(script);
    }
    console.log('Initial Stylesheet:', stylesheet.getAttribute('href'));
    // Load the saved theme from localStorage or default to stylesheet1
    const savedTheme = localStorage.getItem('theme') || stylesheet1;
    stylesheet.setAttribute('href', savedTheme);
    button.addEventListener('click', () => {
        const currentTheme = stylesheet.getAttribute('href');
        const newTheme = (currentTheme === stylesheet1) ? stylesheet2 : stylesheet1;
        stylesheet.setAttribute('href', newTheme);
        localStorage.setItem('theme', newTheme); // Save the selected theme
        const existingScript = document.getElementById('conditional-script');
        if (existingScript) {
            existingScript.remove();
        }

        // Load the new script
        if (newTheme === stylesheet2){
        loadScript('slideshow.js', () => {
            console.log('Slideshow script loaded successfully.');
        });
    }
    });
});
    if (newTheme === stylesheet1){
        const script = document.getElementById('conditional-script');
        if (script) {
            script.parentNode.removeChild(script);
        }
        else{
            const existingScript = document.getElementById('conditional-script');
            if (!existingScript) {
                const script = document.createElement('script');
                script.id = 'conditional-script';
                script.src = 'slideshow.js'; // Path to your script file
                document.head.appendChild(script);
            }
        }
    }
});*/

document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('toggle-theme');
    const stylesheet = document.getElementById('theme-stylesheet');
    
    const stylesheet1 = 'mystyle.css';
    const stylesheet2 = 'style2.css';

    console.log('Initial Stylesheet:', stylesheet.getAttribute('href'));

    // Load the saved theme from localStorage or default to stylesheet1
    const savedTheme = localStorage.getItem('theme') || stylesheet1;
    stylesheet.setAttribute('href', savedTheme);

    function loadScript(url) {
        return new Promise((resolve, reject) => {
            const script = document.createElement('script');
            script.src = url;
            script.id = 'slideshow-script'; // Add an ID to manage the script
            script.onload = () => {
                console.log('Script loaded successfully.');
                resolve(script);
            };
            script.onerror = (error) => {
                console.error('Error loading script:', error);
                reject(error);
            };
            document.body.appendChild(script);
            window.location.reload();
        });
    }

    function unloadScript() {
        const existingScript = document.getElementById('slideshow-script');
        if (existingScript) {
            existingScript.remove();
        }
        window.location.reload();
        console.log('Slideshow script unloaded successfully.');
    }

    button.addEventListener('click', async () => {
        const currentTheme = stylesheet.getAttribute('href');
        const newTheme = (currentTheme === stylesheet1) ? stylesheet2 : stylesheet1;
        stylesheet.setAttribute('href', newTheme);
        localStorage.setItem('theme', newTheme); // Save the selected theme
        
        if (newTheme === stylesheet2) {
            // Load the slideshow script only if stylesheet2 is active
            try {
                await loadScript('slideshow.js');
                console.log('Slideshow script loaded successfully.');
            } catch (error) {
                console.error('Error loading slideshow script:', error);
            }
        } else {
            // Remove the slideshow script if the theme is not stylesheet2
            unloadScript();
        }
    });
});


