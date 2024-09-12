// Array of image data (paths, alt text, and captions)
const images = [
    { src: 'Landing_Page.png', alt: 'Photo 1', caption: 'A Beautiful Moment' },
    { src: 'Landing_Page_2.png', alt: 'Photo 2', caption: 'Memories to Cherish' },
    { src: 'dkd_headshot.png', alt: 'Photo 3', caption: 'Good Times' }
  ];
  
  // Select the gallery element by its ID
  const gallery = document.getElementById('gallery');
  
  // Loop through each image object and create polaroid-style containers
  images.forEach(image => {
    // Create the polaroid container
    const polaroidDiv = document.createElement('div');
    polaroidDiv.classList.add('polaroid');
  
    // Create the image element
    const imgElement = document.createElement('img');
    imgElement.src = image.src;
    imgElement.alt = image.alt;
  
    // Create the caption element
    const captionElement = document.createElement('div');
    captionElement.classList.add('caption');
    captionElement.textContent = image.caption;
  
    // Append the image and caption to the polaroid container
    polaroidDiv.appendChild(imgElement);
    polaroidDiv.appendChild(captionElement);
  
    // Append the polaroid container to the gallery
    gallery.appendChild(polaroidDiv);
  });