import React from 'react';

import Division from './Division';
import Editor from './Editor';
import Title from './Title';

const Write = () => {
  return (
    <>
      <section>
        <Title />
        <Division />
        <Editor />
      </section>
      <section>{/* 취소 글등록 버튼 */}</section>
    </>
  );
};

export default Write;
