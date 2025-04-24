import React, { useState } from 'react';
import { Search, ShoppingCart, User, Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-[#232F3E] text-white">
      {/* Top navigation bar */}
      <div className="container mx-auto px-4 py-2 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <button 
            className="md:hidden mr-2"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          <a href="/" className="text-2xl font-bold text-white">
            amazon
          </a>
        </div>

        {/* Search bar */}
        <div className="hidden md:flex flex-1 mx-4 relative">
          <input
            type="text"
            placeholder="Search Amazon"
            className="w-full py-2 px-4 rounded-l text-black"
          />
          <button className="bg-[#FF9900] p-2 rounded-r">
            <Search size={24} className="text-[#232F3E]" />
          </button>
        </div>

        {/* Right navigation */}
        <div className="flex items-center space-x-4">
          <a href="/account" className="hidden md:flex items-center hover:text-[#FF9900] transition-colors">
            <User size={20} className="mr-1" />
            <div className="flex flex-col text-xs">
              <span>Hello, Sign in</span>
              <span className="font-bold">Account & Lists</span>
            </div>
          </a>
          <a href="/orders" className="hidden md:flex flex-col text-xs hover:text-[#FF9900] transition-colors">
            <span>Returns</span>
            <span className="font-bold">& Orders</span>
          </a>
          <a href="/cart" className="flex items-center hover:text-[#FF9900] transition-colors">
            <div className="relative">
              <ShoppingCart size={24} />
              <span className="absolute -top-2 -right-2 bg-[#FF9900] text-[#232F3E] rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
                0
              </span>
            </div>
            <span className="hidden md:inline-block ml-1 font-bold">Cart</span>
          </a>
        </div>
      </div>

      {/* Mobile search bar */}
      <div className="md:hidden px-4 pb-2">
        <div className="relative flex">
          <input
            type="text"
            placeholder="Search Amazon"
            className="w-full py-2 px-4 rounded-l text-black"
          />
          <button className="bg-[#FF9900] p-2 rounded-r">
            <Search size={20} className="text-[#232F3E]" />
          </button>
        </div>
      </div>

      {/* Secondary nav for departments */}
      <div className="bg-[#37475A] px-4 py-2 text-sm hidden md:block">
        <div className="container mx-auto flex items-center space-x-4">
          <a href="#" className="hover:text-[#FF9900] transition-colors">Today's Deals</a>
          <a href="#" className="hover:text-[#FF9900] transition-colors">Customer Service</a>
          <a href="#" className="hover:text-[#FF9900] transition-colors">Registry</a>
          <a href="#" className="hover:text-[#FF9900] transition-colors">Gift Cards</a>
          <a href="#" className="hover:text-[#FF9900] transition-colors">Sell</a>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-0 left-0 w-64 h-screen bg-[#232F3E] z-50 shadow-lg transform transition-transform duration-300 ease-in-out">
          <div className="p-4 border-b border-gray-700">
            <div className="flex justify-between items-center">
              <a href="/account" className="flex items-center">
                <User size={24} className="mr-2" />
                <span className="font-bold text-lg">Hello, Sign in</span>
              </a>
              <button 
                onClick={toggleMenu}
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
            </div>
          </div>
          <div className="p-4">
            <h2 className="font-bold text-lg mb-2">Shop By Department</h2>
            <ul className="space-y-2">
              <li><a href="#" className="block py-2">Electronics</a></li>
              <li><a href="#" className="block py-2">Computers</a></li>
              <li><a href="#" className="block py-2">Smart Home</a></li>
              <li><a href="#" className="block py-2">Arts & Crafts</a></li>
              <li><a href="#" className="block py-2">Books</a></li>
            </ul>
            <div className="border-t border-gray-700 mt-4 pt-4">
              <h2 className="font-bold text-lg mb-2">Help & Settings</h2>
              <ul className="space-y-2">
                <li><a href="#" className="block py-2">Your Account</a></li>
                <li><a href="#" className="block py-2">Customer Service</a></li>
                <li><a href="#" className="block py-2">Sign Out</a></li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;