// ?Создай галерею с возможностью клика по её элементам и просмотра полноразмерного изображения в модальном окне.
// *Создание и рендер разметки по массиву данных galleryItems и предоставленному шаблону элемента галереи.
// *Реализация делегирования на div.gallery и получение url большого изображения.

import { galleryItems } from "./gallery-items.js";
// Change code below this line
console.log(galleryItems);
const galleryEl = document.querySelector(".gallery");

const markup = galleryItems
  .map(({ preview, original, description }) => {
    return `<div class="gallery__item">
		<a class="gallery__link" href="${original}">
			<img
				class="gallery__image"
				src="${preview}"
				data-source="${original}"
				alt="${description}"
			/>
		</a>
	</div>`;
  })
  .join("");

galleryEl.insertAdjacentHTML("beforeend", markup);

galleryEl.addEventListener("click", onClick);

function onClick(event) {
  event.preventDefault();
  if (event.target.tagName !== "IMG") {
    return;
  }

  const source = event.target.getAttribute("data-source");
  console.log(source);
  const instance = basicLightbox.create(
    `<img src="${source}" width="800" height="600">`,
    {
      onShow: (instance) => {
        window.addEventListener("keydown", onEscKeyPress);
      },
      onClose: (instance) => {
        window.removeEventListener("keydown", onEscKeyPress);
      },
    }
  );

  instance.show();

  function onEscKeyPress(event) {
    console.log(event.code);
    if (event.key === "Escape") {
      instance.close();
    }
  }
}
// onShow: (instance) => {
//   document.addEventListener("keyup", onCEscKeyPress);
// },
// onClose: (instance) => {
//   document.removeEventListener("keyup", onCEscKeyPress);
// },
