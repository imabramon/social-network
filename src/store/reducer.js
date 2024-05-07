import { ActionTypes } from './actionTypes'

const initialState = {
  logged: false,
  userData: {
    username: '',
    image: '',
    email: '',
  },
}

export const reducer = (state = initialState, action = {}) => {
  const { type } = action
  switch (type) {
    case ActionTypes.Login: {
      const { userData } = state
      return {
        ...state,
        logged: true,
        userData: { ...userData, ...action.payload },
      }
    }
    case ActionTypes.Logout: {
      return { ...state, logged: false, userData: {} }
    }
    case ActionTypes.Update: {
      return { ...state, userData: action.payload }
    }
    default:
      return state
  }
}
