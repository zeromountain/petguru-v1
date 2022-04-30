import { Document, Model, model, Schema } from 'mongoose';
import dayjs from 'dayjs';
import { IPost } from './Post';
import { IUser } from './User';

export interface IComment extends Document {
  contents: string;
  post: IPost['_id'];
  author: IUser['_id'];
}

const CommentSchema: Schema = new Schema({
  contents: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    default: dayjs().format('YYYY-MM-DD hh:mm:ss'),
  },
  post: {
    type: Schema.Types.ObjectId,
    ref: 'Post',
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
});

const Comment: Model<IComment> = model('Comment', CommentSchema);

export default Comment;
