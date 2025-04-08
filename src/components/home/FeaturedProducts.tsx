
import React from 'react';
import { Button } from '@/components/ui/button';
import ProductCard, { ProductProps } from '../shop/ProductCard';
import { Link } from 'react-router-dom';

// Sample featured products data
const featuredProducts: ProductProps[] = [
  {
    id: 1,
    name: 'Chocolate Croissant',
    description: 'Buttery flaky pastry filled with rich chocolate.',
    price: 3.99,
    image: 'https://images.unsplash.com/photo-1623334044303-241021148842?q=80&w=1470&auto=format&fit=crop',
    category: 'Viennoiserie'
  },
  {
    id: 2,
    name: 'Strawberry Tart',
    description: 'Sweet tart shell filled with pastry cream and topped with fresh strawberries.',
    price: 4.99,
    image: 'https://images.unsplash.com/photo-1550617931-e17a7b70dce2?q=80&w=1470&auto=format&fit=crop',
    category: 'Tarts'
  },
  {
    id: 3,
    name: 'Classic Macaron Box',
    description: 'Six assorted French macarons in various flavors.',
    price: 12.99,
    image: 'https://images.unsplash.com/photo-1558326567-98166e232c52?q=80&w=1376&auto=format&fit=crop',
    category: 'French'
  },
  {
    id: 4,
    name: 'Artisan Sourdough',
    description: 'Hand-crafted sourdough bread with a perfect crust.',
    price: 6.99,
    image: 'https://images.unsplash.com/photo-1585478259715-1c359d2a2f37?q=80&w=1471&auto=format&fit=crop',
    category: 'Bread'
  }
];

const FeaturedProducts = () => {
  return (
    <section className="pastry-section bg-white">
      <div className="pastry-container">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl font-serif font-bold text-pastry-brown">Featured Pastries</h2>
            <p className="text-gray-600 mt-2">Our most beloved creations</p>
          </div>
          <Button 
            variant="outline" 
            className="border-pastry-brown text-pastry-brown hover:bg-pastry-brown hover:text-white"
            asChild
          >
            <Link to="/menu">
              View All
            </Link>
          </Button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
