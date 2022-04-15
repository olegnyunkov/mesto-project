export class UserInfo {
  constructor({ profileName, profileDescription, avatarPhoto }) {
    this.name = document.querySelector(profileName)
    this.description = document.querySelector(profileDescription)
    this.avatar = document.querySelector(avatarPhoto)
    this._userInfo = {}
  }

  getUserInfo() {
    this._userInfo.name = this.name.textContent;
    this._userInfo.about = this.description.textContent;

    return this._userInfo
  }

  setUserInfo(userProfile) {
    this.name.textContent = userProfile.name
    this.description.textContent = userProfile.about
  }

  setAvatarInfo(userProfile) {
    this.avatar.src = userProfile.avatar
  }
}

//Можно лучше

//это если сотрётся

//С сервера всегда приходят все 4 вида данных пользователя при любых изменениях
// профиля: имя, профессия, аватар и _id. Вот все эти 4 вида данных можно было
//  устанавливать в классе UserInfo в одном методе setUserInfo({ name, about, avatar, _id })