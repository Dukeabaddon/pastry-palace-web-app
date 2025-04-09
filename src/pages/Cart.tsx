
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '@/components/layout/MainLayout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Trash2, Plus, Minus, Tag, ChevronRight, ShoppingBag, Truck, CreditCard } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import VoucherModal, { Voucher } from '@/components/cart/VoucherModal';
import { Badge } from '@/components/ui/badge';

interface CartItem {
  id: number;
  name: string;
  image: string;
  price: number;
  quantity: number;
}

const Cart = () => {
  const { toast } = useToast();
  const [isVoucherModalOpen, setIsVoucherModalOpen] = useState(false);
  const [selectedVoucher, setSelectedVoucher] = useState<Voucher | null>(null);
  
  // Sample cart items
  const [cartItems, setCartItems] = useState<CartItem[]>([
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
  ]);

  // Calculate subtotal
  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  
  // Calculate discount
  const discount = selectedVoucher
    ? selectedVoucher.discountType === 'percentage'
      ? (subtotal * selectedVoucher.discountValue / 100)
      : selectedVoucher.discountValue
    : 0;

  const shipping = 5.99;
  const total = Math.max(0, subtotal - discount + shipping);

  // Handle quantity change
  const handleQuantityChange = (id: number, change: number) => {
    setCartItems(items => 
      items.map(item => {
        if (item.id === id) {
          const newQuantity = Math.max(1, item.quantity + change);
          return { ...item, quantity: newQuantity };
        }
        return item;
      })
    );
  };
  
  // Handle item removal
  const handleRemoveItem = (id: number) => {
    setCartItems(items => items.filter(item => item.id !== id));
    toast({
      title: "Item removed",
      description: "The item has been removed from your cart.",
    });
  };

  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-serif font-bold text-pastry-brown mb-8">Your Shopping Cart</h1>
        
        {cartItems.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-6 border-b border-gray-100">
                  <div className="flex justify-between items-center">
                    <h2 className="text-xl font-serif text-pastry-brown">Cart Items</h2>
                    <span className="text-sm text-gray-500">{cartItems.length} items</span>
                  </div>
                </div>
                
                <div className="divide-y divide-gray-100">
                  {cartItems.map((item) => (
                    <div key={item.id} className="p-6 flex flex-col sm:flex-row hover:bg-gray-50 transition-colors duration-150">
                      {/* Product Image */}
                      <div className="w-full sm:w-24 h-24 rounded-md overflow-hidden flex-shrink-0 mb-4 sm:mb-0 bg-pastry-background">
                        <img 
                          src={item.image} 
                          alt={item.name} 
                          className="w-full h-full object-cover hover-scale"
                        />
                      </div>
                      
                      {/* Product Details */}
                      <div className="sm:ml-6 flex-grow flex flex-col sm:flex-row sm:justify-between">
                        <div>
                          <h3 className="text-lg font-medium text-pastry-brown">{item.name}</h3>
                          <p className="mt-1 text-sm text-gray-500">Unit Price: ₱{item.price.toFixed(2)}</p>
                        </div>
                        
                        <div className="mt-4 sm:mt-0 flex items-center">
                          {/* Quantity Controls */}
                          <div className="flex items-center border border-gray-200 rounded-md">
                            <button 
                              onClick={() => handleQuantityChange(item.id, -1)} 
                              className="px-3 py-1 text-gray-600 hover:bg-gray-50"
                            >
                              <Minus className="h-4 w-4" />
                            </button>
                            <span className="px-3 py-1 text-gray-800">{item.quantity}</span>
                            <button 
                              onClick={() => handleQuantityChange(item.id, 1)} 
                              className="px-3 py-1 text-gray-600 hover:bg-gray-50"
                            >
                              <Plus className="h-4 w-4" />
                            </button>
                          </div>
                          
                          {/* Subtotal and Remove */}
                          <div className="ml-6 flex flex-col items-end">
                            <span className="text-pastry-brown font-medium">
                              ₱{(item.price * item.quantity).toFixed(2)}
                            </span>
                            <button 
                              onClick={() => handleRemoveItem(item.id)}
                              className="mt-1 text-sm text-red-600 hover:text-red-800 flex items-center"
                            >
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
                      <ShoppingBag className="mr-2 h-4 w-4" />
                      Continue Shopping
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
            
            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-lg p-6 sticky top-8">
                <h2 className="text-xl font-serif font-bold text-pastry-brown mb-4">Order Summary</h2>
                
                {/* Order Progress */}
                <div className="mb-6 bg-pastry-background p-4 rounded-lg">
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-gray-600 font-medium">Cart</span>
                    <span className="text-sm text-gray-500">Shipping</span>
                    <span className="text-sm text-gray-500">Payment</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5 mb-2">
                    <div className="bg-pastry-berry h-2.5 rounded-full w-1/3"></div>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">Step 1 of 3</p>
                </div>
                
                {/* Price Breakdown */}
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="font-medium">₱{subtotal.toFixed(2)}</span>
                  </div>
                  
                  {/* Discount */}
                  {selectedVoucher && (
                    <div className="flex justify-between items-center text-green-600">
                      <span className="flex items-center">
                        <Tag className="h-4 w-4 mr-1" /> 
                        Discount ({selectedVoucher.code})
                      </span>
                      <span className="font-medium">-₱{discount.toFixed(2)}</span>
                    </div>
                  )}
                  
                  <div className="flex justify-between">
                    <span className="text-gray-600">Shipping</span>
                    <span className="font-medium">₱{shipping.toFixed(2)}</span>
                  </div>
                  <div className="border-t border-gray-100 pt-3 flex justify-between">
                    <span className="text-lg font-medium text-pastry-brown">Total</span>
                    <span className="text-lg font-bold text-pastry-brown">₱{total.toFixed(2)}</span>
                  </div>
                </div>
                
                {/* Voucher Section */}
                <div className="mb-6">
                  <div 
                    className="border border-dashed border-pastry-gold rounded-md p-4 flex items-center justify-between cursor-pointer hover:bg-pastry-gold/5 transition-colors"
                    onClick={() => setIsVoucherModalOpen(true)}
                  >
                    <div className="flex items-center">
                      <div className="bg-pastry-gold/20 p-2 rounded-full mr-3">
                        <Tag className="h-4 w-4 text-pastry-brown" />
                      </div>
                      {selectedVoucher ? (
                        <div>
                          <div className="font-medium text-pastry-brown">{selectedVoucher.code}</div>
                          <div className="text-xs text-gray-600">{selectedVoucher.description}</div>
                        </div>
                      ) : (
                        <span className="text-sm text-gray-600">Apply a voucher</span>
                      )}
                    </div>
                    <ChevronRight className="h-4 w-4 text-gray-400" />
                  </div>
                </div>
                
                {/* Checkout Button with Animation */}
                <Button 
                  className="w-full bg-pastry-brown hover:bg-pastry-berry mb-3 relative overflow-hidden group transition-all duration-300"
                >
                  <span className="absolute inset-0 w-0 bg-pastry-berry transition-all duration-500 ease-out group-hover:w-full"></span>
                  <span className="relative flex items-center justify-center">
                    <CreditCard className="mr-2 h-4 w-4" />
                    Proceed to Checkout
                  </span>
                </Button>
                
                {/* Delivery Information */}
                <div className="mt-6 pt-4 border-t border-gray-100">
                  <div className="flex items-center text-sm text-gray-600 mb-2">
                    <Truck className="h-4 w-4 mr-2 text-pastry-berry" />
                    <span className="text-sm">Delivery available only in Metro Manila</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CreditCard className="h-4 w-4 mr-2 text-pastry-berry" />
                    <span className="text-sm">Secure payment via major credit cards and GCash</span>
                  </div>
                </div>
                
                {/* Free Delivery Threshold Progress */}
                {subtotal < 1500 && (
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <p className="text-sm text-gray-600 mb-2">
                      Add ₱{(1500 - subtotal).toFixed(2)} more for free delivery!
                    </p>
                    <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-pastry-berry rounded-full transition-all duration-500"
                        style={{ width: `${Math.min(100, (subtotal / 1500) * 100)}%` }}
                      ></div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        ) : (
          // Empty Cart with Improved Animation
          <div className="text-center py-12 bg-white rounded-lg shadow-sm">
            <div className="mb-6">
              <div className="mx-auto h-24 w-24 text-gray-400 bg-gray-50 rounded-full flex items-center justify-center animate-pulse">
                <ShoppingBag className="h-12 w-12" />
              </div>
            </div>
            <h2 className="text-xl font-serif font-medium text-pastry-brown mb-2">Your cart is empty</h2>
            <p className="text-gray-500 mb-6">Looks like you haven't added any pastries to your cart yet.</p>
            <Button 
              className="bg-pastry-brown text-white hover:bg-pastry-berry relative overflow-hidden group"
              asChild
            >
              <Link to="/menu">
                <span className="absolute inset-0 w-0 bg-pastry-berry transition-all duration-500 ease-out group-hover:w-full"></span>
                <span className="relative">Browse Our Menu</span>
              </Link>
            </Button>
          </div>
        )}
      </div>

      {/* Voucher Modal */}
      <VoucherModal 
        open={isVoucherModalOpen}
        onOpenChange={setIsVoucherModalOpen}
        onSelectVoucher={setSelectedVoucher}
        subtotal={subtotal}
        currentVoucher={selectedVoucher}
      />
    </MainLayout>
  );
};

export default Cart;
