
import React from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '@/components/layout/MainLayout';
import { Button } from '@/components/ui/button';
import { Trash2, Plus, Minus } from 'lucide-react';

// Sample cart items
const cartItems = [
  {
    id: 1,
    name: 'Chocolate Croissant',
    image: 'https://images.unsplash.com/photo-1623334044303-241021148842?q=80&w=1470&auto=format&fit=crop',
    price: 3.99,
    quantity: 2
  },
  {
    id: 3,
    name: 'Classic Macaron Box',
    image: 'https://images.unsplash.com/photo-1558326567-98166e232c52?q=80&w=1376&auto=format&fit=crop',
    price: 12.99,
    quantity: 1
  },
  {
    id: 5,
    name: 'Vanilla Eclair',
    image: 'https://images.unsplash.com/photo-1682180123981-99a77c99c0e7?q=80&w=1505&auto=format&fit=crop',
    price: 3.99,
    quantity: 3
  }
];

const Cart = () => {
  // Calculate subtotal
  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = 5.99;
  const total = subtotal + shipping;

  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-serif font-bold text-pastry-brown mb-8">Your Shopping Cart</h1>
        
        {cartItems.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="divide-y divide-gray-100">
                  {cartItems.map((item) => (
                    <div key={item.id} className="p-6 flex flex-col sm:flex-row">
                      {/* Product Image */}
                      <div className="w-full sm:w-24 h-24 rounded-md overflow-hidden flex-shrink-0 mb-4 sm:mb-0">
                        <img 
                          src={item.image} 
                          alt={item.name} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      
                      {/* Product Details */}
                      <div className="sm:ml-6 flex-grow flex flex-col sm:flex-row sm:justify-between">
                        <div>
                          <h3 className="text-lg font-medium text-pastry-brown">{item.name}</h3>
                          <p className="mt-1 text-sm text-gray-500">Unit Price: ${item.price.toFixed(2)}</p>
                        </div>
                        
                        <div className="mt-4 sm:mt-0 flex items-center">
                          {/* Quantity Controls */}
                          <div className="flex items-center border border-gray-200 rounded-md">
                            <button className="px-3 py-1 text-gray-600 hover:bg-gray-50">
                              <Minus className="h-4 w-4" />
                            </button>
                            <span className="px-3 py-1 text-gray-800">{item.quantity}</span>
                            <button className="px-3 py-1 text-gray-600 hover:bg-gray-50">
                              <Plus className="h-4 w-4" />
                            </button>
                          </div>
                          
                          {/* Subtotal and Remove */}
                          <div className="ml-6 flex flex-col items-end">
                            <span className="text-pastry-brown font-medium">
                              ${(item.price * item.quantity).toFixed(2)}
                            </span>
                            <button className="mt-1 text-sm text-red-600 hover:text-red-800 flex items-center">
                              <Trash2 className="h-4 w-4 mr-1" /> Remove
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Continue Shopping */}
                <div className="bg-gray-50 px-6 py-4 border-t border-gray-100">
                  <Button 
                    variant="outline"
                    className="border-pastry-brown text-pastry-brown hover:bg-pastry-brown hover:text-white"
                    asChild
                  >
                    <Link to="/menu">
                      Continue Shopping
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
            
            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-xl font-serif font-bold text-pastry-brown mb-4">Order Summary</h2>
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="font-medium">${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Shipping</span>
                    <span className="font-medium">${shipping.toFixed(2)}</span>
                  </div>
                  <div className="border-t border-gray-100 pt-3 flex justify-between">
                    <span className="text-lg font-medium text-pastry-brown">Total</span>
                    <span className="text-lg font-bold text-pastry-brown">${total.toFixed(2)}</span>
                  </div>
                </div>
                
                {/* Promo Code */}
                <div className="mb-6">
                  <div className="flex">
                    <Input 
                      placeholder="Promo Code" 
                      className="rounded-r-none" 
                    />
                    <Button 
                      className="rounded-l-none border-l-0 bg-pastry-brown text-white hover:bg-pastry-berry"
                    >
                      Apply
                    </Button>
                  </div>
                </div>
                
                {/* Checkout Button */}
                <Button 
                  className="w-full bg-pastry-brown text-white hover:bg-pastry-berry"
                >
                  Proceed to Checkout
                </Button>
              </div>
            </div>
          </div>
        ) : (
          // Empty Cart
          <div className="text-center py-12">
            <div className="mb-6">
              <svg className="mx-auto h-16 w-16 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
            </div>
            <h2 className="text-xl font-serif font-medium text-pastry-brown mb-2">Your cart is empty</h2>
            <p className="text-gray-500 mb-6">Looks like you haven't added any pastries to your cart yet.</p>
            <Button 
              className="bg-pastry-brown text-white hover:bg-pastry-berry"
              asChild
            >
              <Link to="/menu">
                Browse Our Menu
              </Link>
            </Button>
          </div>
        )}
      </div>
    </MainLayout>
  );
};

// Add missing Input component import
const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, ...props }, ref) => {
    return (
      <input
        className={`
          flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 
          text-sm ring-offset-background 
          focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 
          disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "CartInput";

export default Cart;
