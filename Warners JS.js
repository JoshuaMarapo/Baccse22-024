

//Slideshow
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 3000); // Change image every 3 seconds
}

//FAQ's Button
const ratings = document.querySelectorAll('.rating')
const ratingsContainer = document.querySelector('ratings-container')
const sendBtn = documnet.querySelector('#send')
const panel = document.querySelector('#panel')
let selectedRating = 'Satisfying'

ratingsContainer.addEventListener('click', (e) => {
  if(e.target.class.parentNode.classList.contains
    ('rating')) {
        removeActive()
        e.target.parentNode.classList.add('active')
        selectedRating = e.target.
        nextElementSibling.innerHTML
    }
})

sendBtn.addEventListener('click', (e) => {
    panel.innerHTML = `
      <i class="fas fa-heart"></i>
      <strong>Thank You!!</strong>
      <br>
      <strong>Feedback: ${selectedRating}</strong>
      <p>We really appreciate your response and will use it wisely to improve the website</p>
    `
})

function removeActive() {
    for(let i = 0; i < ratings.length; i++) {
        ratings[i].classList.remove('active')

    }
}



//Frequently Asked Questions
const toggles = document.querySelectorAll('.faq-toogle')

toggles.forEach(toggle => (
    toggle.addEventListener('click', () => {
      toogle.parentNode.classList.toogle
      ('active')
    })
))

