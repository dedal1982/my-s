const initGallery = [
  {
    image: "./images/apex.webp",
    name: "Apex Legends™",
    link: "./apex/apex.html",
  },
  {
    image: "./images/call-of-duty.webp",
    name: "Call of Duty",
    link: "call-of-duty.html",
  },
  {
    image: "./images/cs-go.webp",
    name: "Counter-Strike",
    link: "cs-go.html",
  },
  {
    image: "./images/dayz.webp",
    name: "DayZ",
    link: "dayz.html",
  },
  {
    image: "./images/pubg.webp",
    name: "PUBG",
    link: "pubg.html",
  },
  {
    image: "./images/rust.webp",
    name: "Rust",
    link: "rust.html",
  },
  {
    image: "./images/squad.webp",
    name: "Squad",
    link: "squad.html",
  },
  {
    image: "./images/tarkov.webp",
    name: "Tarkov",
    link: "tarkov.",
  },
];

//инициализация карточек каталог
function setEventListeners(htmlElement) {}
const itemTemplate = document.getElementById("catalogGallery").content;
const elements = document.querySelector(".catalog__gallery");

function createCard(item) {
  const htmlElement = itemTemplate.cloneNode(true);
  const gameImage = htmlElement.querySelector(".catalog__image img");
  const gameName = htmlElement.querySelector(".catalog__item h3");
  const gameLink = htmlElement.querySelector(".catalog__item");

  // Проверяем наличие значения поля в объекте item перед присваиванием его элементу
  if (item.image) {
    gameImage.src = item.image;
  }
  if (item.name) {
    gameName.textContent = item.name;
  }
  if (item.link) {
    gameLink.href = item.link;
  }

  setEventListeners(htmlElement);

  return htmlElement;
}

initGallery.forEach(function (item) {
  const elementCreate = createCard(item);
  elements.append(elementCreate);
});
