
import React from 'react';
import { Link } from 'react-router-dom';

export interface CategoryProps {
  id: number;
  name: string;
  image: string;
  count: number;
}

interface CategoryCardProps {
  category: CategoryProps;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => {
  return (
    <Link to={`/menu?category=${category.id}`}>
      <div className="relative overflow-hidden rounded-lg group">
        <div className="aspect-square">
          <img 
            src={category.image} 
            alt={category.name} 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-4 text-white">
          <h3 className="font-serif text-lg font-medium">{category.name}</h3>
          <p className="text-sm opacity-80">{category.count} items</p>
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;
