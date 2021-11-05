import * as types from './mutation-types'
import axios from 'axios'

export const ActionDoLogin = async ({ dispatch }, payload) => {

  return await axios.post('https://mitmirror.herokuapp.com/api/auth/', {
    email: payload.email,
    password: payload.password
  }).then((response) => {

    const dataResponse = response.data;
    
    dispatch('ActionSetUser', 'Provisório-Bolsonaro')
    dispatch('ActionSetToken', dataResponse.Authorization)

    // const status = response.status;

    // this.token = dataResponse.Authorization
    // this.userId = dataResponse.id

    // sessionStorage.current_token = this.token;
    // sessionStorage.current_user_id = this.userId;

  })
}

export const ActionSetUser = ({ commit }, payload) => {
    commit(types.SET_USER, payload)
}

export const ActionSetToken = ({ commit }, payload) => {
  commit(types.SET_TOKEN, payload)
}

/*
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
}*/ 