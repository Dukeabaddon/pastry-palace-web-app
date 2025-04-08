
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-pastry-brown text-pastry-cream">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and About */}
          <div className="md:col-span-1">
            <Link to="/" className="inline-block mb-4">
              <span className="text-2xl font-serif font-bold text-pastry-gold">
                Pastry Palace
              </span>
            </Link>
            <p className="text-sm mb-4">
              Delicious handcrafted pastries made with love and the finest ingredients.
              Visit us today for a sweet experience!
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-serif font-medium text-pastry-gold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm hover:text-pastry-gold">Home</Link>
              </li>
              <li>
                <Link to="/menu" className="text-sm hover:text-pastry-gold">Menu</Link>
              </li>
              <li>
                <Link to="/about" className="text-sm hover:text-pastry-gold">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm hover:text-pastry-gold">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-serif font-medium text-pastry-gold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/menu" className="text-sm hover:text-pastry-gold">Online Ordering</Link>
              </li>
              <li>
                <Link to="/menu" className="text-sm hover:text-pastry-gold">Custom Cakes</Link>
              </li>
              <li>
                <Link to="/menu" className="text-sm hover:text-pastry-gold">Catering</Link>
              </li>
              <li>
                <Link to="/menu" className="text-sm hover:text-pastry-gold">Gift Cards</Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-serif font-medium text-pastry-gold mb-4">Contact Us</h3>
            <address className="not-italic text-sm">
              <p className="mb-2">123 Bakery Street</p>
              <p className="mb-2">Sweetville, CA 90210</p>
              <p className="mb-2">Phone: (555) 123-4567</p>
              <p className="mb-2">Email: info@pastrypalace.com</p>
            </address>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-pastry-gold/20 mt-8 pt-8 text-center text-sm">
          <p>&copy; {currentYear} Pastry Palace. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
