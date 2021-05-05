import { Post } from '../models/postModel';
import { Response, Request } from 'express';

// even though req is not used; removing it causes error: res.status is not a function TypeError
export const getAllPosts = async (req: Request, res: Response): Promise<void> => {
    try {
        const posts = await Post.find();

        res.status(200).json({
            status: 'Success',
            results: posts.length,
            data: {
                posts,
            },
        });
    } catch (error) {
        console.log(error);
        res.status(400).json({
            status: 'Fail',
        });
    }
};

export const getOnePost = async (req: Request, res: Response): Promise<void> => {
    try {
        const post = await Post.findById(req.params.id);

        res.status(200).json({
            status: 'Success',
            data: {
                post,
            },
        });
    } catch (error) {
        console.log(error);
        res.status(400).json({
            status: 'Fail',
        });
    }
};

export const createPost = async (req: Request, res: Response): Promise<void> => {
    try {
        const post = await Post.create(req.body);

        res.status(200).json({
            status: 'Success',
            data: {
                post,
            },
        });
    } catch (error) {
        console.log(error);
        res.status(400).json({
            status: 'Fail',
        });
    }
};

export const updatePost = async (req: Request, res: Response): Promise<void> => {
    try {
        const post = await Post.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        });

        res.status(200).json({
            status: 'Success',
            data: {
                post,
            },
        });
    } catch (error) {
        console.log(error);
        res.status(400).json({
            status: 'Fail',
        });
    }
};

export const deletePost = async (req: Request, res: Response): Promise<void> => {
    try {
        await Post.findByIdAndDelete(req.params.id);

        res.status(200).json({
            status: 'Success',
        });
    } catch (error) {
        console.log(error);
        res.status(400).json({
            status: 'Fail',
        });
    }
};
