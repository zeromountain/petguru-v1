import React from 'react';
import { CSSTransition } from 'react-transition-group';

import Portal from './Portal';

import './Modal.css';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  selector?: string;
}

const Modal: React.FC<Props> = ({ children, isOpen, onClose, selector }) => {
  return (
    <CSSTransition in={isOpen} timeout={10} className='modal' unmountOnExit>
      <Portal selector={selector}>
        {/* Overlay */}
        <div className=' fixed z-10 top-0 left-0 right-0 bottom-0 overflow-hidden flex justify-center items-center'>
          {/* Dim */}
          <div
            onClick={onClose}
            className='absolute top-0 right-0 left-0 bottom-0 bg-[rgba(0,0,0,0.5)]'
          />
          {/* Container */}
          <div className='max-w-md'>{children}</div>
        </div>
      </Portal>
    </CSSTransition>
  );
};

export default Modal;
