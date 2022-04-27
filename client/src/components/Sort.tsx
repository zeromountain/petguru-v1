import React from 'react';
import { GiNewBorn } from 'react-icons/gi';
import { AiFillLike } from 'react-icons/ai';

const Sort = () => {
  return (
    <div className='flex justify-between items-center mx-[1rem] mb-[2rem]'>
      {/* 최신순 인기순 */}
      <section className='flex text-[1.5rem]'>
        <GiNewBorn />
        <div className='flex items-center font-bold mr-[1rem] cursor-pointer'>
          <span>최신</span>
        </div>
        <div className='flex items-center font-bold cursor-pointer'>
          <AiFillLike />
          <span>인기</span>
        </div>
      </section>
      {/* 모집중인 글만보기 */}
      <div className=''>
        <input
          type='checkbox'
          readOnly
          name='closedPost'
          value='마감 글 보기'
          className='absolute w-[1px] h-[1px] p-0 m-[-1px] overflow-hidden'
        />
        <label
          htmlFor='closedPost'
          className='relative inline-block pl-[40px] cursor-pointer text-[1.5rem] before:content-[""] before:text-[1.5rem] before:absolute before:left-0 before:w-[2rem] before:h-[2rem] before:text-center before:bg-white before:border before:border-[#ccc] before:rounded-md'>
          <span>마감 글 보지 않기</span>
        </label>
      </div>
    </div>
  );
};

export default Sort;
