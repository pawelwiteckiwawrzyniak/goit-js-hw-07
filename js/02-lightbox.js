import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");

const original = galleryItems.map((image) => image.original);

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

const lightbox = new SimpleLightbox(".gallery__item", {
  sourceAttr: "href",
  captionsData: "alt",
  captionPosition: "outside",
  captionDelay: 250,
});
