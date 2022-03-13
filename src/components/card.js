import {
  openPopup,
  closePopup,
} from './modal.js';

import {
  deleteCard,
  setLikeCard,
  removeLikeCard,
} from './api.js';

import {
  deletePopup,
  cardTemplate,
  deletePopupForm,
} from './../index.js';

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
  const cardLikeCount = cardElement.querySelector('.elements__like-count');
  cardTitle.textContent = name;
  cardImage.src = link;
  cardImage.alt = name;

  cardImage.addEventListener('click', () => {
    openPopup(imagePopup);
    imagePopupLink.src = cardImage.src;
    imagePopupLink.alt = cardTitle.textContent;
    imagePopupTitle.textContent = cardTitle.textContent;
  });

  cardDeleteBtn.addEventListener('click', () => {
    openPopup(deletePopup);
    deletePopupForm.addEventListener('submit', function removeCard (evt) {
      evt.preventDefault();
      deleteCard(cardElement.dataset.id, cardElement)
      .then(() => {
        cardElement.remove();
        closePopup(deletePopup);
        deletePopupForm.removeEventListener('submit', removeCard);
      })
      .catch((err) => {
        console.log(err);
      });
    });
  });

  cardLikeBtn.addEventListener('click', () => {
    setLikeCard(cardElement.dataset.id)
    .then((data) => {
      cardLikeBtn.classList.add('elements__like-icon_active');
      cardLikeCount.textContent = data.likes.length;
    })
    .catch((err) => {
      console.log(err);
    });
    if(cardLikeBtn.classList.contains('elements__like-icon_active')) {
      removeLikeCard(cardElement.dataset.id)
      .then((data) => {
        cardLikeBtn.classList.remove('elements__like-icon_active');
        cardLikeCount.textContent = data.likes.length;
      })
      .catch((err) => {
        console.log(err);
      });
    }
  });

  return cardElement
};

export {
  addCard,
  createCard,
  cardContainer,
  imagePopup,
}
