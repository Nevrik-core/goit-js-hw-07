import { galleryItems } from './gallery-items.js';
// Change code below this line


const gallery = document.querySelector('.gallery');


const galleryMarkup = galleryItems.map(el => `

 <a class="gallery__item" href="${el.original}">
  <img class="gallery__image" src="${el.preview}" alt="${el.description}" />
</a>
`).join('');

gallery.insertAdjacentHTML('afterbegin', galleryMarkup);


let lightbox = new SimpleLightbox('.gallery a', {
    
    captionsData: 'alt',
    captions: true,
    captionType: 'attr',
    captionDelay: 250
    
});


