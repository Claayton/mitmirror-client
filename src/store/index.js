import { createStore } from 'vuex'
import axios from 'axios';

export default createStore({

  state: {

    isActive: false,
    userData: {
      name: undefined,
      userName: undefined,
      email: undefined,
      profileImage: "http://2.bp.blogspot.com/-Wp3W23haMJQ/TjAyDjqdQCI/AAAAAAAACdA/Zc-iF8qa6m0/s1600/2.jpg"
    },
  },
  mutations: {
    isActiveUser: state => state.isActive = true,
    isNotActiveUser: state => {
      sessionStorage.removeItem("current_user_id");
      sessionStorage.removeItem("current_token");
      window.location.href='/'
      state.isActive = false;
    },
    changeImageProfile: (state, newImage) => state.userData.profileImage = newImage,
    setUserName: (state, name) => state.userData.name = name
  },
  getters: {
    isActive: state => state.isActive
  },
  actions: {

    async readUser() {
      if (sessionStorage.current_user_id) {
        const id = sessionStorage.current_user_id
        await axios.get(`https://mitmirror.herokuapp.com/api/users/${id}/`, {
        }).then((response) => {
          const responseData = response.data.data
          this.state.isActive = true
          this.state.userData.name = responseData.name
          this.state.userData.userName = responseData.username
          this.state.userData.email = responseData.email
          console.log(`O usuário ${this.state.userData.name} esta ativo!`)
        }).catch((error) => {
          if (error == 'Error: Request failed with status code 500') {
            this.readUser()
          }
        });
      } else {
        this.state.isActive = false
      }
    }
  },

  modules: {
  }
})
