'use strict';

const slider = document.querySelector('.slider__images');
const imagesLinks = document.querySelectorAll('.gallery__link');
const prevButton = document.getElementById('button-previous');
const nextButton = document.getElementById('button-next');

loadImages();

prevButton.addEventListener('click', previousSlide);
nextButton.addEventListener('click', nextSlide);

let slideIndex = 0;
let translateValue = 0;

function loadImages() {
  [...imagesLinks].forEach(imageLink => {
    const copyImageLink = imageLink.cloneNode(true);

    copyImageLink.classList.remove('gallery__link');
    copyImageLink.classList.add('slider__link');

    const image = copyImageLink.querySelector('.gallery__image');

    image.classList.remove('gallery__image');
    image.classList.add('slider__image');

    copyImageLink.append(image);
    copyImageLink.querySelector('.gallery__image-info').remove();

    slider.append(copyImageLink);
  });
}

function nextSlide() {
  if (slideIndex >= slider.children.length - 1) {
    return;
  }

  slideIndex++;
  translateValue -= 100;

  slider.style.transform = `translateX(${translateValue}%)`;
}

function previousSlide() {
  if (slideIndex <= 0) {
    return;
  }

  slideIndex--;
  translateValue += 100;

  slider.style.transform = `translateX(${translateValue}%)`;
}
