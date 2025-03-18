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

const burgerClick = document.querySelector(".header__burger");
const scrollLock = document.querySelector(".page");

/***открытие бургера***/
burgerClick.addEventListener("click", () => {
  burgerClick.classList.toggle("active");
  scrollLock.classList.toggle("lock");
});
