export class FormValidator {
  constructor(config, formElement) {
    this._formElement = formElement;
    this._formSelector = config.formSelector;
    this._inputSelector = config.inputSelector;
    this._buttonSelector = config.buttonSelector;
    this._inputErrorClass = config.inputErrorClass;
    this._textErrorClass = config.textErrorClass;
    this._buttonErrorClass = config.buttonErrorClass;
    this._formBtn = this._formElement.querySelector(this._buttonSelector);
    this._inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));
  }

  _showInputError(inputElement, errorMessage) {
    const errorElement = this._formElement.querySelector(`.${inputElement.id}__error`);
    inputElement.classList.add(this._inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._textErrorClass);
  };

  _hideInputError(inputElement) {
    const errorElement = this._formElement.querySelector(`.${inputElement.id}__error`);
    inputElement.classList.remove(this._inputErrorClass);
    errorElement.classList.remove(this._textErrorClass);
    errorElement.textContent = 'error';
  };

  _disableButton() {
    this._formBtn.classList.add(this._buttonErrorClass);
    this._formBtn.disabled = true;
  };

  _enableButton() {
    this._formBtn.classList.remove(this._buttonErrorClass);
    this._formBtn.disabled = false;
  };

  resetValidation() {
    this._toggleButton();

    this._inputList.forEach((inputElement) => {
        this._hideInputError(inputElement)
      });
  };

  _hasInvalidInput() {
    return this._inputList.some((inputElement) => {
      return !inputElement.validity.valid;
      }
    );
  };

  _toggleButton() {
    if (this._hasInvalidInput(this._inputList)) {
      this._disableButton(this._formBtn);
    } else {
      this._enableButton(this._formBtn);
    }
  };

  _checkInputValidity(inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, inputElement.validationMessage);
    } else {
      this._hideInputError(inputElement);
    }
  };

  _setEventListeners() {
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._checkInputValidity(inputElement);
        this._toggleButton(this._inputList);
      });
    });
    this._toggleButton(this._inputList);
  };

  enableValidation() {
    this._formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
      this._setEventListeners();
  }};