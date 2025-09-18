import { useState } from 'react';
import LogoImg from '../assets/images/logo.png';
import { AiOutlineMore, AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { links } from '../data/links';
import { Link, useLocation } from 'react-router';
import useUserStore from '../store/userStore';

function Navbar() {
  const { user } = useUserStore();
  const menuLinks = links;
  const loc = useLocation();
  const pathName = loc.pathname.split('/')[1];
  const activePath = pathName;

  // State for mobile menu
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="fixed top-0 left-0 w-full h-16 md:h-[92px] border-b border-gray-100 px-4 md:px-8 py-4 flex items-center justify-between bg-white z-50">
      {/* Logo */}
      <Link to="/" className="flex items-end gap-3 z-50">
        <img alt="Logo Img" src={LogoImg} className="w-20 md:w-[102px]" />
        <AiOutlineMore className="text-xl hidden md:block" />
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-8">
        {menuLinks.map((i, idx) => (
          <Link
            key={idx}
            to={`/${i.link}`}
            className={`font-semibold border-b-2 border-transparent hover:text-primary hover:border-b-primary transition-colors duration-300 ${
              activePath === i.link
                ? 'text-primary border-b-primary'
                : 'text-gray-600'
            }`}
          >
            {i.name}
          </Link>
        ))}
      </div>

      {/* User/Auth Section - Desktop */}
      {user ? (
        <div className="hidden md:block">
          Hello, {user?.displayName || user?.name}
        </div>
      ) : (
        <div className="hidden md:flex items-center gap-5">
          <Link
            to="/student"
            className="px-4 py-2 border border-primary text-primary rounded-md hover:bg-primary hover:text-white transition-colors"
          >
            Sign up
          </Link>
          <Link
            to="/student/login"
            className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-dark transition-colors"
          >
            Log in
          </Link>
        </div>
      )}

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-gray-600 focus:outline-none z-50"
        onClick={toggleMobileMenu}
        aria-label="Toggle menu"
      >
        {isMobileMenuOpen ? (
          <AiOutlineClose size={24} />
        ) : (
          <AiOutlineMenu size={24} />
        )}
      </button>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={toggleMobileMenu}
        ></div>
      )}

      {/* Mobile Menu Content */}
      <div
        className={`fixed top-16 right-0 w-64 h-screen bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-40 md:hidden
        ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex flex-col p-6 space-y-6">
          {/* Mobile Navigation Links */}
          {menuLinks.map((i, idx) => (
            <Link
              key={idx}
              to={`/${i.link}`}
              className={`font-semibold border-b-2 border-transparent py-2 ${
                activePath === i.link
                  ? 'text-primary border-b-primary'
                  : 'text-gray-600'
              }`}
              onClick={toggleMobileMenu}
            >
              {i.name}
            </Link>
          ))}

          {/* Mobile User/Auth Section */}
          <div className="pt-4 border-t border-gray-200">
            {user ? (
              <div className="py-2">
                Hello, {user?.displayName || user?.name}
              </div>
            ) : (
              <div className="flex flex-col space-y-4">
                <Link
                  to="/student"
                  className="px-4 py-2 border border-primary text-primary rounded-md text-center hover:bg-primary hover:text-white transition-colors"
                  onClick={toggleMobileMenu}
                >
                  Sign up
                </Link>
                <Link
                  to="/student/login"
                  className="px-4 py-2 bg-primary text-white rounded-md text-center hover:bg-primary-dark transition-colors"
                  onClick={toggleMobileMenu}
                >
                  Log in
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
