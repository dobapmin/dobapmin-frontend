import React from 'react';

function Button({ children, onClick, disabled, className }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`w-full py-6 rounded-full ${disabled ? 'bg-gray-300' : 'bg-blue-500 text-white'} ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;
