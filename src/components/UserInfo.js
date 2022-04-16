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
    this.setAvatarInfo(userProfile.avatar)
  }

  setAvatarInfo(avatar) {
    this.avatar.src = avatar
  }
}