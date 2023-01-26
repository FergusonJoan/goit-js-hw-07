import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector(".gallery");

const markup = galleryItems
  .map(({ preview, original, description }) => {
    return `<a class="gallery__item" href="${original}">
		<img class="gallery__image" src="${preview}" alt="${description}" />
	</a>`;
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
