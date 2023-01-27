import { galleryItems } from "./gallery-items.js";
console.log(galleryItems);

const galleryEl = document.querySelector(".gallery");

const markup = galleryItems
  .map(({ preview, original, description }) => {
    return `<div class="gallery"><a class="gallery__item" href="${original}">
		<img class="gallery__image" src="${preview}" alt="${description}" />
	</a></div>`;
  })
  .join("");

galleryEl.insertAdjacentHTML("beforeend", markup);

let lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
  scrollZoom: false,
});
