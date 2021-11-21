//sessionStorage
export const getSessionToken = () => sessionStorage.getItem('token')
export const deleteSessionToken = () => sessionStorage.removeItem('token')
export const setSessionToken = token => sessionStorage.setItem('token', token)

export const getSessionCurrentUserId = () => sessionStorage.getItem('current_user_id')
export const deleteSessionCurrentUserId = () => sessionStorage.removeItem('current_user_id')
export const setSessionCurrentUserId = id => sessionStorage.setItem('current_user_id', id)

//localStorage
export const getLocalToken = () => localStorage.getItem('token')
export const deleteLocalToken = () => localStorage.removeItem('token')
export const setLocalToken = token => localStorage.setItem('token', token)

export const getLocalCurrentUserId = () => localStorage.getItem('current_user_id')
export const deleteLocalCurrentUserId = () => localStorage.removeItem('current_user_id')
export const setLocalCurrentUserId = id => localStorage.setItem('current_user_id', id)
