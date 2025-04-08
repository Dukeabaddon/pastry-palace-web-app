
import React, { useState } from 'react';
import MainLayout from '@/components/layout/MainLayout';
import ProductCard, { ProductProps } from '@/components/shop/ProductCard';
import { Button } from '@/components/ui/button';

// Sample products data with verified images
const allProducts: ProductProps[] = [
  {
    id: 1,
    name: 'Chocolate Croissant',
    description: 'Buttery flaky pastry filled with rich chocolate.',
    price: 3.99,
    image: 'https://images.unsplash.com/photo-1623334044303-241021148842?q=80&w=1470&auto=format&fit=crop',
    category: 'Pastry'
  },
  {
    id: 2,
    name: 'Strawberry Tart',
    description: 'Sweet tart shell filled with pastry cream and topped with fresh strawberries.',
    price: 4.99,
    image: 'https://images.unsplash.com/photo-1550617931-e17a7b70dce2?q=80&w=1470&auto=format&fit=crop',
    category: 'Pastry'
  },
  {
    id: 3,
    name: 'Classic Macaron Box',
    description: 'Six assorted French macarons in various flavors.',
    price: 12.99,
    image: 'https://images.unsplash.com/photo-1558326567-98166e232c52?q=80&w=1376&auto=format&fit=crop',
    category: 'Macaroons'
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
    category: 'Pastry'
  },
  {
    id: 6,
    name: 'Blueberry Muffin',
    description: 'Moist muffin packed with juicy blueberries.',
    price: 2.99,
    image: 'https://images.unsplash.com/photo-1607958996333-41320f36d304?q=80&w=1470&auto=format&fit=crop',
    category: 'Cakes'
  },
  {
    id: 7,
    name: 'Apple Pie',
    description: 'Classic pie with spiced apples in a flaky crust.',
    price: 15.99,
    image: 'https://images.unsplash.com/photo-1535920527002-b35e96722eb9?q=80&w=1374&auto=format&fit=crop',
    category: 'Pastry'
  },
  {
    id: 8,
    name: 'Chocolate Chip Cookie',
    description: 'Chewy cookie packed with chocolate chips.',
    price: 2.49,
    image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?q=80&w=1470&auto=format&fit=crop',
    category: 'Cakes'
  },
  {
    id: 9,
    name: 'Glazed Donut',
    description: 'Light and fluffy donut with a sweet glaze.',
    price: 1.99,
    image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=1064&auto=format&fit=crop',
    category: 'Donuts'
  },
  {
    id: 10,
    name: 'Red Velvet Cupcake',
    description: 'Moist red velvet cupcake with cream cheese frosting.',
    price: 3.49,
    image: 'https://images.unsplash.com/photo-1599785209707-a456fc1337bb?q=80&w=986&auto=format&fit=crop',
    category: 'Cupcakes'
  },
  {
    id: 11,
    name: 'Chocolate Macaroon',
    description: 'Delicate chocolate macaroon with ganache filling.',
    price: 2.99,
    image: 'https://images.unsplash.com/photo-1558326567-98166e232c52?q=80&w=1376&auto=format&fit=crop',
    category: 'Macaroons'
  }
];

// Define the exact categories we want
const categoryOrder = ["All", "Latest", "Cakes", "Cupcakes", "Donuts", "Macaroons", "Pastry", "Bread"];

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  
  // Filter products based on active category
  const filteredProducts = activeCategory && activeCategory !== "All" && activeCategory !== "Latest"
    ? allProducts.filter(product => product.category === activeCategory)
    : activeCategory === "Latest" 
      ? [...allProducts].sort((a, b) => b.id - a.id).slice(0, 6) // Latest items
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

      {/* Category Filters - Centered */}
      <div className="bg-pastry-cream py-4 sticky top-16 z-10 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2 py-1">
            {categoryOrder.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                className={`${
                  activeCategory === category 
                    ? "bg-pastry-brown text-white" 
                    : "border-pastry-brown text-pastry-brown hover:bg-pastry-brown hover:text-white"
                } whitespace-nowrap`}
                onClick={() => setActiveCategory(category === "All" ? null : category)}
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
