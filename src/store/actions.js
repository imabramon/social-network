import { ActionTypes } from './actionTypes';

export const loginUser = (payload) => ({
  type: ActionTypes.Login,
  payload,
});

export const logoutUser = () => ({
  type: ActionTypes.Logout,
});

export const updateUser = (payload) => ({
  type: ActionTypes.Update,
  payload,
});
