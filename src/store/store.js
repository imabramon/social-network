import { configureStore } from '@reduxjs/toolkit'
import userDataReducer from './reducer'

export const store = configureStore({ reducer: { userData: userDataReducer } })
