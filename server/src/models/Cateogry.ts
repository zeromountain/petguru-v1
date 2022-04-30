import { Document, Model, model, Schema } from 'mongoose';
import { IPost } from './Post';

export interface ICategory extends Document {
  categoryName: string;
  posts: [IPost['_id']];
}

const categorySchema = new Schema({
  categoryName: {
    type: String,
    default: '미분류',
  },
  posts: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Post',
    },
  ],
});

const Category: Model<ICategory> = model('Category', categorySchema);
export default Category;
