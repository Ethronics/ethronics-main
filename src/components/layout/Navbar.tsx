import { useState } from "react";
import { ThemeToggle } from "../ui/ThemeToggle";
import { Menu, X } from "lucide-react";

const navItems = [
  { title: "Home", href: "/" },
  { title: "Academics", href: "/academics" },
  { title: "Research & Development", href: "/research" },
  { title: "Manufacturing", href: "/manufacturing" },
];
export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="fixed w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <a
              href="/"
              className="text-2xl font-bold text-purple-700 dark:text-purple-300"
            >
              Ethronics
            </a>
          </div>
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.title}
                href={item.href}
                className="text-gray-700 dark:text-gray-200 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
              >
                {item.title}
              </a>
            ))}
            <ThemeToggle/>
          </div>
          {/* Mobile Menu Button */}

          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 dark:text-gray-200">
                {isOpen ? <X className="w-6 h-6"/> : <Menu className="w-6 h-6"/>}
            </button>
          </div>
          {/* Mobile Menu Button */}
        </div>
      </div>

    {/* Mobile Navigation Menu */}
    {isOpen && (
      <div className="md:hidden">
        <div className="px-2 pt-2 pb-2 space-y-1 dark:text-gray-200 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
          {navItems.map((item) => (
            <a key={item.href} href="{item.href}" className="block px-3 py-2 text-gray-700 dark:text-gray-200 hover:text-purple-600 dark:hover:text-purple-400">
              {item.title}
            </a>
          ))}

        </div>
      </div>
    )}
    {/* Mobile Navigation Menu */}
    </nav>
  );
}
