import React from 'react';
import { ComponentProps } from "@/interfaces";
import Header from "./Header";
import Footer from "./Footer";

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Header />
      <main className="grow container max-w-6xl mx-auto p-4">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;