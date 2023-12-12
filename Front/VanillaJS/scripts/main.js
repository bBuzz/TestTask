import UI from "./ui.js";
import { getApiJsonByUrl } from "./utils.js";

var ui = new UI();

async function acceptTermsOfUse(terms) {
  const termsContainer = ui.createContainer();
  const termsTitle = ui.createHeader("Terms of Use");
  termsContainer.appendChild(termsTitle);

  for (const paragraph of terms) {
    const paragraphContainer = ui.createContainer();
    paragraphContainer.innerHTML = `<h3>${paragraph.title}</h3><p>${paragraph.content}</p>`;
    termsContainer.appendChild(paragraphContainer);
  }

  const acceptButton = ui.createButton("Accept");
  termsContainer.appendChild(acceptButton);

  document.getElementById("app").appendChild(termsContainer);

  await new Promise((resolve) => {
    acceptButton.addEventListener("click", () => {
      document.getElementById("app").removeChild(termsContainer);
      resolve();
    });
  });
}


async function start() {
  const response = await getApiJsonByUrl("/static/test.json");
  await acceptTermsOfUse(response.terms_of_use.paragraphs);

  const imageGallery = ui.createContainer("div");
  imageGallery.className = "image-gallery";

  response.images.forEach((image) => {
    const card = ui.createImageCard(image);
    imageGallery.appendChild(card);
  });

  document.getElementById("app").appendChild(imageGallery);
}

document.addEventListener("DOMContentLoaded", start);
