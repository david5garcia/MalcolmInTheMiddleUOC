function loadIframe(videoId, containerId) {
  var iframeContainer = document.getElementById(containerId);

  var iframe = document.createElement("iframe");
  iframe.width = "560";
  iframe.height = "315";
  iframe.src = "https://www.youtube.com/embed/" + videoId;
  iframe.title = "YouTube video player";
  iframe.frameborder = "0";
  iframe.allow =
    "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
  iframe.allowfullscreen = true;

  iframeContainer.appendChild(iframe);
}
