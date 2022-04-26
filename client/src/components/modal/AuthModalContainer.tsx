import React, { useState } from 'react';
import JoinModal from './JoinModal';
import LoginModal from './LoginModal';

import Modal from './Modal';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  handleSubmit: (e: React.SyntheticEvent) => void;
}

const AuthModalContainer: React.FC<Props> = ({
  isOpen,
  onClose,
  handleSubmit,
}) => {
  const [type, setType] = useState<string>('login');

  const modalClose = () => {
    onClose();
    setType('login');
  };
  const setLoginType = () => setType('login');
  const setJoinType = () => setType('join');

  return (
    <>
      {/* Container */}
      <div className='flex justify-center items-center w-full'>
        <Modal isOpen={isOpen} onClose={modalClose} selector='modal-root'>
          {/* Body */}
          <div className='w-[350px] min-h-[350px] flex flex-col items-center justify-between relative rounded-lg p-5 overflow-x-hidden overflow-y-auto shadow-[0 1px 3px 0 rgba(0, 0, 0, 0.1)] bg-white'>
            {type === 'login' ? (
              <LoginModal handleSubmit={handleSubmit} setType={setJoinType} />
            ) : (
              <JoinModal setType={setLoginType} />
            )}
          </div>
        </Modal>
      </div>
    </>
  );
};

export default AuthModalContainer;
