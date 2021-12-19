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

const popup = document.querySelector('.popup');
const formClose = popup.querySelector('.form__close');
const profileEdit = document.querySelector('.profile__edit');

const formElement = document.querySelector('.form__input');
const nameInput = document.querySelector('.form__field-name');
const jobInput = document.querySelector('.form__field-about');

const popupPlace = document.querySelector('.popup-place');
const formPlaceClose = popupPlace.querySelector('.form__close');
const placeEdit = document.querySelector('.profile__add');

const cardTemplate = document.querySelector("#elements_card");
const cardImagePhoto = cardTemplate.cloneNode(true).content.querySelector('.elements__photo');
const newElementContainer = document.querySelector('.elements__grid');
const formPlace = popupPlace.querySelector('.form__input');
const imagePreview = cardTemplate.cloneNode(true).content.querySelector('.elements__photo');
console.log(cardImagePhoto)
function popupOpened() {
  popup.classList.add('popup_opened');
  popup.classList.remove('popup_closed');
}
function popupClosed() {
  popup.classList.add('popup_closed');
  popup.classList.remove('popup_opened')
}

function formSubmitHandler (evt) {
  evt.preventDefault();
  let formNameInput = nameInput.value;
  let jobNameInput = jobInput.value;
  document.querySelector('.profile__name').textContent = formNameInput;
  document.querySelector('.profile__text').textContent = jobNameInput;
  popupClosed();
}

function popupPlaceOpened() {
  popupPlace.classList.add('popup_opened');
  popupPlace.classList.remove('popup_closed');
}
function popupPlaceClosed() {
  popupPlace.classList.add('popup_closed');
  popupPlace.classList.remove('popup_opened')
}

initialCards.reverse().forEach(function (cardData) {
  const newCardElement = cardTemplate.cloneNode(true).content.querySelector('.elements__grid-unit');
  const newCardTitle = newCardElement.querySelector('.elements__info-place');
  const newCardImage = newCardElement.querySelector('.elements__photo');
  const newCardDelete = newCardElement.querySelector('.elements__delete-icon');
  const newCardLike = newCardElement.querySelector('.elements__like-icon');
  const imagePreviewPopup = document.querySelector('.popup-image');
  const imagePreviewLink = imagePreviewPopup.querySelector('.popup-image__photo');
  const imagePreviewTitle = imagePreviewPopup.querySelector('.popup-image__title');
  const imagePreviewCloseButton = imagePreviewPopup.querySelector('.form__close');
  newCardTitle.textContent = cardData.name;
  newCardImage.src = cardData.link;
  newCardImage.addEventListener('click', function () {
    console.log('click on')
    imagePreviewPopup.classList.add('popup-image_opened');
    imagePreviewLink.src = newCardImage.src;
    imagePreviewTitle.textContent = newCardTitle.textContent;
  });
  imagePreviewCloseButton.addEventListener('click', function () {
    imagePreviewPopup.classList.remove('popup-image_opened');
  })
  newElementContainer.prepend(newCardElement);
  newCardDelete.addEventListener('click', function () {
    newCardElement.remove();
  })
  newCardLike.addEventListener('click', function () {
    newCardLike.classList.toggle('elements__like-icon_active');
  })
});

profileEdit.addEventListener('click', popupOpened);
formClose.addEventListener('click', popupClosed);
formElement.addEventListener('submit', formSubmitHandler);
placeEdit.addEventListener('click', popupPlaceOpened);
formPlaceClose.addEventListener('click', popupPlaceClosed);
formPlace.addEventListener('submit', function (evt) {
  evt.preventDefault();
  const newCardTitleAdd = popupPlace.querySelector('.form__field-name');
  const newCardImageAdd = popupPlace.querySelector('.form__field-about');
  const cardElement = cardTemplate.cloneNode(true).content.querySelector('.elements__grid-unit');
  const cardTitle = cardElement.querySelector('.elements__info-place');
  const cardImage = cardElement.querySelector('.elements__photo');
  const deleteCard = cardElement.querySelector('.elements__delete-icon');
  const likeCard = cardElement.querySelector('.elements__like-icon');
  cardTitle.textContent = newCardTitleAdd.value;
  cardImage.src = newCardImageAdd.value;
  newElementContainer.prepend(cardElement);
  popupPlaceClosed();
  deleteCard.addEventListener('click', function (evt) {
    cardElement.remove();
  });
  likeCard.addEventListener('click', function () {
    likeCard.classList.toggle('elements__like-icon_active');
  })
});

console.log(cardImagePhoto.src)




