const postsReducer = (posts = [], action) => {
  switch (action.type) {
    case 'SET_POSTS':
      return action.payload;
    default:
      return posts;
  }
}

export default postsReducer;