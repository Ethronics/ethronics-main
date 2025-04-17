import { useState } from "react";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "../ui/ThemeToggle";
import { Link, useLocation } from "react-router-dom";
import Ethronics from "../../assets/ethronics.png";

interface NavItem {
  title: string;
  href: string;
}

// Main navigation items
const navItems: NavItem[] = [
  { title: "Home", href: "/" },
  { title: "Academics", href: "/academics" },
  { title: "Research & Development", href: "/research-development" },
  { title: "Manufacturing", href: "/manufacturing" },
];

// Supplementary navigation items
const supplementaryItems: NavItem[] = [
  { title: "Contact", href: "/contact" },
  { title: "Library", href: "#" },
  { title: "News & Events", href: "#" },
  { title: "Blog", href: "#" },
  { title: "About Us", href: "/about" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const location = useLocation();

  const isActive = (path: string): boolean => location.pathname === path;

  return (
    <nav className="fixed w-full bg-gray-900/80 backdrop-blur-md z-50">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:max-w-[1800px] 2xl:mx-auto">
        {/* Desktop Layout */}
        <div className="hidden md:flex flex-col py-4 relative">
          {/* Logo Centered Vertically */}
          <div className="absolute left-4 top-1/2 -translate-y-1/2">
            <Link to="/" className="text-xl lg:text-2xl font-bold text-white">
              <div className="flex items-center space-x-2">
                <img
                  src={Ethronics}
                  alt="Ethronics Logo"
                  className="h-8 w-auto lg:h-10 xl:h-12"
                />
                <span className="hidden sm:inline">Ethronics</span>
              </div>
            </Link>
          </div>

          <div className="ml-32 lg:ml-40 xl:ml-48">
            {/* Main Navigation Row */}
            <div className="flex justify-end items-center space-x-6 lg:space-x-8 xl:space-x-10 h-10">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`text-sm lg:text-base font-medium ${
                    isActive(item.href)
                      ? "text-purple-400"
                      : "text-gray-200 hover:text-purple-400"
                  } transition-colors duration-200`}
                >
                  {item.title}
                </Link>
              ))}
              {/* <ThemeToggle /> */}
            </div>

            {/* Supplementary Navigation Row */}
            <div className="flex justify-end space-x-4 lg:space-x-6 xl:space-x-8 h-10 border-t border-gray-700 pt-2">
              {supplementaryItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`text-xs lg:text-sm ${
                    isActive(item.href)
                      ? "text-purple-400"
                      : "text-gray-400 hover:text-purple-400"
                  } transition-colors duration-200`}
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden flex justify-between items-center h-16">
          <Link to="/" className="text-xl font-bold text-white">
            <div className="flex items-end space-x-2">
              <img src={Ethronics} alt="Ethronics Logo" className="h-8 w-auto" />
              <span>Ethronics</span>
            </div>
          </Link>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-200 p-2"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`md:hidden bg-gray-900 transition-all duration-300 ease-in-out ${
            isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          {/* Main Menu Items */}
          <div className="px-2 pt-2 pb-3 space-y-1 border-b border-gray-700">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`block px-3 py-2 text-base font-medium ${
                  isActive(item.href)
                    ? "text-purple-400"
                    : "text-gray-200 hover:text-purple-400"
                } transition-colors duration-200`}
                onClick={() => setIsOpen(false)}
              >
                {item.title}
              </Link>
            ))}
          </div>
          {/* Supplementary Menu Items */}
          <div className="px-2 pt-3 pb-4 space-y-1">
            {supplementaryItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`block px-3 py-2 text-sm ${
                  isActive(item.href)
                    ? "text-purple-400"
                    : "text-gray-400 hover:text-purple-400"
                } transition-colors duration-200`}
                onClick={() => setIsOpen(false)}
              >
                {item.title}
              </Link>
            ))}
            <div className="px-3 py-2">
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}