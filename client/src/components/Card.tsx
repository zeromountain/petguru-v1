import React from 'react';
import { AiOutlineComment, AiFillHeart } from 'react-icons/ai';
import { GrFormView } from 'react-icons/gr';

interface Props {
  title: string;
  division: string;
  comments: number;
  views: number;
  likes: number;
}

const Card: React.FC<Props> = ({ title, division, comments, views, likes }) => {
  return (
    <li className='w-[100%-1rem] h-[15rem] relative flex flex-col justify-center items-center p-6 m-[10px] bg-white shadow-lg	 rounded-3xl cursor-pointer transition-all transform hover:scale-105 hover:opacity-60'>
      <h4 className='font-semibold text-[1.5rem]'>{title}</h4>
      <span className='text-[2rem]'>🐶</span>
      <p className='italic'>{division}</p>
      <section className='absolute bottom-[0.5rem] right-[1rem] flex text-[0.875rem]'>
        <div className='flex items-center mr-1'>
          {/* 댓글 아이콘 */}
          <AiOutlineComment />
          <p>{comments}</p>
        </div>
        <div className='flex items-center mr-1'>
          {/* 조회수 아이콘 */}
          <GrFormView />
          <p>{views}</p>
        </div>
        <div className='flex items-center'>
          {/* 좋아요 아이콘 */}
          <AiFillHeart className='text-red-500' />
          <p>{likes}</p>
        </div>
      </section>
    </li>
  );
};

export default Card;
