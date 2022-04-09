export class UserInfo {
    constructor(profileNameInput, profileDescriptionInput, avatarPhoto, ava) {

        // this._name = document.querySelector(profileNameInput)
        // this._description = document.querySelector(profileDescriptionInput)
        // this._avatar = document.querySelector(avatarPhoto)
        this._name = profileNameInput
        this._description = profileDescriptionInput
        this._avatar = avatarPhoto
        this._ava = ava
    }

    static test() {
    
    }

    //получаем информацию о пользователе

    // getUserInfo(data) {
    // this._data = {}
    // this._data.name = this._name.textContent
    // this._data.about = this._description.textContent

    // return this._data
    // }

    //отправляем информацию о пользователе
    setUserInfo(userInfo) {
        this._description.textContent = userInfo.about
        this._name.textContent = userInfo.name
        
        //  один из 2х способов
        this._avatar.src = this._ava.value // это если передовать на прямую
        //   this.avatar.src


        //   this._avatarPhoto.src = avatarPopupInput.value

        //   this.setUserAvatar(userInfo.avatar)
    }
}

// export class UserInfo {
//     constructor(name, about, avatar) {
//         this._name = name;
//         this._about = about;
//         this._avatar = avatar;
//     }

//     setUserInfo() {
//         const profileName = document.querySelector('.profile__name');
//         const profileDescription = document.querySelector('.profile__text');
//         const avatarPhoto = document.querySelector('.profile__avatar');
//         profileName.textContent = this._name;
//         profileDescription.textContent = this._about;
//         avatarPhoto.src = this._avatar;
//     }
// }