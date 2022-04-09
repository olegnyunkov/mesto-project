export class UserInfo {
    constructor({profileName, profileDescription, avatarPhoto}) {

        this.name = document.querySelector(profileName)
        this.description = document.querySelector(profileDescription)
        this.avatar = document.querySelector(avatarPhoto)
    }


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