const validationConfig = {
  formSelector: '.form',
  inputSelector: '.form__input',
  buttonSelector: '.form__save',
  inputErrorClass: 'form__input_error',
  textErrorClass: 'form__error_visible',
  buttonErrorClass: 'form__save_disabled',
};

const showInputError = (formElement, inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}__error`);
  inputElement.classList.add(validationConfig.inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(validationConfig.textErrorClass);
};

const hideInputError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}__error`);
  inputElement.classList.remove(validationConfig.inputErrorClass);
  errorElement.classList.remove(validationConfig.textErrorClass);
  errorElement.textContent = 'error';
};

const disableButton = (buttonElement) => {
  buttonElement.classList.add(validationConfig.buttonErrorClass);
  buttonElement.disabled = true;
};

const enableButton = (buttonElement) => {
  buttonElement.classList.remove(validationConfig.buttonErrorClass);
  buttonElement.disabled = false;
};

const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};

const toggleButton = (formElement, inputList) => {
  const buttonElement = formElement.querySelector(validationConfig.buttonSelector);
  if (hasInvalidInput(inputList)) {
    disableButton(buttonElement);
  } else {
    enableButton(buttonElement);
  }
}

const checkInputValidity = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
    hideInputError(formElement, inputElement);
  }
};

const setEventListeners = (formElement) => {
  const inputList = Array.from(formElement.querySelectorAll('.form__input'));
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
      checkInputValidity(formElement, inputElement);
      toggleButton(formElement, inputList);
    });
  });
  toggleButton(formElement, inputList);
};

function enableValidation () {
  const formList = Array.from(document.querySelectorAll('.form'));
  formList.forEach((formElement) => {
  formElement.addEventListener('submit', (evt) => {
    evt.preventDefault();
  });
    setEventListeners(formElement);
});
}

enableValidation();
