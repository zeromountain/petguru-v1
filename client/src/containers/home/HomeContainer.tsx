import React from 'react';
import Filter from '../../components/Filter';

import Landing from '../../components/Landing';
import List from '../../components/List';
import Sort from '../../components/Sort';

const HomeContainer = () => {
  return (
    <div className='h-screen'>
      <Landing />
      <Filter />
      <Sort />
      <List />
    </div>
  );
};

export default HomeContainer;
