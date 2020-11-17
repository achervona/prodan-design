'use strict';

const slider = document.querySelector('.slider__images');
const prevButton = document.getElementById('button-previous');
const nextButton = document.getElementById('button-next');

prevButton.addEventListener('click', previousSlide);
nextButton.addEventListener('click', nextSlide);

const imageSize = 100;

let slideIndex = 1;
let transform = 0;


function nextSlide() {
  slideIndex++;

  // const last = slider.firstElementChild;
  // console.log(last);

  // last.remove();
  // slider.append(last);


transform -= imageSize;
  slider.style.transform = `translateX(${transform}%)`;
  // slides[slideIndex].classList.add('active');
  // slider.remove(slider.querySelector('#active'));
  // slider.prepend(slides[slideIndex]);
   // console.log(slider.style.left);
 // slider.style.left = parseInt(slider.style.left) + imageSize + 'px';

  
//   slider.style.transform = `translateX(${parseInt(slider.style.transform) + imageSize}px)`;
// console.log(slider.style.transform);

  //showSlides(slideIndex += 1);
}

function previousSlide() {
  transform += imageSize;
 // slider.style.transform = `translateX(0)`;
  console.log(slider.style.transform);
   slider.style.transform = `translateX(${transform}%)`;
  // console.log(slider.style.transform);
  //showSlides(slideIndex -= 1);  
  slideIndex--;
  // slider.remove(slides[slideIndex]);

  // slider.prepend(slides[slideIndex]);
}

// function showSlides(count) {
//   const slides = document.querySelectorAll('.slider__image');

//   if (count > slides.length) {
//     slideIndex = 1;
//   }

//   if (count < 1) {
//     slideIndex = slides.length;
//   }

//   for (let i = 0; i < slides.length; i++) {
//     slides[i].style.width = '0';
//   }

//   slides[slideIndex - 1].style.width = '100%';
// }
