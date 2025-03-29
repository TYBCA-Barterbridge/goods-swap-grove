
import { Link } from "react-router-dom";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="border-b bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between py-4 px-4 md:px-6">
        <Link to="/" className="flex items-center space-x-2">
          <div className="h-10 w-10 rounded-full bg-gradient-to-r from-barter-teal to-barter-purple flex items-center justify-center">
            <span className="text-white font-bold text-lg">BB</span>
          </div>
          <span className="font-bold text-xl hidden md:block">BarterBridge</span>
        </Link>

        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/items" className="text-foreground hover:text-barter-teal transition-colors font-medium">
            Items
          </Link>
          <Link to="/skills" className="text-foreground hover:text-barter-teal transition-colors font-medium">
            Skills
          </Link>
          <Link to="/workshops" className="text-foreground hover:text-barter-teal transition-colors font-medium">
            Workshops
          </Link>
          <div className="relative group">
            <button className="flex items-center text-foreground hover:text-barter-teal transition-colors font-medium">
              Community <ChevronDown className="ml-1 h-4 w-4" />
            </button>
            <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 hidden group-hover:block">
              <div className="py-1">
                <Link to="/community/forum" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Forum</Link>
                <Link to="/community/events" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Events</Link>
                <Link to="/community/resources" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Resources</Link>
              </div>
            </div>
          </div>
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <Link to="/login">
            <Button variant="outline">Login</Button>
          </Link>
          <Link to="/register">
            <Button>Sign Up</Button>
          </Link>
        </div>

        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/items"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Items
            </Link>
            <Link
              to="/skills"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Skills
            </Link>
            <Link
              to="/workshops"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Workshops
            </Link>
            <Link
              to="/community/forum"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Forum
            </Link>
            <Link
              to="/community/events"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Events
            </Link>
            <Link
              to="/community/resources"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Resources
            </Link>
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200">
            <div className="flex items-center px-5 space-x-3">
              <Link
                to="/login"
                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100 w-full text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Login
              </Link>
              <Link
                to="/register"
                className="block px-3 py-2 rounded-md text-base font-medium bg-primary text-white hover:bg-opacity-90 w-full text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
