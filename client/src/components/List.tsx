import React from 'react';

import data from '../data';
import Card from './Card';

const List = () => {
  return (
    <ul className='grid mobile:flex-1 tablet:grid-cols-2 desktop:grid-cols-4 items-center'>
      {data.map((item) => (
        <Card
          key={item.id}
          title={item.title}
          division={item.division}
          comments={item.comments}
          views={item.views}
          likes={item.likes}
        />
      ))}
    </ul>
  );
};

export default List;
