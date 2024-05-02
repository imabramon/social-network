import axios from 'axios';
import { mapResponseToPosts } from './shared/utils/mapResponseToPosts';

let token = null;

export const apiServise = axios.create({
  baseURL: 'https://blog.kata.academy/api/',
});

export const login = async (email, password) => {
  
    const answer = await apiServise.post('/users/login', {
      user: { email, password },
    });
    token = answer.data.user.token;
    return answer.data.user;
 
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

const pageLength = 10;

const getSkipCountFromLength = (page) => pageLength * (page - 1);

export const getArticles = async (page = 1) => {
  const {
    data: { articles },
  } = await apiServise.get('/articles', {
    params: {
      limit: pageLength,
      offset: getSkipCountFromLength(page),
    },
  });

  console.log(articles)

  return articles.map(mapResponseToPosts);
};

export const createArticle = async (title, description, body, tags) => {
  try {
    const {
      data: {
        article: { slug },
      },
    } = await apiServise.post(
      '/articles',
      {
        article: {
          title,
          description,
          body,
          tagList: tags,
        },
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return slug;
  } catch (e) {
    throw e;
  }
};

export const loadArticle = async (id) => {
  try {
    const {
      data: {
        article,
      },
    } = await apiServise.get(
      `/articles/${encodeURI(id)}`
    );

    return mapResponseToPosts(article);
  } catch (e) {
    throw e;
  }
}