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

const profilePopup = document.querySelector('.popup-profile');
const profilePopupCloseBtn = profilePopup.querySelector('.popup__close');
const profilePopupForm = profilePopup.querySelector('.form__input');
const profileNameInput = profilePopup.querySelector('.form__field-name');
const profileDescriptionInput = profilePopup.querySelector('.form__field-about');
const profileEditBtn = document.querySelector('.profile__edit');

const placePopup = document.querySelector('.popup-place');
const placePopupCloseBtn = placePopup.querySelector('.popup__close');
const placePopupForm = placePopup.querySelector('.form__input');
const placeEditBtn = document.querySelector('.profile__add');

const imagePopup = document.querySelector('.popup-image');
const imagePopupCloseBtn = imagePopup.querySelector('.popup__close');
const imagePopupLink = imagePopup.querySelector('.popup__image');
const imagePopupTitle = imagePopup.querySelector('.popup__image-title');

const cardTemplate = document.querySelector("#elements_card");

function openPopup(item) {
  item.classList.add('popup_opened');
}
function closePopup(item) {
  item.classList.remove('popup_opened');
}

function handleProfileFormSubmit (evt) {
  evt.preventDefault();
  const profileName = profileNameInput.value;
  const profileDescription = profileDescriptionInput.value;
  document.querySelector('.profile__name').textContent = profileName;
  document.querySelector('.profile__text').textContent = profileDescription;
  closePopup(profilePopup);
}

profileEditBtn.addEventListener('click', function() {
  openPopup(profilePopup);
});
profilePopupCloseBtn.addEventListener('click', function() {
  closePopup(profilePopup);
});

placeEditBtn.addEventListener('click', function() {
  openPopup(placePopup);
});
placePopupCloseBtn.addEventListener('click', function() {
  closePopup(placePopup);
});

imagePopupCloseBtn.addEventListener('click', function () {
  closePopup(imagePopup);
})

profilePopupForm.addEventListener('submit', handleProfileFormSubmit);

initialCards.reverse().forEach(function (cardData) {
  const cardElement = cardTemplate.cloneNode(true).content.querySelector('.elements__grid-unit');
  const cardImage = cardElement.querySelector('.elements__photo');
  const cardTitle = cardElement.querySelector('.elements__info-place');
  const cardDeleteBtn = cardElement.querySelector('.elements__delete-icon');
  const cardLikeBtn = cardElement.querySelector('.elements__like-icon');
  const cardContainer = document.querySelector('.elements__grid');
  cardTitle.textContent = cardData.name;
  cardImage.src = cardData.link;
  cardImage.addEventListener('click', function () {
    openPopup(imagePopup);
    imagePopupLink.src = cardImage.src;
    imagePopupTitle.textContent = cardTitle.textContent;
  });
  cardContainer.prepend(cardElement);
  cardDeleteBtn.addEventListener('click', function () {
    cardElement.remove();
  })
  cardLikeBtn.addEventListener('click', function () {
    cardLikeBtn.classList.toggle('elements__like-icon_active');
  })
});


// formPlace.addEventListener('submit', function (evt) {
//   evt.preventDefault();
//   const newCardTitleAdd = popupPlace.querySelector('.form__field-name');
//   const newCardImageAdd = popupPlace.querySelector('.form__field-about');
//   const cardElement = cardTemplate.cloneNode(true).content.querySelector('.elements__grid-unit');
//   const cardTitle = cardElement.querySelector('.elements__info-place');
//   const cardImage = cardElement.querySelector('.elements__photo');
//   const deleteCard = cardElement.querySelector('.elements__delete-icon');
//   const likeCard = cardElement.querySelector('.elements__like-icon');
//   cardTitle.textContent = newCardTitleAdd.value;
//   cardImage.src = newCardImageAdd.value;
//   newElementContainer.prepend(cardElement);
//   popupPlaceClosed();
//   deleteCard.addEventListener('click', function (evt) {
//     cardElement.remove();
//   });
//   likeCard.addEventListener('click', function () {
//     likeCard.classList.toggle('elements__like-icon_active');
//   })
// });
