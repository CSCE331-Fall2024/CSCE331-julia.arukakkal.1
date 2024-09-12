// Array of image data (paths, alt text, and captions)
const images = [
    { src: 'Volunteering/48985042-c33b-4e2f-8317-b5ced45414bc.JPG', alt: 'Photo 1', caption: 'Planning dance fundraiser for juvenile diabetes' },
    { src: 'Volunteering/be417e6f-c252-41ad-b466-f3c195519dba.JPG', alt: 'Photo 2', caption: 'Raised $10,000 for juvenile diabetes' },
    { src: 'Volunteering/IMG_9023.JPG', alt: 'Photo 3', caption: 'Feed My Starving Childen Big Pack Frisco' },
    { src: 'Volunteering/IMG_9194.jpg', alt: 'Photo 3', caption: 'TAMU Gardens - Making Cotton' },
    { src: 'Volunteering/IMG_9196.jpg', alt: 'Photo 3', caption: 'Student Research Week Volunteer' },
    { src: 'Volunteering/IMG_9197.jpg', alt: 'Photo 3', caption: 'Played Piano Recordings & Recitals for Nursing Homes' },
    { src: 'Volunteering/IMG_9198.jpg', alt: 'Photo 3', caption: 'Played Clarinet fo Nursing Homes' },
    { src: 'Volunteering/IMG_9199.jpg', alt: 'Photo 3', caption: 'Designed Flyer for Child Abuse Awareness Event' },
    { src: 'Volunteering/IMG_9201.jpg', alt: 'Photo 3', caption: 'Peer Notetaker' },
    { src: 'Volunteering/IMG_9202.JPG', alt: 'Photo 3', caption: 'Made Blankets for Project Linus' },
    { src: 'Volunteering/IMG_9203.jpg', alt: 'Photo 3', caption: 'Helped Educate Children Globally with STEM articles' },
    { src: 'Volunteering/IMG_9204.jpg', alt: 'Photo 3', caption: 'Made Bookmarks for Children in Hospitals' },
    { src: 'Volunteering/IMG_9205.jpg', alt: 'Photo 3', caption: 'Decorated Boys and Girls Club Library for Christmas' },
    { src: 'Volunteering/IMG_9206.jpg', alt: 'Photo 3', caption: 'More Decorations Boys & Girls Club Christmas' },
    { src: 'Volunteering/IMG_9207.jpg', alt: 'Photo 3', caption: 'Educated Children' }
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