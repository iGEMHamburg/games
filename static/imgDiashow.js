var slideIndex = 0;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("slide");
    var dots = document.getElementsByClassName("dot");

    if (n >= slides.length) {
        slideIndex = 0;
    } else if (n < 0) {
        slideIndex = slides.length - 1;
    } else {
        slideIndex = n;
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex].style.display = "block";
    dots[slideIndex].className += " active";

    slides[slideIndex].addEventListener("animationend", function() {
        this.classList.add("active");
    });
}

var prevBtn = document.querySelector(".prev");
var nextBtn = document.querySelector(".next");

prevBtn.addEventListener("click", function() {
    plusSlides(-1);
});

nextBtn.addEventListener("click", function() {
    plusSlides(1);
});

var dots = document.getElementsByClassName("dot");
for (var i = 0; i < dots.length; i++) {
    dots[i].addEventListener("click", function() {
        var dotIndex = Array.from(dots).indexOf(this);
        currentSlide(dotIndex);
    });
}