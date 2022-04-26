import React from 'react';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';

import AuthModalContainer from '../modal/AuthModalContainer';
import Header from './Header';

const Layout = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleOpen = () => setIsOpen(true);

  const handleClose = () => setIsOpen(false);

  const handleSubmit = (e: React.SyntheticEvent): void => {
    e.preventDefault();
    console.log('login');
  };
  return (
    <div className='max-w-7xl h-screen mx-auto bg-neutral-200	'>
      <Header onOpen={handleOpen} />
      <Outlet />
      <AuthModalContainer
        isOpen={isOpen}
        onClose={handleClose}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default Layout;
