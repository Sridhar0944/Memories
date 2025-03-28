// Open Lightbox
function openLightBox(img) {
    let lightbox = document.getElementById("lightbox");
    let lightboxImg = document.getElementById("lightbox-img");

    lightbox.style.display = "flex";
    lightbox.style.width = "90%";
    lightbox.style.height ="90%";
    lightboxImg.src = img.src;
}

// Close Lightbox
function closeLightBox() {
    document.getElementById("lightbox").style.display = "none";
}

