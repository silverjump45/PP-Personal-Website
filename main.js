const slideshowImages = document.querySelectorAll(".about-me-imgs .slideshow-img");

const nextImageDelay = 3000;
let currentImageCounter = 0;

// sildeshowImages[currentImageCounter].style.display = "block";

setInterval(nextImage, nextImageDelay);

function nextImage() {
    slideshowImages[currentImageCounter].style.display = "none";
    currentImageCounter = (currentImageCounter + 1) % slideshowImages.length;
    slideshowImages[currentImageCounter].style.display = "block"}
}