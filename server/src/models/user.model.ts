import mongoose, { Schema } from 'mongoose';
import { IUser } from '../interfaces/user.interfaces';

const UserSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    nickname: {
      type: String,
      required: true,
      trim: true,
      maxlength: 25,
      unique: true,
    },
    // avatar: {
    //   type: String,
    //   default:
    //     'https://res.cloudinary.com/devatchannel/image/upload/v1602752402/avatar/avatar_cugq40.png',
    // },
  },
  { timestamps: true }
);

export default mongoose.model<IUser>('user', UserSchema);
