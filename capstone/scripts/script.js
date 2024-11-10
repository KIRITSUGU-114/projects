document
  .querySelectorAll(".styles__item, .services__item")
  .forEach((article) => {
    const title = article.querySelector(
      ".styles__item-title, .services__item-title"
    );
    const description = article.querySelector(
      ".styles__item-description, .services__item-description"
    );

    if (title && description) {
      description.style.maxWidth = title.offsetWidth + "px";
    }
  });

window.addEventListener("resize", () => {
  document
    .querySelectorAll(".styles__item, .services__item")
    .forEach((article) => {
      const title = article.querySelector(
        ".styles__item-title, .services__item-title"
      );
      const description = article.querySelector(
        ".styles__item-description, .services__item-description"
      );

      if (title && description) {
        description.style.maxWidth = title.offsetWidth + "px";
      }
    });
});

document.getElementById("burguer").onclick = () => {
  const burguer = document.getElementById("burguer");
  const mobileNav = document.getElementById("mobile-navigation");
  const firstLink = mobileNav.querySelector("a");

  burguer.classList.toggle("active");
  mobileNav.classList.toggle("open");

  if (burguer.classList.contains("active")) {
    burguer.setAttribute("aria-label", "Close navigation");
  } else {
    burguer.setAttribute("aria-label", "Open navigation");
  }

  if (mobileNav.classList.contains("open")) {
    mobileNav.setAttribute("aria-hidden", "false");
  } else {
    mobileNav.setAttribute("aria-hidden", "true");
  }

  if (mobileNav.classList.contains("open")) {
    firstLink.focus();
  }
};
