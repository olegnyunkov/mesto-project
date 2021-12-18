
// открытие и закрытие формы профиля
const popup = document.querySelector('.popup');
const formClose = popup.querySelector('.form__close');
const profileEdit = document.querySelector('.profile__edit');

function popupOpened() {
  popup.classList.add('popup_opened');
  popup.classList.remove('popup_closed');
}

function popupClosed() {
  popup.classList.add('popup_closed');
  popup.classList.remove('popup_opened')
}

profileEdit.addEventListener('click', popupOpened);
formClose.addEventListener('click', popupClosed);

// редактирование и сохренение данных профиля
const formElement = document.querySelector('.form__input');
const nameInput = document.querySelector('.form__field-name');
const jobInput = document.querySelector('.form__field-about');

  function formSubmitHandler (evt) {
    evt.preventDefault();
    let formNameInput = nameInput.value;
    let jobNameInput = jobInput.value;
    document.querySelector('.profile__name').textContent = formNameInput;
    document.querySelector('.profile__text').textContent = jobNameInput;
    popupClosed();
  }

formElement.addEventListener('submit', formSubmitHandler);

// массив данных для карточек
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

// открытие и закрытие формы карточек
const popupPlace = document.querySelector('.popup-place');
const formPlaceClose = popupPlace.querySelector('.form-place__close');
const placeEdit = document.querySelector('.profile__add');

function popupPlaceOpened() {
  popupPlace.classList.add('popup-place_opened');
  popupPlace.classList.remove('popup-place_closed');
}

function popupPlaceClosed() {
  popupPlace.classList.add('popup-place_closed');
  popupPlace.classList.remove('popup-place_opened')
}

placeEdit.addEventListener('click', popupPlaceOpened);
formPlaceClose.addEventListener('click', popupPlaceClosed);

// добавление и сохранение карточек

