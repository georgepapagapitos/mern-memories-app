import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
  title: String,
  message: String,
  author: String,
  tags: [String],
  selectedFile: String,
  likeCount: {
    type: Number,
    default: 0
  },
  dateCreated: {
    type: Date,
    default: new Date()
  },
});

const Post = mongoose.model('Post', postSchema);

export default Post;