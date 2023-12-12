import UI from "./ui";

export function saveDataFromLinkUrl(dataURL, fileName) {
  const ui = new UI();
  const link = ui.createLink(dataURL);
  link.download = fileName;
  link.click();
}
