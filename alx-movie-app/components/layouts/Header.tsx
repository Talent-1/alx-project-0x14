import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-10 bg-gray-900 shadow-md">
      <div className="container flex items-center justify-between h-16 max-w-6xl px-4 mx-auto">
        <Link href="/" className="text-2xl font-bold text-blue-400 hover:text-blue-300">
          ALX Movie App
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="/popular" className="text-white hover:text-blue-400">
                Popular
              </Link>
            </li>
            <li>
              <Link href="/top-rated" className="text-white hover:text-blue-400">
                Top Rated
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;