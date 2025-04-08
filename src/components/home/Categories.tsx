
import React from 'react';
import { Button } from '@/components/ui/button';
import CategoryCard, { CategoryProps } from '../shop/CategoryCard';
import { Link } from 'react-router-dom';

// Updated categories data with better images
const categories: CategoryProps[] = [
  {
    id: 1,
    name: 'Cakes',
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=1089&auto=format&fit=crop',
    count: 12
  },
  {
    id: 2,
    name: 'Bread',
    image: 'https://images.unsplash.com/photo-1549931319-a545dcf3bc73?q=80&w=1470&auto=format&fit=crop',
    count: 8
  },
  {
    id: 3,
    name: 'Pastries',
    image: 'https://images.unsplash.com/photo-1608198093002-ad4e005484ec?q=80&w=1032&auto=format&fit=crop',
    count: 15
  },
  {
    id: 4,
    name: 'Donuts',
    image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=1064&auto=format&fit=crop',
    count: 9
  },
  {
    id: 5,
    name: 'Cupcakes',
    image: 'https://images.unsplash.com/photo-1599785209707-a456fc1337bb?q=80&w=986&auto=format&fit=crop',
    count: 10
  },
  {
    id: 6,
    name: 'Macaroons',
    image: 'https://images.unsplash.com/photo-1569864358642-9d1684040f43?q=80&w=1170&auto=format&fit=crop',
    count: 8
  }
];

const Categories = () => {
  return (
    <section className="pastry-section bg-pastry-background">
      <div className="pastry-container">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl font-serif font-bold text-pastry-brown">Our Categories</h2>
            <p className="text-gray-600 mt-2">Explore our delightful selections</p>
          </div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
