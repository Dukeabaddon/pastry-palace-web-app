
import React, { useState } from 'react';
import MainLayout from '@/components/layout/MainLayout';
import ProductCard, { ProductProps } from '@/components/shop/ProductCard';
import { Button } from '@/components/ui/button';

// Sample products data
const allProducts: ProductProps[] = [
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
  },
  {
    id: 5,
    name: 'Vanilla Eclair',
    description: 'Delicate choux pastry filled with vanilla cream and topped with chocolate.',
    price: 3.99,
    image: 'https://images.unsplash.com/photo-1682180123981-99a77c99c0e7?q=80&w=1505&auto=format&fit=crop',
    category: 'French'
  },
  {
    id: 6,
    name: 'Blueberry Muffin',
    description: 'Moist muffin packed with juicy blueberries.',
    price: 2.99,
    image: 'https://images.unsplash.com/photo-1607958996333-41320f36d304?q=80&w=1470&auto=format&fit=crop',
    category: 'Muffins'
  },
  {
    id: 7,
    name: 'Apple Pie',
    description: 'Classic pie with spiced apples in a flaky crust.',
    price: 15.99,
    image: 'https://images.unsplash.com/photo-1535920527002-b35e96722eb9?q=80&w=1374&auto=format&fit=crop',
    category: 'Pies'
  },
  {
    id: 8,
    name: 'Chocolate Chip Cookie',
    description: 'Chewy cookie packed with chocolate chips.',
    price: 2.49,
    image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?q=80&w=1470&auto=format&fit=crop',
    category: 'Cookies'
  }
];

// Unique categories for filter
const categories = [...new Set(allProducts.map(product => product.category))];

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  
  const filteredProducts = activeCategory
    ? allProducts.filter(product => product.category === activeCategory)
    : allProducts;

  return (
    <MainLayout>
      {/* Page Header */}
      <div className="bg-pastry-brown py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-serif font-bold text-white text-center">
            Our Menu
          </h1>
        </div>
      </div>

      {/* Category Filters */}
      <div className="bg-pastry-cream py-4 sticky top-16 z-10 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-nowrap overflow-x-auto space-x-2 py-1 hide-scrollbar">
            <Button
              variant={activeCategory === null ? "default" : "outline"}
              className={`${
                activeCategory === null 
                  ? "bg-pastry-brown text-white" 
                  : "border-pastry-brown text-pastry-brown hover:bg-pastry-brown hover:text-white"
              } whitespace-nowrap`}
              onClick={() => setActiveCategory(null)}
            >
              All Items
            </Button>
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                className={`${
                  activeCategory === category 
                    ? "bg-pastry-brown text-white" 
                    : "border-pastry-brown text-pastry-brown hover:bg-pastry-brown hover:text-white"
                } whitespace-nowrap`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="bg-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-lg text-gray-600">No products found in this category.</p>
            </div>
          )}
        </div>
      </div>
    </MainLayout>
  );
};

export default Menu;
