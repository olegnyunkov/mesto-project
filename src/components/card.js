import {
  openPopup,
  imagePopup,
  imagePopupLink,
  imagePopupTitle,
} from './modal.js';

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

const cardTemplate = document.querySelector("#elements_card");
const cardContainer = document.querySelector('.elements__grid');

function addCard(place, item) {
  place.prepend(item);
}

function createCard(name, link) {
  const cardElement = cardTemplate.cloneNode(true).content.querySelector('.elements__grid-unit');
  const cardImage = cardElement.querySelector('.elements__photo');
  const cardTitle = cardElement.querySelector('.elements__info-place');
  const cardDeleteBtn = cardElement.querySelector('.elements__delete-icon');
  const cardLikeBtn = cardElement.querySelector('.elements__like-icon');
  cardTitle.textContent = name;
  cardImage.src = link;
  cardImage.alt = name;

  cardImage.addEventListener('click', function () {
    openPopup(imagePopup);
    imagePopupLink.src = cardImage.src;
    imagePopupLink.alt = cardTitle.textContent;
    imagePopupTitle.textContent = cardTitle.textContent;
  });

  cardDeleteBtn.addEventListener('click', function () {
    cardElement.remove();
  })

  cardLikeBtn.addEventListener('click', function () {
    cardLikeBtn.classList.toggle('elements__like-icon_active');
  })

  return cardElement
}

initialCards.reverse().forEach(function (cardData) {
  const card = createCard(cardData.name, cardData.link);
  addCard(cardContainer, card);
});

export {
  addCard,
  createCard,
}
