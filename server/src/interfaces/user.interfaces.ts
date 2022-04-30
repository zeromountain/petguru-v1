import { Document } from 'mongoose';
import { IPost } from './post.interfaces';

export interface IUser extends Document {
  email: string;
  password: string;
  nickname: string;
  avatar?: string;
  savedPost: IPost[];
}
