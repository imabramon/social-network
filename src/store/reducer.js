import { ActionTypes } from './actionTypes';

const initialState = {
  logged: false,
  userData: {
    name: null,
    avatarUrl: null,
  },
};

export const reducer = (state = initialState, action) => {
  const { type } = action;
  switch (type) {
    case ActionTypes.Login: {
      const {
        payload: { username },
      } = action;
      const { userData } = state;
      return { ...state, logged: true, userData: { ...userData, name: username } };
    }
    case ActionTypes.Logout: {
      return { ...state, logged: false, userData: null };
    }
    default:
      return state;
  }
};
