const initialState = {
  logged: true,
  userData: {
    id: 0,
    name: 'abramon',
    avatarUrl:
      'https://sun9-60.userapi.com/s/v1/ig2/nHV2SqpSQ7Q7BkqK8_cWXYwZf4e4weIdpe1DGcW9_e4SkyK0Rw-acA4baUuUMLu_o8imF5xwLf0tD5hfH7zxHAQx.jpg?size=50x50&quality=95&crop=84,40,509,509&ava=1',
  },
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
