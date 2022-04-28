import React from 'react';

import Division from './Division';
import Editor from './Editor';
import Title from './Title';
import WriteButtons from './WriteButtons';

const Write = () => {
  return (
    <>
      <section>
        <Title />
        <Division />
        <Editor />
      </section>
      <section className='flex justify-end'>
        <WriteButtons />
      </section>
    </>
  );
};

export default Write;
