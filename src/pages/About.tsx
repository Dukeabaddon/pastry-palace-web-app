
import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative bg-pastry-brown py-16 md:py-20">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-pastry-brown to-pastry-brown/20"></div>
          <img 
            src="https://images.unsplash.com/photo-1644991479446-1bb4d59119eb?q=80&w=1360&auto=format&fit=crop" 
            alt="Bakery kitchen" 
            className="w-full h-full object-cover opacity-40" 
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">Our Story</h1>
            <p className="text-lg text-pastry-cream">A passion for pastry excellence since 1995</p>
          </div>
        </div>
      </section>

      {/* Our History */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-serif font-bold text-pastry-brown mb-6">Humble Beginnings</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Pastry Palace began as a small family bakery in 1995. What started as a modest shop with just three signature pastries has grown into a beloved institution with over 100 unique creations that bring joy to our community every day.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Our founder, Maria Johnson, learned the art of pastry making from her grandmother who immigrated from France with nothing but her cherished recipe book. Those same recipes, refined over generations, still form the heart of our offerings today.
            </p>

            <div className="my-12 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="aspect-square rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1591115765373-5207764f72e4?q=80&w=1470&auto=format&fit=crop" 
                  alt="Old bakery photo" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-square rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1517433367423-c7e5b0f35086?q=80&w=1480&auto=format&fit=crop" 
                  alt="Modern bakery" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <h2 className="text-3xl font-serif font-bold text-pastry-brown mb-6">Our Philosophy</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              At Pastry Palace, we believe in creating exceptional pastries with only the finest ingredients. We source locally whenever possible and maintain strict quality standards for everything we serve.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Every pastry that leaves our kitchen is crafted with care, attention to detail, and a deep appreciation for the traditions that inspire us. We blend classic techniques with innovative ideas to create memorable flavors that surprise and delight.
            </p>

            <h2 className="text-3xl font-serif font-bold text-pastry-brown mb-6">Community First</h2>
            <p className="text-gray-700 leading-relaxed">
              We're more than just a bakery – we're an integral part of our community. We provide pastries for local events, donate to food banks, and work with schools to educate children about the joys of baking. Our success is measured not just in sales, but in the smiles we bring to our neighbors' faces.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-pastry-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-pastry-brown">Meet Our Team</h2>
            <p className="text-gray-600 mt-2">The talented people behind our delicious creations</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-40 h-40 rounded-full overflow-hidden mx-auto mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1470&auto=format&fit=crop" 
                  alt="Head Pastry Chef" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-serif font-medium text-lg text-pastry-brown">Maria Johnson</h3>
              <p className="text-pastry-berry">Founder & Head Pastry Chef</p>
            </div>
            
            <div className="text-center">
              <div className="w-40 h-40 rounded-full overflow-hidden mx-auto mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1470&auto=format&fit=crop" 
                  alt="Executive Baker" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-serif font-medium text-lg text-pastry-brown">David Chen</h3>
              <p className="text-pastry-berry">Executive Baker</p>
            </div>
            
            <div className="text-center">
              <div className="w-40 h-40 rounded-full overflow-hidden mx-auto mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1398&auto=format&fit=crop" 
                  alt="Head Decorator" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-serif font-medium text-lg text-pastry-brown">Sarah Miller</h3>
              <p className="text-pastry-berry">Head Decorator</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-serif font-bold text-pastry-brown mb-4">Experience Our Passion</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            We invite you to visit our bakery and taste the difference that quality ingredients and time-honored techniques make.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Button 
              size="lg" 
              className="bg-pastry-brown text-white hover:bg-pastry-brown/90"
              asChild
            >
              <Link to="/menu">
                Explore Our Menu
              </Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-pastry-brown text-pastry-brown hover:bg-pastry-brown hover:text-white"
              asChild
            >
              <Link to="/contact">
                Contact Us
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default About;
