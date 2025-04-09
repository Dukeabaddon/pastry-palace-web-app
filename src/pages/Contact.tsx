
import React, { useState } from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Globe } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { Card, CardContent } from '@/components/ui/card';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. We'll respond within 24 hours.",
      });
      setIsSubmitting(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
    }, 1500);
  };

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative bg-pastry-brown py-20">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-pastry-brown to-pastry-brown/60"></div>
          <img 
            src="https://images.unsplash.com/photo-1577219491135-ce391e35e93f?q=80&w=1374&auto=format&fit=crop" 
            alt="Filipino bakery" 
            className="w-full h-full object-cover opacity-50" 
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6 animate-fade-in">Get in Touch</h1>
            <p className="text-xl text-pastry-cream animate-fade-in" style={{ animationDelay: '0.2s' }}>
              We'd love to hear from you! Whether you have a question, feedback, or want to place a special order
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mt-10 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <Card className="bg-white/10 border-none backdrop-blur-sm text-white w-[260px]">
                <CardContent className="p-6 text-center">
                  <Phone className="h-8 w-8 mx-auto mb-3 text-pastry-gold" />
                  <h3 className="font-serif font-medium">Call Us</h3>
                  <p className="text-pastry-cream mt-1">+63 (2) 8123-4567</p>
                </CardContent>
              </Card>
              
              <Card className="bg-white/10 border-none backdrop-blur-sm text-white w-[260px]">
                <CardContent className="p-6 text-center">
                  <Mail className="h-8 w-8 mx-auto mb-3 text-pastry-gold" />
                  <h3 className="font-serif font-medium">Email Us</h3>
                  <p className="text-pastry-cream mt-1">info@pastrypalace.ph</p>
                </CardContent>
              </Card>
              
              <Card className="bg-white/10 border-none backdrop-blur-sm text-white w-[260px]">
                <CardContent className="p-6 text-center">
                  <Globe className="h-8 w-8 mx-auto mb-3 text-pastry-gold" />
                  <h3 className="font-serif font-medium">Follow Us</h3>
                  <div className="flex justify-center gap-4 mt-2">
                    <a href="#" className="text-pastry-cream hover:text-pastry-gold transition-colors">
                      <Facebook size={20} />
                    </a>
                    <a href="#" className="text-pastry-cream hover:text-pastry-gold transition-colors">
                      <Instagram size={20} />
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Contact Information and Form */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-serif font-bold text-pastry-brown mb-6 relative">
                <span className="relative z-10">Our Locations</span>
                <span className="absolute left-0 bottom-0 w-24 h-2 bg-pastry-gold/30 z-0"></span>
              </h2>
              <p className="text-gray-600 mb-8">
                Visit any of our stores across the Philippines. Each location offers the full range of our products, with regional specials unique to that area.
              </p>
              
              <div className="space-y-10">
                <div className="bg-pastry-background rounded-lg p-6 transition-transform hover:-translate-y-1 duration-300 hover:shadow-md">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <MapPin className="h-6 w-6 text-pastry-berry" />
                    </div>
                    <div className="ml-4">
                      <h3 className="font-medium text-pastry-brown">Manila Flagship</h3>
                      <address className="not-italic text-gray-600 mt-1">
                        123 Rizal Avenue<br />
                        Makati City, Metro Manila<br />
                        Philippines 1200
                      </address>
                      <p className="text-xs mt-2 text-pastry-berry">
                        Near Greenbelt Shopping Center
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-pastry-background rounded-lg p-6 transition-transform hover:-translate-y-1 duration-300 hover:shadow-md">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <MapPin className="h-6 w-6 text-pastry-berry" />
                    </div>
                    <div className="ml-4">
                      <h3 className="font-medium text-pastry-brown">Cebu Branch</h3>
                      <address className="not-italic text-gray-600 mt-1">
                        45 Osmena Boulevard<br />
                        Cebu City, Cebu<br />
                        Philippines 6000
                      </address>
                      <p className="text-xs mt-2 text-pastry-berry">
                        Inside Ayala Center Cebu
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-pastry-background rounded-lg p-6 transition-transform hover:-translate-y-1 duration-300 hover:shadow-md">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <Clock className="h-6 w-6 text-pastry-berry" />
                    </div>
                    <div className="ml-4">
                      <h3 className="font-medium text-pastry-brown">Opening Hours</h3>
                      <div className="text-gray-600 mt-1 space-y-1">
                        <div className="flex justify-between">
                          <span>Monday - Friday:</span>
                          <span>7:00 AM - 8:00 PM</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Saturday:</span>
                          <span>8:00 AM - 9:00 PM</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Sunday:</span>
                          <span>8:00 AM - 6:00 PM</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Holiday Hours:</span>
                          <span className="text-pastry-berry">Special Schedule</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 p-6 border border-pastry-gold/30 rounded-lg bg-pastry-gold/5">
                  <h3 className="font-serif text-xl text-pastry-brown mb-4">Bulk & Special Orders</h3>
                  <p className="text-gray-600 mb-4">
                    Planning a special event? We offer catering services and custom orders for birthdays, weddings, fiestas, and corporate events.
                  </p>
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-pastry-berry mr-2" />
                    <span className="text-pastry-brown font-medium">+63 (2) 8987-6543</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-100">
                <h2 className="text-2xl font-serif font-bold text-pastry-brown mb-6 relative">
                  <span className="relative z-10">Send us a Message</span>
                  <span className="absolute left-0 bottom-0 w-24 h-2 bg-pastry-gold/30 z-0"></span>
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-pastry-brown">Your Name</Label>
                      <Input 
                        id="name" 
                        placeholder="Juan dela Cruz" 
                        required 
                        value={formData.name}
                        onChange={handleChange}
                        className="border-gray-200 focus:border-pastry-berry focus:ring-pastry-berry/20"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-pastry-brown">Your Email</Label>
                      <Input 
                        id="email" 
                        type="email" 
                        placeholder="juan@example.com" 
                        required 
                        value={formData.email}
                        onChange={handleChange}
                        className="border-gray-200 focus:border-pastry-berry focus:ring-pastry-berry/20"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-pastry-brown">Phone Number (Optional)</Label>
                      <Input 
                        id="phone" 
                        placeholder="+63 912 345 6789" 
                        value={formData.phone}
                        onChange={handleChange}
                        className="border-gray-200 focus:border-pastry-berry focus:ring-pastry-berry/20"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject" className="text-pastry-brown">Subject</Label>
                      <Input 
                        id="subject" 
                        placeholder="How can we help you?" 
                        required 
                        value={formData.subject}
                        onChange={handleChange}
                        className="border-gray-200 focus:border-pastry-berry focus:ring-pastry-berry/20"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-pastry-brown">Message</Label>
                    <textarea 
                      id="message" 
                      rows={5} 
                      className="w-full rounded-md border border-gray-200 bg-background px-3 py-2 text-sm focus-visible:outline-none focus:border-pastry-berry focus:ring-pastry-berry/20" 
                      placeholder="Tell us more about your inquiry..." 
                      required
                      value={formData.message}
                      onChange={handleChange}
                    ></textarea>
                  </div>
                  
                  <div className="flex items-center space-x-2 mb-2">
                    <input type="checkbox" id="subscribe" className="rounded text-pastry-berry focus:ring-pastry-berry/20" />
                    <label htmlFor="subscribe" className="text-sm text-gray-600">
                      Subscribe to our newsletter for special offers
                    </label>
                  </div>
                  
                  <div className="pt-2">
                    <Button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full bg-pastry-brown text-white hover:bg-pastry-brown/90 transition-colors h-12"
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </Button>
                  </div>
                  
                  <p className="text-center text-gray-500 text-sm">
                    We respect your privacy and will never share your information
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="py-16 bg-pastry-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-pastry-brown relative inline-block">
              <span className="relative z-10">Philippines Locations</span>
              <span className="absolute left-0 bottom-0 w-full h-2 bg-pastry-gold/30 z-0"></span>
            </h2>
          </div>
          
          <div className="max-w-5xl mx-auto rounded-lg overflow-hidden shadow-xl border-8 border-white">
            <div className="relative pb-[56.25%] h-0">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3860.410646515874!2d121.04882857483134!3d14.632240776996116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b7c71ddf289f%3A0x7328813ca811efa3!2sMakati%2C%20Metro%20Manila%2C%20Philippines!5e0!3m2!1sen!2sus!4v1681308269889!5m2!1sen!2sus" 
                className="absolute top-0 left-0 w-full h-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Pastry Palace Manila Location"
              ></iframe>
            </div>
          </div>
          
          <div className="max-w-5xl mx-auto mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            <Button 
              variant="outline" 
              className="border-pastry-brown text-pastry-brown hover:bg-pastry-brown hover:text-white"
            >
              <MapPin className="mr-2 h-4 w-4" />
              Manila Location
            </Button>
            <Button 
              variant="outline" 
              className="border-pastry-brown text-pastry-brown hover:bg-pastry-brown hover:text-white"
            >
              <MapPin className="mr-2 h-4 w-4" />
              Cebu Location
            </Button>
            <Button 
              variant="outline" 
              className="border-pastry-brown text-pastry-brown hover:bg-pastry-brown hover:text-white"
            >
              <MapPin className="mr-2 h-4 w-4" />
              Davao Location
            </Button>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-serif font-bold text-pastry-brown mb-4">Frequently Asked Questions</h2>
              <p className="text-gray-600">
                Find answers to the most common questions about our services and products
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="bg-pastry-background p-6 rounded-lg">
                <h3 className="text-xl font-serif text-pastry-brown mb-3">Do you deliver across the Philippines?</h3>
                <p className="text-gray-600">
                  Yes, we offer nationwide delivery for our packaged pastries and cakes. Delivery times and fees may vary depending on your location. Same-day delivery is available in Metro Manila.
                </p>
              </div>
              
              <div className="bg-pastry-background p-6 rounded-lg">
                <h3 className="text-xl font-serif text-pastry-brown mb-3">How far in advance should I place special orders?</h3>
                <p className="text-gray-600">
                  For custom cakes and large orders, we recommend placing your order at least 3-5 days in advance. For weddings and large events, 2-3 weeks notice is preferable.
                </p>
              </div>
              
              <div className="bg-pastry-background p-6 rounded-lg">
                <h3 className="text-xl font-serif text-pastry-brown mb-3">Do you offer Halal or dietary-specific options?</h3>
                <p className="text-gray-600">
                  We offer a range of vegetarian pastries and can accommodate some dietary restrictions. Please inquire directly for specific requirements and our current Halal-certified options.
                </p>
              </div>
              
              <div className="bg-pastry-background p-6 rounded-lg">
                <h3 className="text-xl font-serif text-pastry-brown mb-3">Do you offer franchise opportunities?</h3>
                <p className="text-gray-600">
                  Yes, we do offer franchise opportunities throughout the Philippines. Please contact our business development team at franchise@pastrypalace.ph for more information.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 bg-pastry-brown">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-serif font-bold text-white mb-6">Join Our Filipino Baking Community</h2>
            <p className="text-pastry-cream mb-8 text-lg">
              Follow us on social media for the latest updates, special promotions, and to share your #PastryPalacePH moments!
            </p>
            <div className="flex justify-center gap-6">
              <Button 
                size="lg"
                className="bg-white text-pastry-brown hover:bg-pastry-cream"
              >
                <Facebook className="mr-2 h-5 w-5" />
                Facebook
              </Button>
              <Button 
                size="lg"
                className="bg-pastry-gold text-pastry-brown hover:bg-pastry-gold/90"
              >
                <Instagram className="mr-2 h-5 w-5" />
                Instagram
              </Button>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Contact;
