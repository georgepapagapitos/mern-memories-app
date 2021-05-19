import PostMessage from '../models/PostMessage.js';
import mongoose from 'mongoose';

export const getPosts = async (req, res) => {
  try {
    const posts = await PostMessage.find();
    res.status(200).json(posts);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
}

export const createPost = async (req, res) => {
  const post = req.body;
  const newPost = new PostMessage(post);
  try {
    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
}

export const updatePost = async (req, res) => {
  const { id: _id } = req.params;
  const post = req.body;
  if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No post with that id.');
  try {
    const updatedPost = await PostMessage.findByIdAndUpdate(_id, { ...post, _id }, { new: true });
    res.json(updatedPost);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export const deletePost = async (req, res) => {
  const { id: _id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No post with that id.');
  try {
    await PostMessage.findByIdAndRemove(_id);
    res.json({ message: 'Post deleted successfully' })
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}