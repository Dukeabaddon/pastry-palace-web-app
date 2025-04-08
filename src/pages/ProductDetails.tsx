
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import MainLayout from '@/components/layout/MainLayout';
import { Button } from '@/components/ui/button';
import { ShoppingCart } from 'lucide-react';
import { ProductProps } from '@/components/shop/ProductCard';
import { useToast } from '@/hooks/use-toast';

// Sample products data (this would come from an API in a real app)
const allProducts: ProductProps[] = [
  {
    id: 1,
    name: 'Chocolate Croissant',
    description: 'Our chocolate croissant features layers of buttery, flaky pastry wrapped around rich dark chocolate. Each croissant is carefully folded and baked to golden perfection. The contrast between the crisp exterior and the melt-in-your-mouth chocolate center creates an irresistible pastry that pairs perfectly with coffee or tea.',
    price: 3.99,
    image: 'https://images.unsplash.com/photo-1623334044303-241021148842?q=80&w=1470&auto=format&fit=crop',
    category: 'Viennoiserie'
  },
  {
    id: 2,
    name: 'Strawberry Tart',
    description: 'Our strawberry tart begins with a buttery shortcrust pastry shell, blind-baked until golden. The shell is filled with silky vanilla pastry cream and topped with an arrangement of fresh, ripe strawberries for a burst of natural sweetness. A light glaze adds a beautiful shine and helps preserve the fruit\'s freshness. This classic French pastry is both visually stunning and deliciously satisfying.',
    price: 4.99,
    image: 'https://images.unsplash.com/photo-1550617931-e17a7b70dce2?q=80&w=1470&auto=format&fit=crop',
    category: 'Tarts'
  },
  {
    id: 3,
    name: 'Classic Macaron Box',
    description: 'Our macaron box features six delicate French macarons in assorted flavors. Each macaron is crafted with finely ground almond flour and features a crisp outer shell with a slightly chewy interior. The two cookies sandwich a flavored buttercream, ganache, or fruit filling. Flavors include vanilla, chocolate, raspberry, pistachio, lemon, and coffee. Each bite provides the perfect balance of texture and flavor.',
    price: 12.99,
    image: 'https://images.unsplash.com/photo-1558326567-98166e232c52?q=80&w=1376&auto=format&fit=crop',
    category: 'French'
  },
  {
    id: 4,
    name: 'Artisan Sourdough',
    description: 'Our artisan sourdough bread is made with our own naturally fermented starter that\'s been nurtured for years. The long fermentation process develops complex flavors and creates the bread\'s signature tang. Each loaf is hand-shaped and scored before being baked to perfection, resulting in a crackling crust and a soft, open crumb with a slight chew. This hearty bread makes excellent toast and sandwiches.',
    price: 6.99,
    image: 'https://images.unsplash.com/photo-1585478259715-1c359d2a2f37?q=80&w=1471&auto=format&fit=crop',
    category: 'Bread'
  }
];

const ProductDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [quantity, setQuantity] = useState(1);
  const { toast } = useToast();

  // Find product by ID
  const product = allProducts.find(p => p.id === Number(id));

  if (!product) {
    return (
      <MainLayout>
        <div className="container mx-auto px-4 py-16 text-center">
          <h2 className="text-2xl font-serif font-bold text-pastry-brown mb-2">
            Product Not Found
          </h2>
          <p className="text-gray-600">
            The product you're looking for doesn't exist or has been removed.
          </p>
        </div>
      </MainLayout>
    );
  }

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handleAddToCart = () => {
    toast({
      title: "Added to Cart",
      description: `${quantity} × ${product.name} added to your cart.`,
    });
  };

  return (
    <MainLayout>
      <div className="bg-pastry-background min-h-screen">
        <div className="container mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="md:flex">
              {/* Product Image */}
              <div className="md:w-1/2">
                <div className="h-72 md:h-full">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              {/* Product Info */}
              <div className="md:w-1/2 p-6">
                <div className="mb-2">
                  <span className="text-xs font-medium text-pastry-berry uppercase tracking-wide">
                    {product.category}
                  </span>
                </div>
                
                <h1 className="text-3xl font-serif font-bold text-pastry-brown mb-2">
                  {product.name}
                </h1>
                
                <div className="text-2xl font-medium text-pastry-brown mb-4">
                  ${product.price.toFixed(2)}
                </div>
                
                <div className="prose prose-sm text-gray-700 mb-6">
                  <p>{product.description}</p>
                </div>
                
                {/* Quantity Selector */}
                <div className="flex items-center space-x-4 mb-6">
                  <span className="text-gray-700">Quantity:</span>
                  <div className="flex items-center border border-gray-300 rounded-md">
                    <button 
                      className="px-3 py-1 text-gray-600 hover:bg-gray-100"
                      onClick={decreaseQuantity}
                    >
                      -
                    </button>
                    <span className="px-4 py-1 border-x border-gray-300">
                      {quantity}
                    </span>
                    <button 
                      className="px-3 py-1 text-gray-600 hover:bg-gray-100"
                      onClick={increaseQuantity}
                    >
                      +
                    </button>
                  </div>
                </div>
                
                {/* Add to Cart Button */}
                <Button 
                  className="w-full bg-pastry-brown hover:bg-pastry-berry text-white py-3 rounded-md"
                  onClick={handleAddToCart}
                >
                  <ShoppingCart className="mr-2 h-5 w-5" /> Add to Cart
                </Button>
                
                {/* Additional Info */}
                <div className="mt-6 text-sm text-gray-600">
                  <p className="mb-1">✓ Made fresh daily</p>
                  <p className="mb-1">✓ No preservatives</p>
                  <p>✓ Local ingredients when possible</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default ProductDetails;
