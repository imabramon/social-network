import { InputActionsType } from './inputActions'

export const inputsReducer = (state = [], action) => {
  const { type, payload } = action
  switch (type) {
    case InputActionsType.add: {
      const { value } = payload

      return [...state, { value }]
    }

    case InputActionsType.remove: {
      const { index } = payload
      const newState = state.reduce((arr, elem, elemIndex) => {
        if (elemIndex === index) {
          return [...arr]
        }

        return [...arr, elem]
      }, [])
      return newState
    }

    case InputActionsType.change: {
      const { index, value } = payload
      const newState = state.reduce((arr, elem, elemIndex) => {
        if (elemIndex === index) {
          return [...arr, { value }]
        }

        return [...arr, elem]
      }, [])
      return newState
    }
    default:
      return state
  }
}
