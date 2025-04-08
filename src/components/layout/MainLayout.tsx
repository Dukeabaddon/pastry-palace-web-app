
import React from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import Navbar from './Navbar';
import Footer from './Footer';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen bg-pastry-background">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
      <Toaster />
      <Sonner />
    </div>
  );
};

export default MainLayout;
