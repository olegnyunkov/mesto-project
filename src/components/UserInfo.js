export class UserInfo {
    constructor(name, about, avatar) {
        this._name = name;
        this._about = about;
        this._avatar = avatar;
    }

    setUserInfo() {
        document.querySelector('.profile__name').textContent = this._name;
        document.querySelector('.profile__text').textContent = this._about;
        document.querySelector('.profile__avatar').src = this._avatar;
    }
}