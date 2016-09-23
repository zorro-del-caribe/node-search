module.exports = {
  version: '1.0.0',
  api: {
    classifieds: {
      index: {
        method: 'post',
        path: '/',
        body: ['id', 'title', 'content', 'createdAt', 'updatedAt', 'price', 'tags', 'author']
      },
      search: {
        method: 'post',
        path: '/search',
        body: ['query', 'offset', 'size']
      }
    }
  }
};