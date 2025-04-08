
import React, { useEffect } from 'react';
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from 'lucide-react';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-pastry-background p-4">
      <div className="text-center max-w-md">
        <img 
          src="https://images.unsplash.com/photo-1612201142855-7873bc1661b4?q=80&w=1470&auto=format&fit=crop" 
          alt="Broken cookie" 
          className="w-32 h-32 mx-auto rounded-full object-cover mb-6"
        />
        
        <h1 className="text-6xl font-serif font-bold text-pastry-brown mb-4">
          404
        </h1>
        
        <h2 className="text-2xl font-medium text-pastry-brown mb-4">
          Oops! This page has crumbled.
        </h2>
        
        <p className="text-gray-600 mb-8">
          The page you're looking for doesn't exist or has been moved. 
          Let's get you back to browsing our delicious pastries!
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button asChild className="bg-pastry-brown hover:bg-pastry-berry">
            <Link to="/">
              <Home className="mr-2 h-4 w-4" /> Go to Homepage
            </Link>
          </Button>
          
          <Button 
            variant="outline" 
            className="border-pastry-brown text-pastry-brown hover:bg-pastry-brown hover:text-white"
            onClick={() => window.history.back()}
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> Go Back
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
