// Select all images in the slider
const images = document.querySelectorAll('.slider-img');
const modal = document.getElementById('image-modal');
const modalImg = document.getElementById('modal-img');
const closeModal = document.getElementById('close-modal');

// Add click event listener to each image
images.forEach(image => {
    image.addEventListener('click', () => {
        // Open modal and show the clicked image
        modal.style.display = 'flex';
        modalImg.src = image.src; // Set the modal image source to clicked image
        document.body.style.overflow = 'hidden'; // Disable scrolling while modal is open
    });
});

// Close modal when user clicks the close button
closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto'; // Re-enable scrolling
});

// Close modal when user clicks outside the image
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});
