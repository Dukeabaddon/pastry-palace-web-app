
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ShoppingCart } from 'lucide-react';

export interface ProductProps {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

interface ProductCardProps {
  product: ProductProps;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="pastry-card group">
      <div className="relative overflow-hidden">
        <Link to={`/product/${product.id}`}>
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </Link>
      </div>
      <div className="p-4">
        <div className="text-xs text-pastry-berry font-medium uppercase tracking-wide mb-1">
          {product.category}
        </div>
        <Link to={`/product/${product.id}`}>
          <h3 className="font-serif text-lg font-medium text-pastry-brown hover:text-pastry-berry transition-colors">
            {product.name}
          </h3>
        </Link>
        <p className="text-sm text-gray-600 mt-1 line-clamp-2">
          {product.description}
        </p>
        <div className="flex justify-between items-center mt-4">
          <span className="font-medium text-pastry-brown">
            ${product.price.toFixed(2)}
          </span>
          <Button 
            size="sm" 
            className="bg-pastry-brown hover:bg-pastry-berry text-white text-sm rounded-full"
          >
            <ShoppingCart className="h-4 w-4 mr-1" /> Add
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
