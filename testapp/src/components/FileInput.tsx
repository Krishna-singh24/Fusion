import React, { ChangeEvent } from 'react';


interface FileInputProps {
  label?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  contraints?: string;
  single?: boolean;
  style?: React.CSSProperties;
}


const FileInput: React.FC<FileInputProps> = ({ label, onChange, contraints, style, single = true }) => {
  return (
    <div className='block px-5 py-10 border-2 border-gray-200 text-2xl text-slate-500 text-center' style={style}>
      {/* centered upload icon */}

      <label htmlFor="file-upload" className="">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12 mx-auto"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
          />
        </svg>
        {label || 'Upload File'}
      </label>
      <input
        hidden
        id="file-upload"
        type="file"
        accept={contraints || '*'}
        onChange={onChange}
      />
    </div>
  )
}

export default FileInput;
