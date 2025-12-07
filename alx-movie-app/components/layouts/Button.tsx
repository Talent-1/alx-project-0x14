import React from 'react';

// Define the component's props interface for better type safety
interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  // Add other common button props like 'type', 'className', etc. as needed
}

const Button: React.FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <button 
      onClick={onClick}
      className="px-4 py-2 font-semibold text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75"
    >
      {children}
    </button>
  );
};

export default Button;