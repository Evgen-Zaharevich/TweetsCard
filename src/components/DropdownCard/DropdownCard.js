import { useState } from 'react';
import { DropDown } from './DropdownCard.styled';

export const DropdownCard = ({ getValueDropDown }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const data = [
    {
      value: 1,
      label: 'showAll',
    },
    {
      value: 2,
      label: 'follow',
    },
    {
      value: 3,
      label: 'followings',
    },
  ];

  const handleChange = e => {
    setSelectedOption(e);
    getValueDropDown(e.label);
  };

  return (
    <div>
      <DropDown
        placeholder="Select Option"
        value={selectedOption}
        options={data}
        onChange={handleChange}
      />
    </div>
  );
};
