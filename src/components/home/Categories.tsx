
import React from 'react';
import { Button } from '@/components/ui/button';
import CategoryCard, { CategoryProps } from '../shop/CategoryCard';
import { Link } from 'react-router-dom';

// Sample categories data
const categories: CategoryProps[] = [
  {
    id: 1,
    name: 'Cakes',
    image: 'https://images.unsplash.com/photo-1542826438-bd32f43d626f?q=80&w=1292&auto=format&fit=crop',
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
    image: 'https://images.unsplash.com/photo-1612200057237-5adfff473f9a?q=80&w=1480&auto=format&fit=crop',
    count: 15
  },
  {
    id: 4,
    name: 'Cookies',
    image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?q=80&w=1470&auto=format&fit=crop',
    count: 9
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
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
