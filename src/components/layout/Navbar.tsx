
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Search, ShoppingCart, User, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-serif font-bold text-pastry-brown">
                Pastry Palace
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-pastry-brown hover:text-pastry-berry font-medium">
              Home
            </Link>
            <Link to="/menu" className="text-pastry-brown hover:text-pastry-berry font-medium">
              Menu
            </Link>
            <Link to="/about" className="text-pastry-brown hover:text-pastry-berry font-medium">
              About
            </Link>
            <Link to="/contact" className="text-pastry-brown hover:text-pastry-berry font-medium">
              Contact
            </Link>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="text-pastry-brown">
              <Search className="h-5 w-5" />
            </Button>
            <Link to="/cart">
              <Button variant="ghost" size="icon" className="text-pastry-brown">
                <ShoppingCart className="h-5 w-5" />
              </Button>
            </Link>
            <Link to="/login">
              <Button variant="ghost" size="icon" className="text-pastry-brown">
                <User className="h-5 w-5" />
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <Link to="/cart" className="mr-4">
              <Button variant="ghost" size="icon" className="text-pastry-brown">
                <ShoppingCart className="h-5 w-5" />
              </Button>
            </Link>
            <Button variant="ghost" size="icon" onClick={toggleMenu}>
              {isMenuOpen ? (
                <X className="h-6 w-6 text-pastry-brown" />
              ) : (
                <Menu className="h-6 w-6 text-pastry-brown" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} animate-fade-in`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-md">
          <Link 
            to="/" 
            className="block px-3 py-2 text-pastry-brown font-medium hover:bg-pastry-cream rounded-md"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link 
            to="/menu" 
            className="block px-3 py-2 text-pastry-brown font-medium hover:bg-pastry-cream rounded-md"
            onClick={() => setIsMenuOpen(false)}
          >
            Menu
          </Link>
          <Link 
            to="/about" 
            className="block px-3 py-2 text-pastry-brown font-medium hover:bg-pastry-cream rounded-md"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </Link>
          <Link 
            to="/contact" 
            className="block px-3 py-2 text-pastry-brown font-medium hover:bg-pastry-cream rounded-md"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </Link>
          <Link 
            to="/login" 
            className="block px-3 py-2 text-pastry-brown font-medium hover:bg-pastry-cream rounded-md"
            onClick={() => setIsMenuOpen(false)}
          >
            Sign In
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
