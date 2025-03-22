const initCatalog = [
  {
    link: "#",
    image: "./images/1.webp",
    name: "BBB",
    price: "От 600 RUB",
    picture1: "../images/apex.webp",
    picture2: "../images/apex.webp",
    picture3: "../images/apex.webp",
    picture4: "../images/apex.webp",
    description: "description ",
  },
  {
    link: "#",
    image: "./images/1.webp",
    name: "www",
    price: "От 600 RUB",
    picture1: "../images/apex.webp",
    picture2: "../images/apex.webp",
    picture3: "../images/apex.webp",
    picture4: "../images/apex.webp",
  },
  {
    link: "#",
    image: "./images/1.webp",
    name: "yyy",
    price: "От 600 RUB",
    picture1: "../images/apex.webp",
    picture2: "../images/apex.webp",
    picture3: "../images/apex.webp",
    picture4: "../images/apex.webp",
  },
  {
    link: "#",
    image: "./images/1.webp",
    name: "Tarkov",
    price: "От 600 RUB",
    picture1: "../images/apex.webp",
    picture2: "../images/apex.webp",
    picture3: "../images/apex.webp",
    picture4: "../images/apex.webp",
  },
  {
    link: "#",
    image: "./images/1.webp",
    name: "Tarkov",
    price: "От 600 RUB",
    picture1: "../images/apex.webp",
    picture2: "../images/apex.webp",
    picture3: "../images/apex.webp",
    picture4: "../images/apex.webp",
  },
  {
    link: "#",
    image: "./images/1.webp",
    name: "Tarkov",
    price: "От 600 RUB",
    picture1: "../images/apex.webp",
    picture2: "../images/apex.webp",
    picture3: "../images/apex.webp",
    picture4: "../images/apex.webp",
  },
  {
    link: "#",
    image: "./images/1.webp",
    name: "Tarkov",
    price: "От 600 RUB",
    picture1: "../images/apex.webp",
    picture2: "../images/apex.webp",
    picture3: "../images/apex.webp",
    picture4: "../images/apex.webp",
  },
  {
    link: "#",
    image: "./images/1.webp",
    name: "Tarkov",
    price: "От 600 RUB",
    picture1: "../images/apex.webp",
    picture2: "../images/apex.webp",
    picture3: "../images/apex.webp",
    picture4: "../images/apex.webp",
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

//вставляем данные в попап
const gameItems = document.querySelectorAll(".game-page__item");

gameItems.forEach((item) => {
  item.addEventListener("click", (event) => {
    event.preventDefault(); // Предотвращаем переход по ссылке

    const gameName = item.querySelector(".game-page__name").textContent; // Получаем имя игры из карточки
    const overlayImageOne = document.querySelector(".image-1");
    const overlayImageTwo = document.querySelector(".image-2");
    const overlayImageThree = document.querySelector(".image-3");
    const overlayImageFour = document.querySelector(".image-4");

    // Ищем соответствующий элемент в массиве initCatalog
    const foundGame = initCatalog.find((game) => game.name === gameName);

    if (foundGame) {
      // Выводим значение picture1
      overlayImageOne.src = foundGame.picture1;
      overlayImageTwo.src = foundGame.picture2;
      overlayImageThree.src = foundGame.picture3;
      overlayImageFour.src = foundGame.picture4;
    } else {
      console.log("Игра не найдена в каталоге"); // Обрабатываем случай, если игра не найдена
    }
  });
});

//
