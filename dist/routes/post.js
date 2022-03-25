"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
// Controllers
const posts_1 = require("../controllers/posts");
// Routes
// Add a new post
router.post('/', posts_1.addPost);
// Get all posts
router.get('/', posts_1.getAllPost);
// Get specific post
router.get('/:id', posts_1.getPost);
// Edit a post
router.patch('/:id', posts_1.updatePost);
// Delete a post
router.delete('/:id', posts_1.deletePost);
exports.default = router;
