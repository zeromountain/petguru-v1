import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';

const Layout = () => {
  return (
    <div className='max-w-7xl h-screen mx-auto bg-neutral-200	'>
      <Header />
      <Outlet />
    </div>
  );
};

export default Layout;
