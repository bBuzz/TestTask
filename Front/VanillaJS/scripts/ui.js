import Renderer from "./renderer.js";

export default class UI {
  constructor() {}

  createImageCard = (image) => {
    const imageCard = this.createContainer();
    imageCard.className = "card";
    const img = new Image();
    const saveButton = this.createButton("Save Image");
    const renderer = new Renderer();
    renderer.renderImageToCanvas(img, image.image_url, imageCard, saveButton);
    return imageCard;
  };

  createButton = (innerText) => {
    const button = document.createElement("button");
    button.innerText = innerText;
    return button;
  };

  createLink = (href) => {
    const link = document.createElement("a");
    link.href = href;
    return link;
  };

  createContainer = () => {
    const div = document.createElement("div");
    return div;
  };

  createHeader = (innerText) => {
    const header = document.createElement("h1");
    header.innerText = innerText;
    return header;
  };
}
