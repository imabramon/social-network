import { ActionTypes } from './actionTypes';

export const loginUser = (username) => ({
  type: ActionTypes.Login,
  payload: {
    username,
  },
});

export const logoutUser = () => ({
  type: ActionTypes.Logout,
});
