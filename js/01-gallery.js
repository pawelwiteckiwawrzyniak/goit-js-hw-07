import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");

const markup = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<div class="gallery__item">
      <a class="gallery__link" href="${original}">
         <img
             class="gallery__image"
             src="${preview}"
             data-source="${original}"
             alt="${description}"
         />
     </a>
 </div>`
  )
  .join("");

gallery.insertAdjacentHTML("beforeend", markup);

gallery.addEventListener("click", (event) => {
  event.preventDefault();

  if (event.target.nodeName !== "IMG") {
    return;
  }

  const handleEscapeKey = (event) => {
    if (event.key === "Escape") instance.close();
  };

  const instance = basicLightbox.create(
    `<img src="${event.target.dataset.source}"/>`,
    {
      onShow: () => {
        document.addEventListener("keydown", handleEscapeKey);
      },
      onClose: () => {
        document.removeEventListener("keydown", handleEscapeKey);
      },
    }
  );
  instance.show();
});
