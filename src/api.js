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

    return res.data.user;
  } catch (e) {}
};

export const logout = () => {
  token = null;
};

export const register = async (username, email, password) => {
  try {
    const answer = await apiServise.post('/users', {
      user: { username, email, password },
    });
    token = answer.data.user.token;
    return answer.data.user;
  } catch (e) {
    throw e;
  }
};

export const update = async (username, email, password, url) => {
  try {
    await apiServise.put(
      '/user',
      {
        user: {
          username,
          email,
          password,
          image: url,
        },
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  } catch (e) {
    throw e;
  }
};
