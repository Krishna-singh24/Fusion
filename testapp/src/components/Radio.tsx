import React from 'react';

interface Option {
  label: string;
  value: string;
}

interface RadioProps {
  name: string;
  label: string;
}

const Radio: React.FC<RadioProps> = ({ name, label }) => {
  return (
    <>

      <label className="flex items-center space-x-2">
        <input
          type="radio"
          name={name}
          className="form-radio text-indigo-600 h-4 w-4"
        />
        <span className="text-gray-700">{label}</span>
      </label>
    </>
  );
};

export default Radio;