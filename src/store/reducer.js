const initialState = {
  logged: false,
};

export const reducer = (state = initialState, action) => {
  const { type } = action;
  switch (type) {
    case 'login': {
      return { ...state, logged: true };
    }
    case 'logout': {
      return { ...state, logged: false };
    }
    default:
      return state;
  }
};
