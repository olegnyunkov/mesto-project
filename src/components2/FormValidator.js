export const validationConfig = {
   formSelector: '.form',
   inputSelector: '.form__input',
   buttonSelector: '.form__save',
   inputErrorClass: 'form__input_error',
   textErrorClass: 'form__error_visible',
   buttonErrorClass: 'form__save_disabled',
};

export class FormValidator {
   constructor(validationConfig, select) {
      this.select = select
      this.formSelector = validationConfig.formSelector
      this.inputSelector = validationConfig.inputSelector
      this.buttonSelector = validationConfig.buttonSelector
      this.inputErrorClass = validationConfig.inputErrorClass
      this.textErrorClass = validationConfig.textErrorClass
      this.buttonErrorClass = validationConfig.buttonErrorClass
   }


   showInputError = (formElement, inputElement, errorMessage, settings) => {
      const errorElement = formElement.querySelector(`.${inputElement.id}__error`);
      inputElement.classList.add(settings.inputErrorClass);
      errorElement.textContent = errorMessage;
      errorElement.classList.add(settings.textErrorClass);
   };

   hideInputError = (formElement, inputElement, settings) => {
      const errorElement = formElement.querySelector(`.${inputElement.id}__error`);
      inputElement.classList.remove(settings.inputErrorClass);
      errorElement.classList.remove(settings.textErrorClass);
      errorElement.textContent = 'error';
   };

   disableButton = (buttonElement, settings) => {
      buttonElement.classList.add(settings.buttonErrorClass);
      buttonElement.disabled = true;
   };

   enableButton = (buttonElement, settings) => {
      buttonElement.classList.remove(settings.buttonErrorClass);
      buttonElement.disabled = false;
   };

   hasInvalidInput = (inputList) => {
      return inputList.some((inputElement) => {
         return !inputElement.validity.valid;
      });
   };

   toggleButton = (formElement, inputList, settings) => {
      const buttonElement = formElement.querySelector(settings.buttonSelector);
      if (hasInvalidInput(inputList)) {
         disableButton(buttonElement, settings);
      } else {
         enableButton(buttonElement, settings);
      }
   }

   checkInputValidity = (formElement, inputElement, settings) => {
      if (!inputElement.validity.valid) {
         showInputError(formElement, inputElement, inputElement.validationMessage, settings);
      } else {
         hideInputError(formElement, inputElement, settings);
      }
   };

   setEventListeners = (formElement, settings) => {
      const inputList = Array.from(formElement.querySelectorAll(settings.inputSelector));
      inputList.forEach((inputElement) => {
         inputElement.addEventListener('input', () => {
            checkInputValidity(formElement, inputElement, settings);
            toggleButton(formElement, inputList, settings);
         });
      });
      toggleButton(formElement, inputList, settings);
   };

   enableValidation(settings) {
      const formList = Array.from(document.querySelectorAll(settings.formSelector));
      formList.forEach((formElement) => {
         formElement.addEventListener('submit', (evt) => {
            evt.preventDefault();
         });
         setEventListeners(formElement, settings);
      });
   }

   enableValidation(validationConfig);

}

export {
   disableButton,
   validationConfig,
};