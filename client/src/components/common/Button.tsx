import React from 'react';

interface Props {
  children: React.ReactNode;
  background: string;
}

const Button: React.FC<Props> = ({ children, background }) => {
  return (
    <button
      className={`w-[4rem] text-[1.1rem] font-semibold text-white ${background} rounded-xl p-1 mr-1 hover:opacity-70`}>
      {children}
    </button>
  );
};

export default Button;
