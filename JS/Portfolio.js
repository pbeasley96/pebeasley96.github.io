// Slideshow //
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls //
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls //
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
} 

// Contact Form //
function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

document.addEventListener("click", function(event) {
  if (event.target.matches(".cancel") || !event.target.closet(".form-pop") && !event.target.closest(".Pop_Up_Button") && !event.target.closet(".contact")) {
    closeForm()
  }
}, false) 