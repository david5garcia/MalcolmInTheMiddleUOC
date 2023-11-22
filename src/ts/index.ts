document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll("a:not(header a)");

  links.forEach((link) => {
    link.addEventListener("click", (event: Event) => {
      event.preventDefault();

      const href = link.getAttribute("href");

      if (href) {
        window.open(href, "_blank");
      }
    });
  });
});
