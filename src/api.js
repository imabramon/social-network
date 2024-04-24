import axios from 'axios';

let token = null;

export const apiServise = axios.create({
  baseURL: 'https://blog.kata.academy/api/',
});

export const login = async (email, password) => {
  try {
    const answer = await apiServise.post('/users/login', {
      user: { email, password },
    });
    token = answer.data.user.token;
    //console.log(answer);
    return answer.data.user;
  } catch (e) {
    throw e;
  }
};

export const getUserInfo = async () => {
  try {
    const res = await apiServise.get('/user', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log('user info res', res);
  } catch (e) {}
};

export const logout = () => {
  token = null;
};
