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


const formElement = document.querySelector('.form__input');
const nameInput = document.querySelector('.form__field-name');
const jobInput = document.querySelector('.form__field-about');

  function formSubmitHandler (evt) {
    evt.preventDefault();
    let formNameInput = nameInput.value;
    let jobNameInput = jobInput.value;
    document.querySelector('.profile__name').textContent = formNameInput;
    document.querySelector('.profile__text').textContent = jobNameInput;
  }

formElement.addEventListener('submit', formSubmitHandler);

