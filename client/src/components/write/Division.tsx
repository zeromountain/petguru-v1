import React, { useState } from 'react';
import Select from 'react-select';

interface Option {
  value: string;
  label: string;
}

const options: Option[] = [
  { value: '산책벙개', label: '산책벙개' },
  { value: '훈련벙개', label: '훈련벙개' },
  { value: '고민상담', label: '고민상담' },
  { value: '실종신고', label: '실종신고' },
];

interface ArrayObjectSelectState {
  selectedOption: Option | null;
}

const Division = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <div className='flex justify-start items-center'>
      <h3 className='w-[10%] text-[1.3rem] font-bold'>분류 :</h3>
      <Select
        defaultValue={selectedOption}
        onChange={setSelectedOption}
        options={options}
        placeholder='분류를 선택해 주세요.'
        className='w-[90%] text-[1.3rem] font-bold ml-auto'
      />
    </div>
  );
};

export default Division;
