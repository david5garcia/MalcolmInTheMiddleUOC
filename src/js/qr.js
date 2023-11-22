// generateQRCode.js

import QrCodeWithLogo from "qrcode-with-logos";
import image from "../images/logo.png";

const generateQRCodeWithLogo = async () => {
  const inputUrl = document.getElementById("input-url").value;
  new QrCodeWithLogo({
    canvas: document.getElementById("canvas"),
    content: inputUrl,
    download: false,
    width: 500,
    logo: {
      src: image
    }
  });
};

document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("qr-button");
  button.addEventListener("click", generateQRCodeWithLogo);
});
