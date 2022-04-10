// import {
//   openPopup,
// } from './modal.js';

// import {
//   userId,
// } from './../index.js';

// const cardContainer = document.querySelector('.elements__grid');
// const imagePopup = document.querySelector('.popup-image');
// const imagePopupLink = imagePopup.querySelector('.popup__image');
// const imagePopupTitle = imagePopup.querySelector('.popup__image-title');

// const getCardElement = (data, handleLikeClick, handleDeleteClick) => {
//   const cardTemplate = document.querySelector("#elements_card");
//   const cardElement = cardTemplate.cloneNode(true).content.querySelector('.elements__grid-unit');
//   const cardImage = cardElement.querySelector('.elements__photo');
//   const cardTitle = cardElement.querySelector('.elements__info-place');
//   const cardDeleteBtn = cardElement.querySelector('.elements__delete-icon');
//   const cardLikeBtn = cardElement.querySelector('.elements__like-icon');
//   const cardLikeCount = cardElement.querySelector('.elements__like-count');
//   const likesArr = data.likes;
//   cardTitle.textContent = data.name;
//   cardImage.src = data.link;
//   cardImage.alt = data.name;
//   cardLikeCount.textContent = likesArr.length;

//   if(data.owner._id === userId) {
//     cardDeleteBtn.classList.add('elements__delete-icon_visible');
//   };

//   likesArr.forEach((cardLikes) => {
//     if (cardLikes._id === userId) {
//       cardLikeBtn.classList.add('elements__like-icon_active');
//     };
//   });

//   cardElement.dataset.id = data._id;
//   const cardId = cardElement.dataset.id

//   cardImage.addEventListener('click', () => {
//     openPopup(imagePopup);
//     imagePopupLink.src = cardImage.src;
//     imagePopupLink.alt = cardTitle.textContent;
//     imagePopupTitle.textContent = cardTitle.textContent;
//   });

//   cardDeleteBtn.addEventListener('click', () => {
//     handleDeleteClick(cardElement, cardId);
//   });

//   cardLikeBtn.addEventListener('click', (evt) => {
//     handleLikeClick(cardElement, cardId)
//   });

//   return cardElement
// }

// export {
//   cardContainer,
//   getCardElement,
// }
