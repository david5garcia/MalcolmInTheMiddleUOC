document.addEventListener("DOMContentLoaded", function () {
  var cargarVideoBtns = document.getElementsByClassName("iframe-button");

  Array.from(cargarVideoBtns).forEach((cargarVideoBtn) => {
    cargarVideoBtn.addEventListener("click", function () {
      const videoSrc = cargarVideoBtn.getAttribute("video-src");
      const iframeContainerId = cargarVideoBtn.getAttribute("iframe-container");
      const iframeContainer = document.getElementById(iframeContainerId);
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
});
