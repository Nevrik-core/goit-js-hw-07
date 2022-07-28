import { galleryItems } from './gallery-items.js';
// Change code below this line


const gallery = document.querySelector('.gallery');


const galleryMarkup = galleryItems.map(el => `
<div class="gallery__item">
  <a class="gallery__link" href="${el.original}">
    <img
      class="gallery__image"
      src="${el.preview}"
      data-source="${el.original}"
      alt="${el.description}"
    />
  </a>
</div>`).join('');

gallery.insertAdjacentHTML('afterbegin', galleryMarkup);





gallery.addEventListener('click', onGalleryItemClick);


function onGalleryItemClick(e) {
    e.preventDefault();
    if (!e.target.classList.contains('gallery__image')) {
        return;
    }
  const instance = basicLightbox.create(
    `<img src="${e.target.getAttribute('data-source')}" width="800" height="600">`);

  instance.show();

  document.addEventListener('keydown', e => {
   if (e.code === 'Escape') {
      instance.close();
   }
  });
};

 

