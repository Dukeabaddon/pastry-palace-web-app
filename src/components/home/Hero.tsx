
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const [offset, setOffset] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.pageYOffset);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <section className="relative h-screen overflow-hidden bg-pastry-brown">
      {/* Hero Background with Parallax */}
      <div 
        className="absolute inset-0 overflow-hidden" 
        style={{
          transform: `translateY(${offset * 0.5}px)`,
          transition: 'transform 0.1s ease-out'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-pastry-brown/80 to-pastry-brown/60 z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=1526&auto=format&fit=crop" 
          alt="Assorted pastries" 
          className="w-full h-full object-cover"
          style={{
            objectPosition: `center ${50 + (offset * 0.05)}%`
          }}
        />
      </div>

      {/* Hero Content */}
      <div className="container mx-auto px-4 h-full flex items-center relative z-20">
        <div className="max-w-xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight mb-4 animate-fade-in">
            Handcrafted Pastries for Every Occasion
          </h1>
          <p className="text-lg text-pastry-cream mb-8 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            Discover our delicious selection of freshly baked pastries, cakes, and bread made with the finest ingredients.
          </p>
          <div className="flex flex-wrap gap-4 animate-fade-in" style={{ animationDelay: '0.6s' }}>
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
              className="border-pastry-cream bg-transparent text-pastry-cream hover:bg-pastry-cream/10 border-2"
              asChild
            >
              <Link to="/about">
                <span className="text-white">Our Story</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
