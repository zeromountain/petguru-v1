import React from 'react';

const Editor = () => {
  return (
    <div>
      <textarea
        placeholder='내용을 입력해 주세요.'
        className='w-full h-[20rem] p-2 mt-5 placeholder:italic outline-none resize-none'
      />
    </div>
  );
};

export default Editor;
