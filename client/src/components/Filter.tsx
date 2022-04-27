import React from 'react';

const Filter = () => {
  return (
    <div className='max-w-xs mx-auto my-10 flex justify-between'>
      <span className='text-[1.2rem] font-semibold cursor-pointer'>
        산책벙개
      </span>
      <span className='text-[1.2rem] font-semibold cursor-pointer'>
        훈련벙개
      </span>
      <span className='text-[1.2rem] font-semibold cursor-pointer'>
        고민상담
      </span>
      <span className='text-[1.2rem] font-semibold cursor-pointer'>
        실종신고
      </span>
    </div>
  );
};

export default Filter;
