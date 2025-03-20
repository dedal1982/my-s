const initCatalog = [
  {
    link: "#",
    image: "./images/1.webp",
    name: "Tarkov",
    price: "От 600 RUB",
  },
  {
    link: "#",
    image: "./images/1.webp",
    name: "Tarkov",
    price: "От 600 RUB",
  },
  {
    link: "#",
    image: "./images/1.webp",
    name: "Tarkov",
    price: "От 600 RUB",
  },
  {
    link: "#",
    image: "./images/1.webp",
    name: "Tarkov",
    price: "От 600 RUB",
  },
  {
    link: "#",
    image: "./images/1.webp",
    name: "Tarkov",
    price: "От 600 RUB",
  },
  {
    link: "#",
    image: "./images/1.webp",
    name: "Tarkov",
    price: "От 600 RUB",
  },
  {
    link: "#",
    image: "./images/1.webp",
    name: "Tarkov",
    price: "От 600 RUB",
  },
  {
    link: "#",
    image: "./images/1.webp",
    name: "Tarkov",
    price: "От 600 RUB",
  },
];

//инициализация карточек каталог
function setEventListeners(htmlElement) {}
const itemTemplate = document.getElementById("catalogApex").content;
const elements = document.querySelector(".game-page__catalog");

function createCard(item) {
  const htmlElement = itemTemplate.cloneNode(true);
  const cheathLink = htmlElement.querySelector(".game-page__item");
  const cheathImage = htmlElement.querySelector(".game-page__image");
  const cheathName = htmlElement.querySelector(".game-page__name");
  const cheathPrice = htmlElement.querySelector(".game-page__price");

  // Проверяем наличие значения поля в объекте item перед присваиванием его элементу
  if (item.link) {
    cheathLink.href = item.link;
  }
  if (item.image) {
    cheathImage.src = item.image;
  }
  if (item.name) {
    cheathName.textContent = item.name;
  }
  if (item.price) {
    cheathPrice.textContent = item.price;
  }

  setEventListeners(htmlElement);

  return htmlElement;
}

initCatalog.forEach(function (item) {
  const elementCreate = createCard(item);
  elements.append(elementCreate);
});
