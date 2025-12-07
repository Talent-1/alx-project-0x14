import React from 'react';

const Loading: React.FC = () => {
  return (
    <div className="flex items-center justify-center p-8">
      <div 
        className="w-8 h-8 border-4 border-t-4 border-gray-200 border-t-blue-500 rounded-full animate-spin"
        role="status"
      >
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};

export default Loading;