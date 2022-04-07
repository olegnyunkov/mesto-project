export class UserInfo {
   constructor(profileNameInput, profileDescriptionInput, avatarPhoto) {

      // this._name = document.querySelector(profileNameInput)
      // this._description = document.querySelector(profileDescriptionInput)
      // this._avatar = document.querySelector(avatarPhoto)
   }

//получаем информацию о пользователе

   getUserInfo() {
      // this._data = {}
      // this._data.name = this._name.textContent
      // this._data.about = this._description.textContent

      // return this._data
   }

   //отправляем информацию о пользователе
   setUserAvatar(avatar) {
      //один из 2х способов
      //   this._avatar.src = avatarPopupInput.value // это если передовать на прямую
      //   this._avatarPhoto.src = avatarPopupInput.value
   }



   setUserInfo(userInfo) {
      this._name.textContent = userInfo.name,
      this._description.textContent = userInfo.about
      this.setUserAvatar(userInfo.avatar)
   }
}
