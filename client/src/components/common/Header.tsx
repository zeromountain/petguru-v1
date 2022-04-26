import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../assets/logo.png';

interface Props {
  onOpen: () => void;
}

const Header: React.FC<Props> = ({ onOpen }) => {
  return (
    <header className='flex justify-between items-center border-b border-neutral-400 p-5'>
      <Link to='/'>
        <img src={Logo} alt='logo' className='w-16 cursor-pointer' />
      </Link>
      {/* TODO: 로그인한 경우 옵션 버튼 (글쓰기, 마이페이지, 로그아웃) 렌더링 */}
      <div>
        <span className='mr-4 cursor-pointer hover:text-black' onClick={onOpen}>
          로그인
        </span>
      </div>
    </header>
  );
};

export default Header;
