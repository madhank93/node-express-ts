import { Response, Request } from 'express';
import { User, UserDocument } from '../models/userModel';
import bcrypt from 'bcrypt';

export const signUp = async (req: Request, res: Response): Promise<void> => {
    const { username, password } = req.body;
    try {
        const encryptedPassword = await bcrypt.hash(password, 12);
        await User.create({
            username,
            password: encryptedPassword,
        });
        res.status(200).json({
            status: 'Success',
            message: 'User created successfully',
        });
    } catch (error) {
        console.log(error);
        res.status(400).json({
            status: 'Fail',
        });
    }
};

export const signIn = async (req: Request, res: Response): Promise<void> => {
    const { username, password } = req.body;

    try {
        const user: UserDocument = await User.findOne({ username: username });

        if (!user) {
            res.status(404).json({
                status: 'fail',
                message: 'User not found',
            });
        }

        const isAuthenticated = bcrypt.compare(password, user.password);

        if (isAuthenticated) {
            res.status(200).json({
                status: 'Success',
            });
        } else {
            res.status(400).json({
                status: 'Fail',
            });
        }
    } catch (error) {
        console.log(error);
        res.status(400).json({
            status: 'Fail',
        });
    }
};
