import { galleryItems } from './gallery-items.js';

const galleryLocation = document.querySelector('.gallery');

/**
 * Function that creates the markup for the gallery, 
 * and inserts it into a given location on the page.
 * 
 * @param {*} gallery - The object of images that make up the gallery.
 * @param {*} HTMLLocation - Where the gallery will be located on the page.
 */
function makeGallery( gallery, HTMLLocation) {
  let markup = (smallImg, largeImg, altText) => `<li class="gallery__item">
    <a class="gallery__link" href="${largeImg}">
      <img
        class="gallery__image"
        src="${smallImg}"
        data-source="${largeImg}"
        alt="${altText}"
      />
    </a>
  </li>`;

  let createdMarkup = gallery
    .map(({ preview, original, description }) => markup(preview, original, description));
  
  HTMLLocation.insertAdjacentHTML('afterbegin', createdMarkup.join(''));
}

makeGallery(galleryItems, galleryLocation);

galleryLocation.addEventListener('click', handlerClick);

function handlerClick(evt) {
  evt.preventDefault();

  if (!evt.target.classList.contains('gallery__image')) {
    return;
  }

  const instance = basicLightbox.create(`
    <img src="${evt.target.dataset.source}" width="800" height="600">
  `)
  
  instance.show()
}
