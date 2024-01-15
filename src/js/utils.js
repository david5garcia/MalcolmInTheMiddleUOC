document.addEventListener("DOMContentLoaded", function () {
  var cargarVideoBtn = document.getElementById("iframe-button");
  var iframeContainer = document.getElementById("iframeContainer");

  cargarVideoBtn.addEventListener("click", function () {
    const videoSrc = cargarVideoBtn.getAttribute("video-src");
    var iframe = document.createElement("iframe");
    iframe.width = "560";
    iframe.height = "315";
    iframe.src = "https://www.youtube.com/embed/" + videoSrc;
    iframe.title = "YouTube video player";
    iframe.frameborder = "0";
    iframe.allow =
      "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
    iframe.allowfullscreen = true;

    iframeContainer.appendChild(iframe);
  });
});
