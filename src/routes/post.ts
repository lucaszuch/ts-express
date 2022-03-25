import { Router } from 'express';
const router = Router();

// Controllers
import {
  addPost,
  deletePost,
  getAllPost,
  getPost,
  updatePost,
} from '../controllers/posts';

// Routes
// Add a new post
router.post('/', addPost);

// Get all posts
router.get('/', getAllPost);

// Get specific post
router.get('/:id', getPost);

// Edit a post
router.patch('/:id', updatePost);

// Delete a post
router.delete('/:id', deletePost);

export default router;
