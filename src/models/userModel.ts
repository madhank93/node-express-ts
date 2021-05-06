import { Model, Schema, model, Document } from 'mongoose';

export interface IUserDocument extends Document {
    username: string;
    password: string;
}

const userSchema: Schema = new Schema({
    username: {
        type: String,
        unique: true,
        required: [true, 'Username is required'],
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
    },
});

export const User: Model<IUserDocument> = model('User', userSchema);
