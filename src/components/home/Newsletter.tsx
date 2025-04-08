
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (email) {
      toast({
        title: "Thank you for subscribing!",
        description: "You'll receive our newsletter with special offers soon.",
      });
      setEmail('');
    }
  };

  return (
    <section className="pastry-section bg-pastry-brown">
      <div className="pastry-container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-serif font-bold text-pastry-cream mb-3">
            Join Our Pastry Community
          </h2>
          <p className="text-pastry-cream/80 mb-8">
            Subscribe to our newsletter and be the first to know about new pastries, seasonal specials, and exclusive discounts.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
              required
            />
            <Button 
              type="submit" 
              className="bg-pastry-gold text-pastry-brown hover:bg-pastry-gold/90 font-medium"
            >
              Subscribe
            </Button>
          </form>
          <p className="text-xs text-pastry-cream/60 mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
