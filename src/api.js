import axios from 'axios'
import { mapResponseToPosts } from './shared/utils/mapResponseToPosts'

let token = null

export const apiServise = axios.create({
  baseURL: 'https://blog.kata.academy/api/',
})

export const login = async (email, password) => {
  const answer = await apiServise.post('/users/login', {
    user: { email, password },
  })
  token = answer.data.user.token
  return answer.data.user
}

export const getUserInfo = async () => {
  const res = await apiServise.get('/user', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

  return res.data.user
}

export const logout = () => {
  token = null
}

export const register = async (username, email, password) => {
  const answer = await apiServise.post('/users', {
    user: { username, email, password },
  })
  token = answer.data.user.token
  return answer.data.user
}

export const update = async (username, email, password, url) => {
  await apiServise.put(
    '/user',
    {
      user: {
        username,
        email,
        password,
        image: !url ? null : url,
      },
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  )
}

const pageLength = 10

const getSkipCountFromLength = (page) => pageLength * (page - 1)

export const getArticles = async (page = 1) => {
  const {
    data: { articles },
  } = await apiServise.get('/articles', {
    params: {
      limit: pageLength,
      offset: getSkipCountFromLength(page),
    },
    headers: token
      ? {
          Authorization: `Bearer ${token}`,
        }
      : null,
  })

  return articles.map(mapResponseToPosts)
}

const asyncTimer = (time) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve()
    }, time)
  })

export const createArticle = async (title, description, body, tags) => {
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
        tagList: tags.filter((el) => el.trim() !== ''),
      },
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  )

  return slug
}

export const loadArticle = async (id) => {
  const {
    data: { article },
  } = await apiServise.get(`/articles/${encodeURI(id)}`, {
    headers: token
      ? {
          Authorization: `Bearer ${token}`,
        }
      : null,
  })

  return mapResponseToPosts(article)
}

export const editArticle = async (id, title, description, body, tags) => {
  const {
    data: {
      article: { slug },
    },
  } = await apiServise.put(
    `/articles/${encodeURI(id)}`,
    {
      article: {
        title,
        description,
        body,
        tagList: tags.filter((el) => el.trim() !== ''),
      },
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  )

  return slug
}

export const deleteArticleReq = async (id) => {
  const res = await apiServise.delete(`/articles/${encodeURI(id)}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
  return res
}

export const markFavorite = async (id) => {
  const res = await apiServise.post(
    `/articles/${encodeURI(id)}/favorite`,
    null,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  )
  return res
}

export const markUnfavorite = async (id) => {
  const res = await apiServise.delete(`/articles/${encodeURI(id)}/favorite`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

  return res
}
