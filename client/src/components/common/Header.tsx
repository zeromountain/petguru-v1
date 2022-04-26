import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../assets/logo.png';

const Header = () => {
  return (
    <header className='flex justify-between items-center border-b border-neutral-400 p-5'>
      <Link to='/home'>
        <img src={Logo} alt='logo' className='w-20 cursor-pointer' />
      </Link>
      {/* TODO: 로그인한 경우 옵션 버튼 (글쓰기, 마이페이지, 로그아웃) 렌더링 */}
      <div>
        <Link to='/login'>
          <span className='mr-4 cursor-pointer hover:text-black'>로그인</span>
        </Link>
        <Link to='/join'>
          <span className='cursor-pointer hover:text-black'>회원가입</span>
        </Link>
      </div>
    </header>
  );
};

export default Header;
