import axios from 'axios'
import * as storage from '../storage'
import * as types from './mutation-types'

export const ActionDoLogin = async ({ dispatch }, payload) => {

  return await axios({
    method: 'post',
    url: 'https://mitmirror.herokuapp.com/api/auth/',
    data: {
      email: payload.email,
      password: payload.password
    }
  }).then((response) => {

    const dataResponse = response.data;
    
    storage.setLocalCurrentUserId(dataResponse.user.id)
    storage.setLocalToken(dataResponse.Authorization)
    dispatch('ActionSetToken', dataResponse.Authorization)
    dispatch('ActionSetUser', dataResponse.user)
    dispatch('ActionSetCurrentUserId', dataResponse.user.id)
  })
}

export const ActionCheckToken = ({ dispatch, state }) => {
  if (state.token && state.user) {
    return Promise.resolve(state.token)
  }
  const token = storage.getLocalToken()
  dispatch('ActionSetToken', token)
  
  if (!token) {
    return Promise.reject(new Error('Token Inválido'))
  }
  
  return dispatch('ActionLoadSession')
}

export const ActionLoadSession = ({ dispatch }) => {
  return new Promise ((resolve, reject) => {
    
    try {
      const currentId = storage.getLocalCurrentUserId()
      const currentToken = storage.getLocalToken();
      axios({
        method: 'get',
        url: `https://mitmirror.herokuapp.com/api/users/${currentId}/`,
        headers: {'Authorization': `Bearer ${currentToken}`}
      })
      .then((response) => {
      const dataResponse = response.data.data
          
      dispatch('ActionSetUser', dataResponse)
      dispatch('ActionSetCurrentUserId', dataResponse.id)
      resolve()
      })
    } catch (error) {
  
      if (error == 'Error: Request failed with status code 500') {
        console.log('Deu errinho de server mas ja ta tudo bem!, haha')
        ActionLoadSession()
      }

      dispatch('ActionSignOut')
      reject(error)
    }
  })
}

export const ActionSetUser = ({ commit }, payload) => {
    commit(types.SET_USER, payload)
}

export const ActionSetCurrentUserId = ({ commit }, payload) => {
  commit(types.SET_CURRENT_USER_ID, payload)
}

export const ActionSetToken = ({ commit }, payload) => {
  commit(types.SET_TOKEN, payload)
}

export const ActionSignOut = ({ dispatch }) => {
  storage.deleteLocalToken()
  storage.deleteLocalCurrentUserId()
  dispatch('ActionSetUser', {})
  dispatch('ActionSetToken', '')
  dispatch('ActionSetCurrentUserId', '')
}
