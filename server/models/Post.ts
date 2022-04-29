import { Document, Model, model, Schema } from 'mongoose';
import * as dayjs from 'dayjs';
import { IUser } from './User';
import { ICategory } from './Cateogry';
import { IComment } from './Comments';

export interface IPost extends Document {
  title: string;
  contents: string;
  views: number;
  category: ICategory['_id'];
  comments: [IComment['_id']];
  likes: IUser['_id'];
  author: IUser['_id'];
}

const PostSchema: Schema = new Schema({
  title: {
    type: String,
    required: true,
    index: true,
  },
  contents: {
    tpye: String,
    required: true,
  },
  views: {
    type: Number,
    default: 0,
  },
  date: {
    type: String,
    default: dayjs().format('YYYY-MM-DD hh:mm:ss'),
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: 'Category',
  },
  comments: {
    type: Schema.Types.ObjectId,
    ref: 'Comments',
  },
  likes: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
});

const Post: Model<IPost> = model('Post', PostSchema);

export default Post;
