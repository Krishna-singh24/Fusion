import React from 'react';

interface AlertProps {
  type?: 'info' | 'error' | 'success' | 'warning' | 'dark';
} // Interface for optional type prop

const Alerts: React.FC<AlertProps> = ({ type = 'info' }) => {
  const alertColors = {
    info: 'blue-50 text-blue-800',
    error: 'red-50 text-red-800',
    success: 'green-50 text-green-800',
    warning: 'yellow-50 text-yellow-800',
    dark: 'gray-50 text-gray-800',
  };

  const alertText = {
    info: 'Info alert!',
    error: 'Danger alert!',
    success: 'Success alert!',
    warning: 'Warning alert!',
    dark: 'Dark alert!',
  };

  return (
    <div>
      <div
        className={`flex items-center p-4 mb-4 text-sm rounded-lg bg-${
          alertColors[type]
        } dark:bg-gray-800 dark:text-${alertColors[type].split(' ')[1]}`}
        role="alert"
      >
        <svg className="flex-shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
        </svg>
        <span className="sr-only">Info</span>
        <div>
          <span className="font-medium">{alertText[type]}</span> Change a few things up and try submitting again.
        </div>
      </div>
      {/* ... other alerts omitted for brevity */}
    </div>
  );
};

export default Alerts;
