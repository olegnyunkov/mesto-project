import {
  openPopup,
} from './modal.js';

const cardTemplate = document.querySelector("#elements_card");
const cardContainer = document.querySelector('.elements__grid');
const imagePopup = document.querySelector('.popup-image');
const imagePopupLink = imagePopup.querySelector('.popup__image');
const imagePopupTitle = imagePopup.querySelector('.popup__image-title');

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
  });

  cardLikeBtn.addEventListener('click', function () {
    cardLikeBtn.classList.toggle('elements__like-icon_active');
  });

  return cardElement
};

export {
  addCard,
  createCard,
  cardContainer,
  imagePopup,
}
