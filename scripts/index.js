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

const profileName = document.querySelector('.profile__name');
const profileDescription = document.querySelector('.profile__text');

const placePopup = document.querySelector('.popup-place');
const placePopupCloseBtn = placePopup.querySelector('.popup__close');
const placePopupForm = placePopup.querySelector('.form__input');
const placePopupNameInput = placePopup.querySelector('.form__field-name');
const placePopupDescriptionInput = placePopup.querySelector('.form__field-about');
const placeEditBtn = document.querySelector('.profile__add');

const imagePopup = document.querySelector('.popup-image');
const imagePopupCloseBtn = imagePopup.querySelector('.popup__close');
const imagePopupLink = imagePopup.querySelector('.popup__image');
const imagePopupTitle = imagePopup.querySelector('.popup__image-title');

const cardTemplate = document.querySelector("#elements_card");
const cardContainer = document.querySelector('.elements__grid');

function openPopup(item) {
  item.classList.add('popup_opened');
}
function closePopup(item) {
  item.classList.remove('popup_opened');
}

function handleProfileFormSubmit (evt) {
  evt.preventDefault();
  profileName.textContent = profileNameInput.value;
  profileDescription.textContent = profileDescriptionInput.value;
  closePopup(profilePopup);
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
  cardContainer.prepend(cardElement);
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
  createCard(cardData.name, cardData.link)
});

placePopupForm.addEventListener('submit', function (evt) {
  evt.preventDefault();
  createCard(placePopupNameInput.value, placePopupDescriptionInput.src);
  closePopup(placePopup);
  placePopupNameInput.value = '';
  placePopupDescriptionInput.value = '';
});
