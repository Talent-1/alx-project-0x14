import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-800 text-white p-4 mt-8">
      <div className="container max-w-6xl mx-auto text-center">
        <p className="text-sm">
          &copy; {currentYear} ALX Movie App. All rights reserved.
        </p>
        <p className="text-xs mt-1">
          Data provided by The MoviesDatabase API.
        </p>
      </div>
    </footer>
  );
};

export default Footer;