"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletePost = exports.updatePost = exports.getPost = exports.getAllPost = exports.addPost = void 0;
// Importing models
const post_1 = require("../models/post");
// Constants
const POSTS = [];
// Methods
const addPost = (req, res, next) => {
    const content = req.body.content; // type casting
    const postId = Math.random().toString();
    const newPost = new post_1.Post(postId, content);
    // Adding post to the POST array
    POSTS.push(newPost);
    // Server response
    res.status(201).json({
        message: `New post added - id: ${postId}`,
        addPost: newPost
    });
};
exports.addPost = addPost;
const getAllPost = (req, res, next) => {
    // Server response
    res.json({
        posts: POSTS
    });
};
exports.getAllPost = getAllPost;
const getPost = (req, res, next) => {
    const postId = req.params.id;
    const postIndex = POSTS.findIndex(post => post.id === postId);
    // If there's no index, throw and error
    if (postIndex < 0) {
        throw new Error('Invalid post.');
    }
    // Server response
    res.json({
        post: POSTS[postIndex]
    });
};
exports.getPost = getPost;
const updatePost = (req, res, next) => {
    const postId = req.params.id;
    const newContent = req.body.content; // type casting
    const postIndex = POSTS.findIndex(post => post.id === postId);
    // If there's no index, throw and error
    if (postIndex < 0) {
        throw new Error('Invalid post.');
    }
    // Updates the post
    POSTS[postIndex] = new post_1.Post(postId, newContent);
    // Server response
    res.json({
        message: `Post: ${postId} - was updated.`,
        updatePost: POSTS[postIndex]
    });
};
exports.updatePost = updatePost;
const deletePost = (req, res, next) => {
    const postId = req.params.id;
    const postIndex = POSTS.findIndex(post => post.id === postId);
    // If there's no index, throw and error
    if (postIndex < 0) {
        throw new Error('Invalid post.');
    }
    // Remove post
    POSTS.splice(postIndex, 1);
    // Server response
    res.json({
        message: `Post id: ${postId} - was deleted.`
    });
};
exports.deletePost = deletePost;
