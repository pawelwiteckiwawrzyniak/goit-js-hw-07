import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");

const bigImages = galleryItems.map((image) => image.original);

const markup = galleryItems
  .map(
    ({ preview, original, description }) => `<li>
    <a class="gallery__item" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}" />
  </a>
</li>`
  )
  .join("");

gallery.insertAdjacentHTML("beforeend", markup);

gallery.addEventListener("click", (event) => {
  event.preventDefault();

  if (event.target.nodeName !== "IMG") {
    return;
  }
});

const album = $(gallery).simpleLightbox();
