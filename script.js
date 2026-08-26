// =========================
// PHOTOGRAPHY FILTER
// =========================

const filterButtons =
    document.querySelectorAll(".filter-btn");

const photoGalleries =
    document.querySelectorAll(".photo-gallery");


filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        const category =
            button.dataset.category;


        // Remove active button

        filterButtons.forEach(btn => {

            btn.classList.remove("active");

        });


        // Activate clicked button

        button.classList.add("active");


        // Hide galleries

        photoGalleries.forEach(gallery => {

            gallery.classList.remove(
                "active-gallery"
            );

        });


        // Show selected gallery

        const selectedGallery =
            document.querySelector(
                `.photo-gallery[data-gallery="${category}"]`
            );


        if (selectedGallery) {

            selectedGallery.classList.add(
                "active-gallery"
            );

        }

    });

});



// =========================
// PHOTO LIGHTBOX
// =========================

const lightbox =
    document.getElementById("lightbox");

const lightboxImage =
    document.getElementById("lightbox-image");

const lightboxCounter =
    document.getElementById("lightbox-counter");

const closeButton =
    document.querySelector(".lightbox-close");

const previousButton =
    document.querySelector(".lightbox-prev");

const nextButton =
    document.querySelector(".lightbox-next");



let currentImages = [];

let currentIndex = 0;



// =========================
// GET ACTIVE GALLERY IMAGES
// =========================

function getActiveImages() {

    const activeGallery =
        document.querySelector(
            ".photo-gallery.active-gallery"
        );


    if (!activeGallery) {

        return [];

    }


    return Array.from(
        activeGallery.querySelectorAll("img")
    );

}



// =========================
// OPEN LIGHTBOX
// =========================

function openLightbox(index) {

    currentImages =
        getActiveImages();


    if (
        currentImages.length === 0 ||
        !currentImages[index]
    ) {

        return;

    }


    currentIndex = index;


    lightboxImage.src =
        currentImages[currentIndex].src;


    lightboxImage.alt =
        currentImages[currentIndex].alt;


    updateCounter();


    lightbox.classList.add("show");


    document.body.style.overflow = "hidden";

}



// =========================
// CLOSE LIGHTBOX
// =========================

function closeLightbox() {

    lightbox.classList.remove("show");

    document.body.style.overflow = "";

}



// =========================
// SHOW IMAGE
// =========================

function showImage(index) {

    if (currentImages.length === 0) {

        return;

    }


    if (index < 0) {

        index =
            currentImages.length - 1;

    }


    if (index >= currentImages.length) {

        index = 0;

    }


    currentIndex = index;


    lightboxImage.src =
        currentImages[currentIndex].src;


    lightboxImage.alt =
        currentImages[currentIndex].alt;


    updateCounter();

}



// =========================
// COUNTER
// =========================

function updateCounter() {

    lightboxCounter.textContent =
        `${currentIndex + 1} / ${currentImages.length}`;

}



// =========================
// CLICK PHOTOS
// =========================

document.addEventListener(
    "click",
    event => {

        if (
            event.target.matches(
                ".photo-gallery img"
            )
        ) {

            const images =
                getActiveImages();


            const index =
                images.indexOf(event.target);


            openLightbox(index);

        }

    }
);



// =========================
// PREVIOUS
// =========================

previousButton.addEventListener(
    "click",
    event => {

        event.stopPropagation();

        showImage(currentIndex - 1);

    }
);



// =========================
// NEXT
// =========================

nextButton.addEventListener(
    "click",
    event => {

        event.stopPropagation();

        showImage(currentIndex + 1);

    }
);



// =========================
// CLOSE BUTTON
// =========================

closeButton.addEventListener(
    "click",
    event => {

        event.stopPropagation();

        closeLightbox();

    }
);



// =========================
// CLICK OUTSIDE IMAGE
// =========================

lightbox.addEventListener(
    "click",
    event => {

        if (
            event.target === lightbox
        ) {

            closeLightbox();

        }

    }
);



// =========================
// KEYBOARD CONTROLS
// =========================

document.addEventListener(
    "keydown",
    event => {

        if (
            !lightbox.classList.contains("show")
        ) {

            return;

        }


        if (event.key === "ArrowLeft") {

            showImage(
                currentIndex - 1
            );

        }


        if (event.key === "ArrowRight") {

            showImage(
                currentIndex + 1
            );

        }


        if (event.key === "Escape") {

            closeLightbox();

        }

    }
);
// =========================
// VIDEOGRAPHY FILTER
// =========================

const videoFilterButtons =
    document.querySelectorAll(".video-filter-btn");

const videoCategories =
    document.querySelectorAll(".video-category");


videoFilterButtons.forEach(button => {

    button.addEventListener("click", () => {

        const category =
            button.dataset.videoCategory;


        // Remove active button

        videoFilterButtons.forEach(btn => {

            btn.classList.remove("active");

        });


        // Activate clicked button

        button.classList.add("active");


        // Hide all video categories

        videoCategories.forEach(categorySection => {

            categorySection.classList.remove(
                "active-video-category"
            );

        });


        // Show selected category

        const selectedCategory =
            document.querySelector(
                `.video-category[data-video-gallery="${category}"]`
            );


        if (selectedCategory) {

            selectedCategory.classList.add(
                "active-video-category"
            );

        }

    });

});
// =========================
// GRAPHIC DESIGN FILTER
// =========================

