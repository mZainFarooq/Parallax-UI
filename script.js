const header = document.querySelector("header");
const searchIcon = document.querySelector(".search-icon");
const links = document.querySelectorAll("header nav ul li a");
const icons = document.querySelectorAll("header nav ul li i");
const menu = document.querySelector(".menu");
const mobileHeader = document.querySelector(".mobile-header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.classList.add("scrolled", "animate__slideInDown");

    links.forEach((anchortag) => {
      anchortag.style.color = "black";
    });

    icons.forEach((iconTag) => {
      iconTag.style.color = "black";
    });

    searchIcon.style.color = "black";

    searchIcon.addEventListener("mouseover", () => {
      searchIcon.style.color = "white";
    });

    searchIcon.addEventListener("mouseout", () => {
      searchIcon.style.color = "#777777";
    });
  } else {
    header.classList.remove("scrolled", "animate__slideInDown");

    links.forEach((anchortag) => {
      anchortag.style.color = "#777777";
    });

    icons.forEach((iconTag) => {
      iconTag.style.color = "#777777";
    });

    searchIcon.style.color = "#777777";

    searchIcon.addEventListener("mouseover", () => {
      searchIcon.style.color = "white";
    });

    searchIcon.addEventListener("mouseout", () => {
      searchIcon.style.color = "#777777";
    });
  }
});

menu.addEventListener("click", () => {
  if (mobileHeader.style.display === "block") {
    mobileHeader.style.display = "none";
  } else {
    mobileHeader.style.display = "block";
  }
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 600) {
    mobileHeader.style.display = "none";
  }
});
