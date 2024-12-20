import Navbar from '@/components/home/Navbar';
import Repositories from '@/components/home/Repositoires';
import Sidebar from '@/components/home/Sidebar';
import React from 'react';

const Home = () => {
  return (
    <div className="flex md:flex-row flex-col w-full h-screen">
      {/* Sidebar: Hidden on smaller screens */}
      <div className="hidden md:flex w-0 md:w-[30%] lg:w-[25%] h-full">
        <Sidebar />
      </div>

      {/* Navbar: Visible only on smaller screens */}
      <div className="flex md:hidden w-full">
        <Navbar />
      </div>

      {/* Repositories: Full width for small screens, adjusted for larger screens */}
      <div className="w-full h-full p-0 md:p-5 md:w-[70%] lg:w-[75%]">
        <Repositories />
      </div>
    </div>
  );
};

export default Home;
