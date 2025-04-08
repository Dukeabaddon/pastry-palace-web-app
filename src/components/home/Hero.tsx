
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="relative bg-pastry-brown">
      {/* Hero Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-pastry-brown to-pastry-brown/20"></div>
        <img 
          src="https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=1526&auto=format&fit=crop" 
          alt="Assorted pastries" 
          className="w-full h-full object-cover opacity-50" 
        />
      </div>

      {/* Hero Content */}
      <div className="container mx-auto px-4 py-16 md:py-24 lg:py-32 relative z-10">
        <div className="max-w-xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight mb-4">
            Handcrafted Pastries for Every Occasion
          </h1>
          <p className="text-lg text-pastry-cream mb-8">
            Discover our delicious selection of freshly baked pastries, cakes, and bread made with the finest ingredients.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button 
              size="lg" 
              className="bg-pastry-gold text-pastry-brown hover:bg-pastry-gold/90 font-medium"
              asChild
            >
              <Link to="/menu">
                Explore Our Menu
              </Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-pastry-cream text-pastry-cream hover:bg-pastry-cream/10 border-2"
              asChild
            >
              <Link to="/about">
                <span className="text-black">Our Story</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
