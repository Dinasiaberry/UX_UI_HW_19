console.log ("Your index.js file is loaded correctly!");
$("#navItem").hover(function() {
    $("#dropdown").slideDown("slow");
});  
// Get the modal
var modal = document.getElementById("Modal");

// Get the button that opens the modal
var btn = document.getElementById("Modal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
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
function loop() {
    $('#Img').animate({'top': '500'}, {
        duration: 1000, 
        complete: function() {
            $('#Img').animate({top: 0}, {
                duration: 1000, 
                complete: loop});
        }});
}
loop();

$(document).ready(function() {
    $('div').fadeOut(1);
    $('div').removeId('hidden');
    $('div').fadeIn(1000);
});