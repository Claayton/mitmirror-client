import * as types from './mutation-types'

export default {
    [types.SET_USER] (state, payload) {
        state.user = payload
    },
    [types.SET_TOKEN] (state, payload) {
        state.token = payload
    },


    // isActiveUser: state => state.isActive = true,
    // isNotActiveUser: state => {
    //   sessionStorage.removeItem("current_user_id");
    //   sessionStorage.removeItem("current_token");
    //   window.location.href='/'
    //   state.isActive = false;
    // },
    // changeImageProfile: (state, newImage) => state.userData.profileImage = newImage,
    // setUserName: (state, name) => state.userData.name = name

}
