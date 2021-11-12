export const getLocalToken = () => localStorage.getItem('token')
export const deleteLocalToken = () => localStorage.removeItem('token')
export const setLocalToken = token => localStorage.setItem('token', token)

export const getLocalCurrentUserId = () => localStorage.getItem('current_user_id')
export const deleteLocalCurrentUserId = () => localStorage.removeItem('current_user_id')
export const setLocalCurrentUserId = id => localStorage.setItem('current_user_id', id)
