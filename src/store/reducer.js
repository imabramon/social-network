import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  logged: false,
  username: '',
  image: '',
  email: '',
}

const userDataSlice = createSlice({
  name: 'userData',
  initialState,
  reducers: {
    loginUser: (state, action) => {
      const { username, image, email } = action.payload
      state.username = username
      state.image = image
      state.email = email
      state.logged = true
    },
    logoutUser: (state) => {
      state.logged = false
      state.username = ''
      state.email = ''
      state.image = ''
    },
    updateUser: (state, action) => {
      const { username, image, email } = action.payload
      state.username = username
      state.image = image
      state.email = email
    },
  },
})

// export const reducer = (state = initialState, action = {}) => {
//   const { type } = action
//   switch (type) {
//     case ActionTypes.Login: {
//       const { userData } = state
//       return {
//         ...state,
//         logged: true,
//         userData: { ...userData, ...action.payload },
//       }
//     }
//     case ActionTypes.Logout: {
//       return { ...state, logged: false, userData: {} }
//     }
//     case ActionTypes.Update: {
//       return { ...state, userData: action.payload }
//     }
//     default:
//       return state
//   }
// }

export const { loginUser, logoutUser, updateUser } = userDataSlice.actions

export default userDataSlice.reducer
