import React from 'react';

interface InputProps {
  // Optional props for customization can be added here
  //  - label: string (for labeling the input)
} // Empty interface for now

const Input: React.FC<InputProps> = ({ label = '' }) => {
  return (
    <div>
      <input
        type="text"
        id="disabled-input"
        aria-label="disabled input"
        className="mb-6 bg-white-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
        value="Disabled input"
        disabled
      />
      <input
        type="text"
        id="disabled-input-2"
        aria-label="disabled input 2"
        className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
        value="Disabled readonly input"
        disabled
        readOnly
      />
    </div>
  );
};

export default Input;
