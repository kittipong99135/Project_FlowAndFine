var slideIndex = 1;
showSlides(slideIndex);

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("Myslides");
    var rec = document.getElementsByClassName("recNav");
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"
    }
    for (i = 0; i < rec.length; rec++) {
        rec[i].className = rec[i].className.replace("active", "")
    }
    slides[slideIndex - 1].style.display = "block";
    rec[slideIndex - 1].className += "active";

}