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

  _showInputError() {
    const errorElement = this._formElement.querySelector(`.${this._inputSelector.id}__error`);
    this._inputSelector.classList.add(this._inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._textErrorClass);
  };

  _hideInputError() {
    const errorElement = this._formElement.querySelector(`.${this._inputSelector.id}__error`);
    this._inputSelector.classList.remove(this._inputErrorClass);
    errorElement.classList.remove(this._textErrorClass);
    errorElement.textContent = 'error';
  };

  _disableButton() {
    this._buttonSelector.classList.add(this._buttonErrorClass);
    this._buttonSelector.disabled = true;
  };

  _enableButton() {
    this._buttonSelector.classList.remove(this._buttonErrorClass);
    this._buttonSelector.disabled = false;
  };

  _hasInvalidInput() {
    // return inputList.some((inputElement) => {
      return !this._inputSelector.validity.valid;
    // }
    // );
  };

  _toggleButton() {
    const buttonElement = this._formElement.querySelector(this._buttonSelector);
    if (this._hasInvalidInput()) {
      this._disableButton();
    } else {
      this._enableButton();
    }
  };

  _checkInputValidity() {
    if (!this._inputSelector.validity.valid) {
      this._showInputError();
    } else {
      this._hideInputError();
    }
  };

  _setEventListeners() {
    // const inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));
    // inputList.forEach((inputElement) => {
      this._inputSelector.addEventListener('input', () => {
        this._checkInputValidity();
        this._toggleButton();
      });
    // }
    // );
    this._toggleButton();
  };

  enableValidation() {
    // const formList = Array.from(document.querySelectorAll(settings.formSelector));
    // formList.forEach((formElement) => {
    this._formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
      this._setEventListeners();
  // }
  // );
  };
};