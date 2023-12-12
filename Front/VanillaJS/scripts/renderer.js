import { getApiBlobByUrl } from "./utils.js";
import { saveDataFromLinkUrl } from "./download.js";

export default class Renderer {
  constructor() {}

  renderImageToCanvas = async (
    img,
    imageUrl,
    parentElement,
    saveButton,
    saveButtonCallback
  ) => {
    const blob = await getApiBlobByUrl(imageUrl);

    img.src = URL.createObjectURL(blob);
    const canvas = document.createElement("canvas");

    img.onload = function () {
      canvas.width = img.width;
      canvas.height = img.height;

      const ctx = canvas.getContext("2d");
      ctx.drawImage(img, 0, 0);

      parentElement.appendChild(canvas);

      if (saveButton) {
        saveButton.addEventListener("click", () =>
          saveDataFromLinkUrl(
            canvas.toDataURL("image/png"),
            imageUrl.split("/").pop()
          )
        );
        parentElement.appendChild(saveButton);
      }
    };
  };
}
