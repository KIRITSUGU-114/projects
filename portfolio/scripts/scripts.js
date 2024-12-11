const viewMoreButton = document.querySelectorAll(".work__item-view-more");
const viewLessButton = document.querySelectorAll(".work__item-view-less");

viewMoreButton.forEach((button) => {
  button.addEventListener("click", () => {
    const id = button.id.split("-")[2];
    if (!`work__item--${id}-more`) return;
    button.style.display = "none";
    document.getElementById(`work__item--${id}-less`).style.display = "inline";
    document
      .getElementById(`work__item--${id}-details`)
      .classList.add("expand");
  });
});

viewLessButton.forEach((button) => {
  button.addEventListener("click", () => {
    const id = button.id.split("-")[2];
    if (!`work__item--${id}-less`) return;
    button.style.display = "none";
    document.getElementById(`work__item--${id}-more`).style.display = "inline";
    document
      .getElementById(`work__item--${id}-details`)
      .classList.remove("expand");
  });
});

const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
  document.documentElement.setAttribute("data-theme", savedTheme);
}

const themeToggle = document.getElementById("theme-tooggle-button");
themeToggle.addEventListener("click", () => {
  currentTheme = document.documentElement.getAttribute("data-theme");
  newTheme = currentTheme === "light" ? "dark" : "light";
  document.documentElement.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);

  const linkedin = document.getElementById("hero__buttons-linkedin");
  const linkedinCurretPath = linkedin.getAttribute("src");
  const linkedinNewpath =
    linkedinCurretPath ===
    "./assets/images/social-networks/social-networks_linkedin.webp"
      ? "./assets/images/social-networks/social-networks_linkedin--white.webp"
      : "./assets/images/social-networks/social-networks_linkedin.webp";
  linkedin.setAttribute("src", linkedinNewpath);

  const github = document.getElementById("hero__buttons-github");
  const githubCurretPath = github.getAttribute("src");
  const githubNewpath =
    githubCurretPath ===
    "./assets/images/social-networks/social-networks_github.webp"
      ? "./assets/images/social-networks/social-networks_github--white.webp"
      : "./assets/images/social-networks/social-networks_github.webp";
  github.setAttribute("src", githubNewpath);
  
  const linkedinMobile = document.getElementById("hero__buttons-linkedin--mobile");
  const linkedinMobileCurretPath = linkedinMobile.getAttribute("src");
  const linkedinMobileNewpath =
    linkedinMobileCurretPath ===
    "./assets/images/social-networks/social-networks_linkedin.webp"
      ? "./assets/images/social-networks/social-networks_linkedin--white.webp"
      : "./assets/images/social-networks/social-networks_linkedin.webp";
  linkedinMobile.setAttribute("src", linkedinMobileNewpath);

  const githubMobile = document.getElementById("hero__buttons-github--mobile");
  const githubMobileCurretPath = githubMobile.getAttribute("src");
  const githubMobileNewpath =
    githubMobileCurretPath ===
    "./assets/images/social-networks/social-networks_github.webp"
      ? "./assets/images/social-networks/social-networks_github--white.webp"
      : "./assets/images/social-networks/social-networks_github.webp";
  githubMobile.setAttribute("src", githubMobileNewpath);

  const code = document.getElementById("work__item-view-code");
  const codeCurretPath = code.getAttribute("src");
  const codeNewpath =
    codeCurretPath ===
    "./assets/images/social-networks/social-networks_github--white.webp"
      ? "./assets/images/social-networks/social-networks_github.webp"
      : "./assets/images/social-networks/social-networks_github--white.webp";
  code.setAttribute("src", codeNewpath);

    if(currentTheme === 'light'){
        document.getElementById('header__color-schema--light').classList.add('header__color-schema--current')
        document.getElementById('header__color-schema--dark').classList.remove('header__color-schema--current');
    }else if(currentTheme === 'dark'){
        document.getElementById('header__color-schema--dark').classList.add('header__color-schema--current')
        document.getElementById('header__color-schema--light').classList.remove('header__color-schema--current')
    }
});



