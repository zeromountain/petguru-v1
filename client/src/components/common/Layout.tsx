import React from 'react';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Modal from '../modal/Modal';
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
      {/* Container */}
      <div className='flex justify-center items-center w-full'>
        <Modal isOpen={isOpen} onClose={handleClose}>
          {/* Body */}
          <div className='w-[350px] min-h-[350px] flex flex-col items-center relative rounded-lg p-5 overflow-x-hidden overflow-y-auto shadow-[0 1px 3px 0 rgba(0, 0, 0, 0.1)] bg-white'>
            <h2 className=' text-[2rem] font-bold'>로그인</h2>
            <span>펫그루를 이용하시려면 로그인 해주세요 :) </span>
            <form
              onSubmit={handleSubmit}
              className=' w-full min-h-[200px] flex flex-col justify-center'>
              <input
                type='text'
                className='min-h-[40px] border border-black mb-4 p-2 outline-0 rounded-lg'
                placeholder='계정을 입력해주세요.'
                autoFocus
              />
              <input
                type='text'
                className='min-h-[40px] border border-black mb-10 p-2 outline-0 rounded-lg'
                placeholder='비밀번호를 입력해주세요.'
              />
              <button
                type='submit'
                className=' min-h-[40px] border border-black rounded-lg'>
                로그인하기
              </button>
            </form>
            <button className='w-full min-h-[40px] border border-black rounded-lg mb-2'>
              카카오로 로그인하기
            </button>
            {/* TODO: 클릭하면 회원가입 모달로 변경 */}
            <span className='underline decoration-solid cursor-pointer'>
              계정이 없으신가요?
            </span>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default Layout;
