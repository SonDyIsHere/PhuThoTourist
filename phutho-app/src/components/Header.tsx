import React, { useState } from "react";
import icon from '../assets/icon';
const Header: React.FC = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const toggleMenu = () => {
    setMenuIsOpen((prev) => !prev);
  };

  return (
    <header className="bg-blue-900 text-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          {/* Logo */}
          <img
            src={icon.logo} // Thay thế bằng đường dẫn logo của bạn
            alt="PhuThoTourist Logo"
            className="h-12 mr-4"
          />
          {/* Navigation */}
          <nav className="hidden lg:flex space-x-6">
            <a href="#" className="hover:text-gray-300">
              TRANG CHỦ
            </a>
            <a href="#" className="hover:text-gray-300">
              BÀI VIẾT
            </a>
            <a href="#" className="hover:text-gray-300">
              TÀI LIỆU
            </a>
            <a href="#" className="hover:text-gray-300">
              TUYỂN DỤNG
            </a>
          </nav>
        </div>

        {/* Menu Button for Mobile */}
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

      {/* Mobile Menu (hidden by default, show on mobile) */}
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
