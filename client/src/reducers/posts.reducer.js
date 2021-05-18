const postsReducer = (posts = [], action) => {
  switch (action.type) {
    case 'SET_POSTS':
      return action.payload;
    case 'UPDATE':
      return posts.map((post) => post._id === action.payload._id ? action.payload : post);
    default:
      return posts;
  }
}

export default postsReducer;