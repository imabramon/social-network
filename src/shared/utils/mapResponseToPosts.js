export const mapResponseToPosts = (data) => ({
  id: data.slug,
  title: data.title,
  likes: data.favoritesCount,
  tags: data.tags,
  dedscription: data.description,
  userInfo: { name: data.author.username, avatarUrl: data.author.image },
  date: data.createdAt,
});
