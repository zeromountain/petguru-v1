import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../assets/logo.png';

const Layout = () => {
  return (
    <div className='h-screen bg-bg-image bg-no-repeat bg-cover opacity-50'>
      <header className='max-w-7xl flex justify-between items-center mx-auto text-white p-5'>
        <img src={Logo} alt='logo' className='w-20 cursor-pointer' />
        <div>
          <span className='mr-4 cursor-pointer hover:text-black'>로그인</span>
          <span className='cursor-pointer hover:text-black'>회원가입</span>
        </div>
      </header>
    </div>
  );
};

export default Layout;
