
import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import Hero from '@/components/home/Hero';
import FeaturedProducts from '@/components/home/FeaturedProducts';
import Categories from '@/components/home/Categories';
import Testimonials from '@/components/home/Testimonials';
import Newsletter from '@/components/home/Newsletter';

const Index = () => {
  return (
    <MainLayout>
      <Hero />
      <Categories />
      <FeaturedProducts />
      <div className="bg-pastry-background py-16 px-4">
        <div className="pastry-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1483695028939-5bb13f8648b0?q=80&w=1470&auto=format&fit=crop" 
                alt="Pastry chef" 
                className="rounded-lg shadow-xl w-full object-cover max-h-96"
              />
            </div>
            <div>
              <h2 className="text-3xl font-serif font-bold text-pastry-brown mb-4">Crafted with Love and Tradition</h2>
              <p className="text-gray-700 mb-4">
                At Pastry Palace, we believe in using only the finest ingredients and traditional techniques 
                to create pastries that are not just delicious but also visually stunning.
              </p>
              <p className="text-gray-700 mb-4">
                Our team of skilled pastry chefs brings decades of experience and passion to every creation. 
                From flaky croissants to delicate tarts, each item is handcrafted with meticulous attention to detail.
              </p>
              <p className="font-medium text-pastry-berry">
                We invite you to taste the difference that quality ingredients and artisanal craftsmanship make.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Testimonials />
      <Newsletter />
    </MainLayout>
  );
};

export default Index;
