// src/components/Button.tsx
import React from 'react';

interface ButtonProps {
  onClick: () => void;  // Type for the onClick function
  label: string;        // Type for the label
}

const Button: React.FC<ButtonProps> = ({ onClick, label }) => {
  return (
    <button
      onClick={onClick}
      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
    >
      {label}
    </button>
  );
};

export default Button;
