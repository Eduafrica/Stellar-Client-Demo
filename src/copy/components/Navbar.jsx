import { useState } from 'react';
// import Logo from './Logo';
import Logo from '../assets/logo.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: 1, name: 'Home' },
    { id: 2, name: 'About Us' },
    { id: 3, name: 'Courses' },
    { id: 4, name: 'Our Team' },
    { id: 5, name: 'Contact Us' },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <img src={Logo} alt="" width={60} height={100} />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.id}
                href="#"
                className="text-gray-600 hover:text-[#00BF63] px-3 py-2 text-sm font-medium transition duration-300"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="border border-green-600 text-[#00BF63] hover:text-[#00BF63] hover:bg-white px-4 py-2 rounded-lg font-medium transition duration-300">
              Sign Up
            </button>
            <button className="bg-[#00BF63] hover:bg-green-600 text-white px-4 py-2 rounded-lg font-medium transition duration-300">
              Login
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-[#00BF63] focus:outline-none focus:ring-2 focus:ring-green-500 p-2"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <a
                key={item.id}
                href="#"
                className="text-gray-600 hover:text-[#00BF63] block px-3 py-2 rounded-md text-base font-medium"
              >
                {item.name}
              </a>
            ))}
            <div className="pt-4 pb-3 border-t border-gray-200 flex flex-col space-y-3">
              <button className="w-full border border-[#00BF63] text-[#00BF63] hover:text-white hover:bg-green-50 px-4 py-2 rounded-lg font-medium transition duration-300">
                Sign Up
              </button>
              <button className="w-full bg-[#00BF63] hover:bg-green-600 text-white px-4 py-2 rounded-lg font-medium transition duration-300">
                Login
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
