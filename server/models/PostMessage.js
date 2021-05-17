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

const PostMessage = mongoose.model('Post Message', postSchema);

export default PostMessage;