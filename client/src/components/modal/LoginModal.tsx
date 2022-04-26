import React from 'react';

interface Props {
  handleSubmit: (e: React.SyntheticEvent) => void;
  setType: () => void;
}

const LoginModal: React.FC<Props> = ({ handleSubmit, setType }) => {
  return (
    <>
      <h2 className=' text-[2rem] font-bold'>로그인</h2>
      <span>펫그루를 이용하시려면 로그인 해주세요 :) </span>
      <form
        onSubmit={handleSubmit}
        className=' w-full min-h-[200px] flex flex-col justify-center'>
        <input
          type='text'
          className='min-h-[40px] border border-black mb-5 p-2 outline-0 rounded-lg'
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
      <span
        onClick={setType}
        className='underline decoration-solid cursor-pointer'>
        계정이 없으신가요?
      </span>
    </>
  );
};

export default LoginModal;
