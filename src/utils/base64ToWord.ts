import { saveAs } from "file-saver";

export const convertBase64ToWord = (base64String: any, fileName: any) => {
  const byteCharacters = atob(base64String); // Decode base64
  const byteNumbers = new Array(byteCharacters.length);
  for (let i = 0; i < byteCharacters.length; i++) {
    byteNumbers[i] = byteCharacters.charCodeAt(i);
  }
  const byteArray = new Uint8Array(byteNumbers);
  const blob = new Blob([byteArray], { type: "application/msword" });
  saveAs(blob, fileName); // Trigger file download
};
