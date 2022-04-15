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

  _toggleButton(inputList) {
    if (this._hasInvalidInput(inputList)) {
      this._disableButton(this._formBtn);
    } else {
      this._enableButton(this._formBtn);
    }
  };

  _checkInputValidity(formElement, inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(formElement, inputElement, inputElement.validationMessage);
    } else {
      this._hideInputError(formElement, inputElement);
    }
  };

  _setEventListeners() {
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._checkInputValidity(this._formElement, inputElement);
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