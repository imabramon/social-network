export const PagePath = {
  feed: '/articles',
  article: {
    config: '/articles/view/:id',
    goTo: (id) => `/articles/view/${id}`,
  },
  createArticle: '/articles/create',
  editArticle: {
    config: '/articles/edit/:id',
    goTo: (id) => `/articles/edit/${id}`,
  },
  userSignIn: '/user/signin',
  userSignUp: '/user/signup',
  userEdit: '/user/edit',
};
