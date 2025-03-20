//открытие поиска
const openSearchButton = document.getElementById("openSearch");
const searchPopup = document.getElementById("searchPopup");

openSearchButton.addEventListener("click", () => {
  searchPopup.classList.add("active");
});

window.addEventListener("click", (event) => {
  if (event.target == searchPopup) {
    searchPopup.classList.remove("active");
  }
});

//бургер
const burgerClick = document.querySelector(".header__burger");
const scrollLock = document.querySelector(".page");
const mobileMenu = document.querySelector(".mobile-menu");

burgerClick.addEventListener("click", () => {
  burgerClick.classList.toggle("active");
  scrollLock.classList.toggle("lock");
  mobileMenu.classList.toggle("active");
});

//кнопка вверх
const upButton = document.getElementById("upButton");

function toggleUpButton() {
  if (document.documentElement.scrollTop > 1000) {
    upButton.classList.add("active");
  } else {
    upButton.classList.remove("active");
  }
}

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

window.addEventListener("scroll", toggleUpButton);
upButton.addEventListener("click", scrollToTop);
