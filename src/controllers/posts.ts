import { RequestHandler } from "express";

// Importing models
import { Post } from '../models/post';

// Constants
const POSTS: Post[] = [];

// Methods
export const addPost: RequestHandler = (req, res, next) => {
  const content = (req.body as {content: string}).content; // type casting
  const postId: string = Math.random().toString();
  const newPost = new Post(postId, content);

  // Adding post to the POST array
  POSTS.push(newPost);

  // Server response
  res.status(201).json({
    message: `New post added - id: ${postId}`,
    addPost: newPost
  });
}

export const getAllPost: RequestHandler = (req, res, next) => {
  // Server response
  res.json({
    posts: POSTS
  });
}

export const getPost: RequestHandler = (req, res, next) => {
  const postId = req.params.id;
  const postIndex = POSTS.findIndex(post => post.id === postId);

  // If there's no index, throw and error
  if(postIndex < 0) {
    throw new Error('Invalid post.');
  }

  // Server response
  res.json({
    post: POSTS[postIndex]
  });
};

export const updatePost: RequestHandler = (req, res, next) => {
  const postId = req.params.id;
  const newContent = (req.body as {content: string}).content; // type casting
  const postIndex = POSTS.findIndex(post => post.id === postId);

  // If there's no index, throw and error
  if(postIndex < 0) {
    throw new Error('Invalid post.');
  }

  // Updates the post
  POSTS[postIndex] = new Post(postId, newContent);

  // Server response
  res.json({
    message: `Post: ${postId} - was updated.`,
    updatePost: POSTS[postIndex]
  });
}

export const deletePost: RequestHandler = (req, res, next) => {
  const postId = req.params.id;
  const postIndex = POSTS.findIndex(post => post.id === postId);

  // If there's no index, throw and error
  if(postIndex < 0) {
    throw new Error('Invalid post.');
  }

  // Remove post
  POSTS.splice(postIndex, 1);

  // Server response
  res.json({
    message: `Post id: ${postId} - was deleted.`
  });
}