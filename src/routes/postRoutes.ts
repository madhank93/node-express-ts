import express from 'express';
import { getAllPosts, createPost, getOnePost, updatePost, deletePost } from '../controllers/postControllers';

const postRouter = express.Router();

postRouter.route('/').get(getAllPosts).post(createPost);

postRouter.route('/:id').get(getOnePost).patch(updatePost).delete(deletePost);

export default postRouter;
