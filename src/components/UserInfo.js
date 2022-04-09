export class UserInfo {
    constructor({profileName, profileDescription, avatarPhoto}) {

        this.name = document.querySelector(profileName)
        this.description = document.querySelector(profileDescription)
        this.avatar = document.querySelector(avatarPhoto)
        console.log(this.name, this.description, this.avatar)
    }

    //получаем информацию о пользователе
    // получить айдишник пользователя? 
    // getUserInfo(userProfile) {
    //     return this.userProfile = userProfile
    // }

    //устанавливаем информацию о пользователе
    setUserInfo(userProfile) {
        this.name.textContent = userProfile.name
        this.description.textContent = userProfile.about
    }

    setAvatarInfo(userProfile) {
        this.avatar.src = userProfile.avatar
    }

}

// export class UserInfo {
//     constructor(name, about, avatar) {
//         this._name = name;
//         this._about = about;
//         this._avatar = avatar;
//     }

//     setUserInfo() {
//         document.querySelector('.profile__name').textContent = this._name;
//         document.querySelector('.profile__text').textContent = this._about;
//     }

//     setAvatarInfo() {
//         document.querySelector('.profile__avatar').src = this._avatar;
//     }
// }