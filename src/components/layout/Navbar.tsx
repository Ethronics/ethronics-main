import { useState } from "react";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "../ui/ThemeToggle";
import { NavItem } from "../../types";
import { Link, useLocation } from "react-router-dom";
import Ethronics from "../../assets/ethronics.png";

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
  { title: "Events", href: "#" },
  { title: "Blog", href: "#" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Desktop Layout */}
        <div className="hidden md:flex flex-col py-4 relative">
          {/* Logo Centered Vertically */}
          <div className="absolute left-4 top-1/2 -translate-y-1/2">
            <Link to="/" className="text-2xl font-bold text-gray-900 dark:text-white">
              <div className="flex items-center space-x-1">
                <img src={Ethronics} alt="Ethronics Logo" className="h-10 w-auto" />
                <span>Ethronics</span>
              </div>
            </Link>
          </div>

          {/* Navigation Container (Main + Supplementary) */}
          <div className="ml-48"> {/* Adjust this margin to align with "Home" */}
            {/* Main Navigation Row */}
            <div className="flex justify-end items-center space-x-8 h-10">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`text-base font-medium ${
                    isActive(item.href)
                      ? "text-purple-600 dark:text-purple-400"
                      : "text-gray-700 dark:text-gray-200 hover:text-purple-600 dark:hover:text-purple-400"
                  } transition-colors`}
                >
                  {item.title}
                </Link>
              ))}
              <ThemeToggle />
            </div>

            {/* Supplementary Navigation Row */}
            <div className="flex justify-end space-x-6 h-10 border-t border-gray-200 dark:border-gray-700 pt-2">
              {supplementaryItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`text-sm ${
                    isActive(item.href)
                      ? "text-purple-600 dark:text-purple-400"
                      : "text-gray-500 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400"
                  } transition-colors`}
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden flex justify-between items-center h-16">
          <Link to="/" className="text-2xl font-bold text-gray-900 dark:text-white">
            <div className="flex items-end space-x-1">
              <img src={Ethronics} alt="Ethronics Logo" className="h-10 w-auto" />
              <span>Ethronics</span>
            </div>
          </Link>
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 dark:text-gray-200">
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden bg-white dark:bg-gray-900">
            {/* Main Menu Items */}
            <div className="px-2 pt-2 pb-3 space-y-1 border-b border-gray-200 dark:border-gray-700">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`block px-3 py-2 text-base font-medium ${
                    isActive(item.href)
                      ? "text-purple-600 dark:text-purple-400"
                      : "text-gray-700 dark:text-gray-200 hover:text-purple-600 dark:hover:text-purple-400"
                  }`}
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
                      ? "text-purple-600 dark:text-purple-400"
                      : "text-gray-500 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400"
                  }`}
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
        )}
      </div>
    </nav>
  );
}