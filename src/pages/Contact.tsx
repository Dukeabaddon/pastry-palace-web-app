
import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle form submission
    console.log('Form submitted');
  };

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative bg-pastry-brown py-16">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-pastry-brown to-pastry-brown/20"></div>
          <img 
            src="https://images.unsplash.com/photo-1514066558159-fc8c737ef259?q=80&w=1374&auto=format&fit=crop" 
            alt="Bakery counter" 
            className="w-full h-full object-cover opacity-40" 
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">Contact Us</h1>
            <p className="text-lg text-pastry-cream">We'd love to hear from you</p>
          </div>
        </div>
      </section>

      {/* Contact Information and Form */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-serif font-bold text-pastry-brown mb-6">Get in Touch</h2>
              <p className="text-gray-600 mb-8">
                Have questions about our products, special orders, or catering services? 
                Reach out to us using the contact details below or fill out the form.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <MapPin className="h-6 w-6 text-pastry-berry" />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-medium text-pastry-brown">Visit Us</h3>
                    <address className="not-italic text-gray-600 mt-1">
                      123 Bakery Street<br />
                      Sweetville, CA 90210<br />
                      United States
                    </address>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <Phone className="h-6 w-6 text-pastry-berry" />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-medium text-pastry-brown">Call Us</h3>
                    <p className="text-gray-600 mt-1">
                      <a href="tel:+15551234567" className="hover:text-pastry-berry">(555) 123-4567</a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <Mail className="h-6 w-6 text-pastry-berry" />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-medium text-pastry-brown">Email Us</h3>
                    <p className="text-gray-600 mt-1">
                      <a href="mailto:info@pastrypalace.com" className="hover:text-pastry-berry">info@pastrypalace.com</a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <Clock className="h-6 w-6 text-pastry-berry" />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-medium text-pastry-brown">Opening Hours</h3>
                    <div className="text-gray-600 mt-1">
                      <p>Monday - Friday: 7:00 AM - 7:00 PM</p>
                      <p>Saturday: 8:00 AM - 8:00 PM</p>
                      <p>Sunday: 8:00 AM - 5:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div>
              <div className="bg-pastry-background p-8 rounded-lg shadow-sm">
                <h2 className="text-2xl font-serif font-bold text-pastry-brown mb-6">Send us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Your Name</Label>
                      <Input id="name" placeholder="John Doe" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Your Email</Label>
                      <Input id="email" type="email" placeholder="john@example.com" required />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" placeholder="How can we help you?" required />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <textarea 
                      id="message" 
                      rows={5} 
                      className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" 
                      placeholder="Tell us more about your inquiry..." 
                      required
                    ></textarea>
                  </div>
                  
                  <Button type="submit" className="w-full bg-pastry-brown text-white hover:bg-pastry-brown/90">
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="py-16 bg-pastry-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-serif font-bold text-pastry-brown">Find Us</h2>
            <p className="text-gray-600 mt-2">Visit our bakery at:</p>
          </div>
          
          <div className="max-w-4xl mx-auto h-96 rounded-lg overflow-hidden shadow-md">
            {/* Replace with actual map embed */}
            <div className="bg-gray-200 w-full h-full flex items-center justify-center">
              <div className="text-center">
                <p className="text-gray-500 mb-2">Interactive map would be displayed here</p>
                <p className="text-sm text-gray-400">123 Bakery Street, Sweetville, CA 90210</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Contact;
