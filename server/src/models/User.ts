import { Document, Model, model, Schema } from 'mongoose';
import dayjs from 'dayjs';

/**
 * Interface to model the User Schema for TypeScript.
 * @param email:string
 * @param password:string
 * @param avatar:string
 */
export interface IUser extends Document {
  email: string;
  password: string;
  nickname: string;
  avatar?: string;
}

const userSchema: Schema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  nickname: {
    type: String,
    required: true,
    unique: true,
  },
  date: {
    type: Date,
    default: dayjs().format('YYYY-MM-DD'),
  },
});

const User: Model<IUser> = model('User', userSchema);

export default User;
