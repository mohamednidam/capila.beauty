
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    autoplay: true,
    autoplayTimeout: 3000, // 3 seconds
    autoplayHoverPause: true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:1,
            nav:false
        },
        1000:{
            items:2,
            nav:true,
            loop:true
        }
    }
})

let currentIndex = 0;
let autoSlideInterval;

function changeSlide(direction) {
    const slides = document.querySelector('.slides');
    const totalSlides = document.querySelectorAll('.slide').length;

    currentIndex += direction;
    if (currentIndex < 0) {
        currentIndex = totalSlides - 1;
    } else if (currentIndex >= totalSlides) {
        currentIndex = 0;
    }

    slides.style.transform = `translateX(${-currentIndex * 100}%)`;
}

function startAutoSlide() {
    autoSlideInterval = setInterval(() => {
        changeSlide(1);
    }, 3000); // Change slide every 3 seconds
}

function stopAutoSlide() {
    clearInterval(autoSlideInterval);
}

document.querySelector('.slider-container').addEventListener('mouseover', stopAutoSlide);
document.querySelector('.slider-container').addEventListener('mouseout', startAutoSlide);

// Start the auto-sliding when the page loads
window.onload = startAutoSlide;

