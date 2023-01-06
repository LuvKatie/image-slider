function imageClasses() {
    const images = document.querySelectorAll(".image-slider > img");

    images.forEach(img => {
        if(img == images[0]) {
            img.classList.add("active-slide");
        } else {
            img.classList.add("inactive-slide");
        }
    })
}

function scrollAnimation(scrollImage, currImage, imgClass) {
    scrollImage.classList.add(`${imgClass}`, "active-slide");
    scrollImage.classList.remove("inactive-slide");
    currImage.className = "";
    currImage.classList.add("inactive-animation", "inactive-slide");
}

function nextImage() {
    const nextArrow = document.getElementById("next-arrow");
    const images = document.querySelectorAll(".image-slider > img");
    
    nextArrow.addEventListener("click", () => {
        for (i = 0; i < images.length; i++) {
            if (images[i].classList.contains("active-slide") && images[i + 1] !== undefined) {
                scrollAnimation(images[i + 1], images[i], "next-active");
                return;
            }
        }
    });
}

function prevImage() {
    const prevArrow = document.getElementById("prev-arrow");
    const images = document.querySelectorAll(".image-slider > img");

    prevArrow.addEventListener("click", () => {
        for (i = 0; i < images.length; i++) {
            if (images[i].classList.contains("active-slide") && images[i] !== images[0]) {
                scrollAnimation(images[i - 1], images[i], "prev-active");
                return;
            }
        }
    });
}

// const corgiImg = document.getElementById("corgi-slide");
// const goldenImg = document.getElementById("golden-slide");
// const pugImg = document.getElementById("pug-slide");
imageClasses();
prevImage();
nextImage();