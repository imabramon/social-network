import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  logged: false,
  token: null,
  username: '',
  image: '',
  email: '',
}

const userDataSlice = createSlice({
  name: 'userData',
  initialState,
  reducers: {
    loginUser: (state, action) => {
      const { username, image, email, token } = action.payload
      state.username = username
      state.image = image
      state.email = email
      state.logged = true
      state.token = token
    },
    logoutUser: (state) => {
      state.logged = false
      state.username = ''
      state.email = ''
      state.image = ''
      state.token = null
    },
    updateUser: (state, action) => {
      const { username, image, email } = action.payload
      state.username = username
      state.image = image
      state.email = email
    },
  },
})

export const { loginUser, logoutUser, updateUser } = userDataSlice.actions

export default userDataSlice.reducer
