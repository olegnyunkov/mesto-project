
// index.js
const createCard = (cardData, container) => {
  const htmlCardElem = getCardElement(
  { 
    ...cardData,
    currentUserId: userId,
  },
  (cardElement, cardId, isLiked) => {
    // здесь промис обращения к серверу на простановку лайка
    // и в случае успеха простановка лайка в разметке
  },
  (cardElement, cardId) => { // эта функция-третий аргумент будет вызываться при клике на крестик
    const handleRemoveCardSubmit = (evt) => { // внутри создаём вложенную функцию-обработчик
      evt.preventDefault();
  
      removeCard(cardId) // отправляемся на сервер за подтверждением удаления
        .then(() => {
          handleDeleteCard(cardElement); // удаление карточки из размтетки должно происходить только в случае успешного запроса
          closeModalWindow(removeCardModalWindow);  // закрытие модальных окон должно происходить только в случае успешного запроса
        })
        .catch(err => console.log(`При удалении карточки: ${err}`));
  
      // а также внутри этого самого обработчика выполняем удаление его самого же
      // !!! вот это важный и нужный момент
      removeCardModalWindow.removeEventListener('submit', handleRemoveCardSubmit);
    };
    
    removeCardModalWindow.addEventListener('submit', handleRemoveCardSubmit);
    openModalWindow(removeCardModalWindow);
  }
);

container.prepend(htmlCardElem);
};

// card.js
export const getCardElement = (data, handleLikeClick, handleDeleteClick) => {
const cardElement = getFromTemplate();
// создание HTML-карточки в памяти и навешивание листенеров
return cardElement;
};