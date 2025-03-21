const initCatalog = [
  {
    link: "#",
    image: "./images/1.webp",
    name: "BBB",
    price: "От 600 RUB",
    value: {
      feature1: "bbb",
      feature2: "bbbb",
      feature3: "bbbbb",
    },
  },
  {
    link: "#",
    image: "./images/1.webp",
    name: "www",
    price: "От 600 RUB",
    value: {
      feature1: "www",
      feature2: "wwww",
      feature3: "wwwww",
    },
  },
  {
    link: "#",
    image: "./images/1.webp",
    name: "yyy",
    price: "От 600 RUB",
    value: {
      feature1: "yyy",
      feature2: "yyyy",
      feature3: "yyyyy",
    },
  },
  {
    link: "#",
    image: "./images/1.webp",
    name: "Tarkov",
    price: "От 600 RUB",
    value: {
      feature1: "ttt",
      feature2: "tttt",
      feature3: "ttttt",
    },
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

//открыть оверлей чита
const cheathItem = document.querySelectorAll(".game-page__item");
const cheathOverlay = document.getElementById("cheathOverlay");
const cheathOverlayClose = document.querySelector(".cheath-overlay__close");
const scrollLockOver = document.querySelector(".page");

if (cheathItem) {
  cheathItem.forEach((item) => {
    item.addEventListener("click", () => {
      cheathOverlay.classList.add("active");
      scrollLockOver.classList.add("lock");
    });
  });
}

if (cheathOverlayClose) {
  cheathOverlayClose.addEventListener("click", () => {
    cheathOverlay.classList.remove("active");
    scrollLockOver.classList.remove("lock");
  });
}

//*********************
const gameItems = document.querySelectorAll(".game-page__item");

gameItems.forEach((item) => {
  item.addEventListener("click", (event) => {
    event.preventDefault();

    const gameName = item.querySelector(".game-page__name").textContent;

    const foundGame = initCatalog.find((game) => game.name === gameName);

    if (foundGame) {
      console.log("Соответствующий объект:", foundGame.value);
    } else {
      console.log("Игра не найдена в каталоге");
    }
  });
});
