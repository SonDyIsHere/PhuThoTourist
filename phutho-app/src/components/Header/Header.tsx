import React, { useState } from "react";
import icon from '../../assets/icon';

const Header: React.FC = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const toggleMenu = () => {
    setMenuIsOpen((prev) => !prev);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-white bg-blue-900 bg-opacity-80 backdrop-blur-lg font-philosopher">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Navbar */}
        <nav className="hidden lg:flex w-full justify-center items-center">

          <div className="flex space-x-8">
            <a href="/" className="text-white text-xl font-bold uppercase hover:border-b border-white">
              TRANG CHỦ
            </a>
            <a href="/blogs" className="text-white text-xl font-bold uppercase hover:border-b border-white">
              BÀI VIẾT
            </a>
          </div>

          <div className="mx-8">
            <img
              src={icon.logo}
              alt="PhuThoTourist Logo"
              className="h-18 md:h-12" // Adjusted for mobile and larger screens
            />
          </div>

          <div className="flex space-x-8">
            <a href="#" className="text-white text-xl font-bold uppercase hover:border-b border-white">
              TÀI LIỆU
            </a>
            <a href="/careers" className="text-white text-xl font-bold uppercase hover:border-b border-white">
              TUYỂN DỤNG
            </a>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-white">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuIsOpen && (
        <div className="lg:hidden bg-blue-800 p-4 space-y-4">
          <a href="#" className="block text-white hover:text-gray-300">
            TRANG CHỦ
          </a>
          <a href="#" className="block text-white hover:text-gray-300">
            BÀI VIẾT
          </a>
          <a href="#" className="block text-white hover:text-gray-300">
            TÀI LIỆU
          </a>
          <a href="#" className="block text-white hover:text-gray-300">
            TUYỂN DỤNG
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
