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
      className="px-10 py-20 text-2xl cursor-pointer bg-gray-800 text-slate-50 rounded-md"
    >
      {label}
    </button>
  );
};

export default Button;
