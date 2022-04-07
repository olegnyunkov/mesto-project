export class UserInfo {
   constructor(name, about, avatar) {
       this._name = name;
       this._about = about;
       this._avatar = avatar;
   }

   setUserInfo() {
       const profileName = document.querySelector('.profile__name');
       const profileDescription = document.querySelector('.profile__text');
       const avatarPhoto = document.querySelector('.profile__avatar');
       profileName.textContent = this._name;
       profileDescription.textContent = this._about;
       avatarPhoto.src = this._avatar;
   }
}