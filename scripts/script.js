function imgIndicators() {
    const images = document.querySelectorAll(".image-slider > img");
    const indicatorContainer = document.getElementById("image-indicator");
    const length = images.length;
    
    for (let i = 0; i < length; i++) {
        const indicator = document.createElement("div");
        indicator.classList.add("indicator");
        if (i == 0) {
            indicator.classList.add("active-indicator");
        }
        indicatorContainer.appendChild(indicator);
    }
}

function indicatorEvents() {
    const images = document.querySelectorAll(".image-slider > img");
    const indicators = document.querySelectorAll(".indicator");
    const indicatorArr = Array.from(indicators);

    indicators.forEach(indi => {
        indi.addEventListener("click", () => {
            const index = indicatorArr.indexOf(indi);
            images.forEach(img => {
                if (img.classList.contains("active-slide")) {
                    img.className = "inactive-slide";
                    return;
                }
            });
            images[index].className = "active-slide";
            indicatorStyling();
        });
    });
}

function indicatorStyling() {
    const images = document.querySelectorAll(".image-slider > img");
    const indicators = document.querySelectorAll(".indicator");
    const imagesArr = Array.from(images);

    images.forEach(img => {
        if (img.classList.contains("active-slide")) {
            const index = imagesArr.indexOf(img);
            indicators.forEach(indi => {
                if (indi.classList.contains("active-indicator")) {
                    indi.classList.remove("active-indicator");
                }
            });
            indicators[index].classList.add("active-indicator");
        }
    })
}

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
    scrollImage.classList.remove("inactive-slide", "inactive-animation");
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
                indicatorStyling();
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
                indicatorStyling();
                return;
            }
        }
    });
}

const slideInterval = setInterval(function () {
    const images = document.querySelectorAll(".image-slider > img");
    const length = images.length;

    for (i = 0; i < length; i++) {
        if (images[i].classList.contains("active-slide") && images[i + 1] !== undefined) {
            scrollAnimation(images[i + 1], images[i], "next-active");
            indicatorStyling();
            return;
        }

        if (images[i + 1] == undefined) {
            scrollAnimation(images[0], images[i], "next-active");
            indicatorStyling();
            return;
        }
    }
    
}, 5000);

imgIndicators();
imageClasses();
prevImage();
nextImage();
indicatorEvents();
