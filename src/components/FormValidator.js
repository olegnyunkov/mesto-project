export class FormValidator {
  constructor(config, formElement) {
    this._formElement = formElement;
    this._formSelector = config.formSelector;
    this._inputSelector = config.inputSelector;
    this._buttonSelector = config.buttonSelector;
    this._inputErrorClass = config.inputErrorClass;
    this._textErrorClass = config.textErrorClass;
    this._buttonErrorClass = config.buttonErrorClass;
  }

  _showInputError(formElement, inputElement, errorMessage) {
    const errorElement = formElement.querySelector(`.${inputElement.id}__error`);
    inputElement.classList.add(this._inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._textErrorClass);
  };

  _hideInputError(formElement, inputElement) {
    const errorElement = formElement.querySelector(`.${inputElement.id}__error`);
    inputElement.classList.remove(this._inputErrorClass);
    errorElement.classList.remove(this._textErrorClass);
    errorElement.textContent = 'error';
  };

  _disableButton(buttonElement) {
    buttonElement.classList.add(this._buttonErrorClass);
    buttonElement.disabled = true;
  };

  _enableButton(buttonElement) {
    buttonElement.classList.remove(this._buttonErrorClass);
    buttonElement.disabled = false;
  };

  _hasInvalidInput(inputList) {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
      }
    );
  };

  _toggleButton(formElement, inputList) {
    const buttonElement = formElement.querySelector(this._buttonSelector);
    if (this._hasInvalidInput(inputList)) {
      this._disableButton(buttonElement);
    } else {
      this._enableButton(buttonElement);
    }
  };

  _checkInputValidity(formElement, inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(formElement, inputElement, inputElement.validationMessage);
    } else {
      this._hideInputError(formElement, inputElement);
    }
  };

  _setEventListeners(formElement) {
    const inputList = Array.from(formElement.querySelectorAll(this._inputSelector));
    inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._checkInputValidity(formElement, inputElement);
        this._toggleButton(formElement, inputList);
      });
    });
    this._toggleButton(formElement, inputList);
  };

  enableValidation() {
    const formList = Array.from(document.querySelectorAll(this._formSelector));
    formList.forEach((formElement) => {
    formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
      this._setEventListeners(formElement);
  });
  }};