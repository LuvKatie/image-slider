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

function nextImage() {
    const nextArrow = document.getElementById("next-arrow");
    const images = document.querySelectorAll(".image-slider > img");
    
    nextArrow.addEventListener("click", () => {
        for (i = 0; i < images.length; i++) {
            if (images[i].classList.contains("active-slide") && images[i + 1] !== undefined) {
                images[i + 1].classList.add("next-active", "active-slide");
                images[i + 1].classList.remove("inactive-slide");
                images[i].classList.remove("first-slide", "next-active", "active-slide");
                images[i].classList.add("inactive-animation");
                return;
            }
        }
    });
}

function prevImage() {
    const prevArrow = document.getElementById("prev-arrow");
    const images = document.querySelectorAll(".image-slider > img");

    prevArrow.addEventListener("click", () => {
        images.forEach(img => {
            if (img.classList.contains("active-slide")) {
                for (i = 0; i <= images.length; i++) {
                    if (img == images[i] && img !== images[0]) {
                        images[i - 1].classList.add("next-active");
                        images[i - 1].classList.remove("inactive-slide");
                        img.classList.add("inactive-animation");
                    }
                }
            }
        })
    });
}

// const corgiImg = document.getElementById("corgi-slide");
// const goldenImg = document.getElementById("golden-slide");
// const pugImg = document.getElementById("pug-slide");
imageClasses();
prevImage();
nextImage();