const graphicFilterButtons =
    document.querySelectorAll(".graphic-filter-btn");

const graphicCategories =
    document.querySelectorAll(".graphic-category");


graphicFilterButtons.forEach(button => {

    button.addEventListener("click", () => {

        const category =
            button.dataset.graphicCategory;


        // Remove active button

        graphicFilterButtons.forEach(btn => {

            btn.classList.remove("active");

        });


        // Activate selected button

        button.classList.add("active");


        // Hide categories

        graphicCategories.forEach(section => {

            section.classList.remove(
                "active-graphic-category"
            );

        });


        // Show selected category

        const selected =
            document.querySelector(
                `.graphic-category[data-graphic-gallery="${category}"]`
            );


        if (selected) {

            selected.classList.add(
                "active-graphic-category"
            );

        }

    });

});
// ========================================
// GRAPHIC DESIGN LIGHTBOX
// ========================================

const graphicCards =
    document.querySelectorAll(".graphic-card img");

const graphicLightbox =
    document.getElementById("graphic-lightbox");

const graphicLightboxImage =
    document.getElementById("graphic-lightbox-image");

const graphicLightboxCounter =
    document.getElementById("graphic-lightbox-counter");

const graphicLightboxClose =
    document.querySelector(".graphic-lightbox-close");

const graphicLightboxPrev =
    document.querySelector(".graphic-lightbox-prev");

const graphicLightboxNext =
    document.querySelector(".graphic-lightbox-next");


let currentGraphicIndex = 0;


/* OPEN LIGHTBOX */

graphicCards.forEach((image, index) => {

    image.addEventListener("click", () => {

        currentGraphicIndex = index;

        showGraphic(index);

        graphicLightbox.classList.add("active");

        document.body.style.overflow = "hidden";

    });

});


/* SHOW IMAGE */

function showGraphic(index) {

    if (!graphicCards.length) return;

    if (index < 0) {

        currentGraphicIndex =
            graphicCards.length - 1;

    } else if (index >= graphicCards.length) {

        currentGraphicIndex = 0;

    } else {

        currentGraphicIndex = index;

    }


    const image =
        graphicCards[currentGraphicIndex];


    graphicLightboxImage.src =
        image.src;

    graphicLightboxImage.alt =
        image.alt;


    graphicLightboxCounter.textContent =
        `${currentGraphicIndex + 1} / ${graphicCards.length}`;

}


/* NEXT */

graphicLightboxNext.addEventListener("click", () => {

    showGraphic(currentGraphicIndex + 1);

});


/* PREVIOUS */

graphicLightboxPrev.addEventListener("click", () => {

    showGraphic(currentGraphicIndex - 1);

});


/* CLOSE */

graphicLightboxClose.addEventListener("click", closeGraphicLightbox);


function closeGraphicLightbox() {

    graphicLightbox.classList.remove("active");

    document.body.style.overflow = "";

}


/* CLICK OUTSIDE */

graphicLightbox.addEventListener("click", (event) => {

    if (event.target === graphicLightbox) {

        closeGraphicLightbox();

    }

});


/* KEYBOARD */

document.addEventListener("keydown", (event) => {

    if (!graphicLightbox.classList.contains("active")) {
        return;
    }


    if (event.key === "Escape") {

        closeGraphicLightbox();

    }


    if (event.key === "ArrowRight") {

        showGraphic(currentGraphicIndex + 1);

    }


    if (event.key === "ArrowLeft") {

        showGraphic(currentGraphicIndex - 1);

    }

});
/* =========================================================
   PAGE LOADER
========================================================= */

window.addEventListener("load", function () {

    const loader = document.getElementById("page-loader");

    if (loader) {

        setTimeout(function () {

            loader.classList.add("loaded");

        }, 500);

    }

});
/* =========================================================
   SCROLL REVEAL
========================================================= */

const revealElements = document.querySelectorAll(
    ".section-title, " +
    ".about-content, " +
    ".skill-card, " +
    ".portfolio-category, " +
    ".contact-main, " +
    ".contact-actions, " +
    ".professional-socials, " +
    ".professional-footer"
);


const revealObserver = new IntersectionObserver(

    function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.classList.add("reveal", "visible");

                revealObserver.unobserve(entry.target);

            }

        });

    },

    {
        threshold: 0.12
    }

);


revealElements.forEach(function (element) {

    element.classList.add("reveal");

    revealObserver.observe(element);

});
/* =========================================================
   NAVBAR SCROLL EFFECT
========================================================= */

const navbar = document.querySelector(".navbar");


window.addEventListener("scroll", function () {

    if (!navbar) return;


    if (window.scrollY > 60) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

});
/* =========================================================
   BACK TO TOP
========================================================= */

const backToTop = document.getElementById("back-to-top");


window.addEventListener("scroll", function () {

    if (!backToTop) return;


    if (window.scrollY > 500) {

        backToTop.classList.add("show");

    } else {

        backToTop.classList.remove("show");

    }

});


if (backToTop) {

    backToTop.addEventListener("click", function () {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

}
