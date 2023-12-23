import { galleryItems } from './gallery-items.js';

let galleryLocation = document.querySelector('.gallery');

function makeGallery(images, HTMLLocation) {
  let markup = (imageSmall, imageLarge, altText) => `
    <li class="gallery__item">
      <a class="gallery__link" href="${imageLarge}">
          <img class="gallery__image" src="${imageSmall}" alt="${altText}" />
      </a>
    </li>
  `;

  let galleryMarkup = images
    .map(({ description, original, preview }) => markup(preview, original, description));
  
  HTMLLocation.insertAdjacentHTML('afterbegin', galleryMarkup.join(''));
}

makeGallery(galleryItems, galleryLocation);

new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionsDelay: 250,
});
