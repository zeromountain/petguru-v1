import React from 'react';

interface Props {
  setType: () => void;
}

const JoinModal: React.FC<Props> = ({ setType }) => {
  return (
    <>
      <h2 className=' text-[2rem] font-bold'>회원가입</h2>
      <span className='mb-1'>
        펫그루를 이용하시려면 회원가입을 해주세요 :){' '}
      </span>
      <form className=' w-full min-h-[200px] flex flex-col justify-center'>
        <input
          type='text'
          className='min-h-[40px] border border-black mb-5 p-2 outline-0 rounded-lg'
          placeholder='계정을 입력해주세요.'
          autoFocus
        />
        <input
          type='text'
          className='min-h-[40px] border border-black mb-5 p-2 outline-0 rounded-lg'
          placeholder='닉네임을 입력해주세요.'
        />
        <input
          type='text'
          className='min-h-[40px] border border-black mb-5 p-2 outline-0 rounded-lg'
          placeholder='비밀번호를 입력해주세요.'
        />
        <input
          type='text'
          className='min-h-[40px] border border-black mb-10 p-2 outline-0 rounded-lg'
          placeholder='비밀번호를 확인해주세요.'
        />
        <button
          type='submit'
          className=' min-h-[40px] border border-black rounded-lg'>
          회원가입하기
        </button>
      </form>
      {/* TODO: 클릭하면 회원가입 모달로 변경 */}
      <span
        onClick={setType}
        className='underline decoration-solid cursor-pointer mt-2'>
        계정이 있으신가요?
      </span>
    </>
  );
};

export default JoinModal;
