
import React, { useState } from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Globe, Send, CalendarDays, FileText, MessageSquare } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [activeContact, setActiveContact] = useState<string | null>(null);
  
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
        description: "Maraming salamat! We'll respond within 24 hours.",
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

  const handleContactHover = (id: string | null) => {
    setActiveContact(id);
  };

  return (
    <MainLayout>
      {/* Hero Section with Animated Pattern */}
      <section className="relative bg-pastry-brown py-20 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-pastry-brown to-pastry-brown/60"></div>
          <img 
            src="https://images.unsplash.com/photo-1577219491135-ce391e35e93f?q=80&w=1374&auto=format&fit=crop" 
            alt="Filipino bakery" 
            className="w-full h-full object-cover opacity-50" 
            style={{
              transform: "scale(1.1)",
              transformOrigin: "center",
              animation: "subtleZoom 30s infinite alternate ease-in-out"
            }}
          />
        </div>

        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 left-10 w-32 h-32 bg-pastry-gold opacity-10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-pastry-berry opacity-10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-4 bg-pastry-gold text-pastry-brown hover:bg-pastry-gold/90">Get in Touch</Badge>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6 animate-fade-in">Contact Pastry Palace</h1>
            <p className="text-xl text-pastry-cream animate-fade-in leading-relaxed" style={{ animationDelay: '0.2s' }}>
              We'd love to hear from you! Whether you have questions about our Filipino pastries, 
              need to place a special order, or want to provide feedback on your experience.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mt-10 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <Card 
                className="bg-white/10 border-none backdrop-blur-sm text-white w-[260px] hover:bg-white/20 transition-all duration-300 cursor-pointer"
                onMouseEnter={() => handleContactHover('phone')}
                onMouseLeave={() => handleContactHover(null)}
              >
                <CardContent className="p-6 text-center">
                  <div className={`mx-auto mb-3 rounded-full p-3 transition-all duration-300 ${activeContact === 'phone' ? 'bg-pastry-gold text-pastry-brown' : 'bg-white/10'}`}>
                    <Phone className="h-6 w-6" />
                  </div>
                  <h3 className="font-serif font-medium">Call Us</h3>
                  <p className="text-pastry-cream mt-1">+63 (2) 8123-4567</p>
                  <p className="text-pastry-cream/70 text-xs mt-2">Available Mon-Sat, 9AM-6PM</p>
                </CardContent>
              </Card>
              
              <Card 
                className="bg-white/10 border-none backdrop-blur-sm text-white w-[260px] hover:bg-white/20 transition-all duration-300 cursor-pointer"
                onMouseEnter={() => handleContactHover('email')}
                onMouseLeave={() => handleContactHover(null)}
              >
                <CardContent className="p-6 text-center">
                  <div className={`mx-auto mb-3 rounded-full p-3 transition-all duration-300 ${activeContact === 'email' ? 'bg-pastry-gold text-pastry-brown' : 'bg-white/10'}`}>
                    <Mail className="h-6 w-6" />
                  </div>
                  <h3 className="font-serif font-medium">Email Us</h3>
                  <p className="text-pastry-cream mt-1">info@pastrypalace.ph</p>
                  <p className="text-pastry-cream/70 text-xs mt-2">We reply within 24 hours</p>
                </CardContent>
              </Card>
              
              <Card 
                className="bg-white/10 border-none backdrop-blur-sm text-white w-[260px] hover:bg-white/20 transition-all duration-300 cursor-pointer"
                onMouseEnter={() => handleContactHover('social')}
                onMouseLeave={() => handleContactHover(null)}
              >
                <CardContent className="p-6 text-center">
                  <div className={`mx-auto mb-3 rounded-full p-3 transition-all duration-300 ${activeContact === 'social' ? 'bg-pastry-gold text-pastry-brown' : 'bg-white/10'}`}>
                    <Globe className="h-6 w-6" />
                  </div>
                  <h3 className="font-serif font-medium">Follow Us</h3>
                  <div className="flex justify-center gap-4 mt-2">
                    <a href="#" className="text-pastry-cream hover:text-pastry-gold transition-colors">
                      <Facebook className="h-5 w-5" />
                    </a>
                    <a href="#" className="text-pastry-cream hover:text-pastry-gold transition-colors">
                      <Instagram className="h-5 w-5" />
                    </a>
                  </div>
                  <p className="text-pastry-cream/70 text-xs mt-2">@pastrypalaceph</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Contact Information and Form */}
      <section className="py-16 bg-white relative overflow-hidden">
        {/* Decorative Pattern Background */}
        <div className="absolute inset-0 pointer-events-none opacity-5">
          <div className="absolute top-0 left-0 w-full h-full" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/cubes.png")', backgroundRepeat: 'repeat' }}></div>
        </div>
        
        <div className="container mx-auto px-4 relative">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-2">
              <div className="sticky top-24">
                <h2 className="text-3xl font-serif font-bold text-pastry-brown mb-6 relative">
                  <span className="relative z-10">Visit Our Shop</span>
                  <span className="absolute left-0 bottom-0 w-24 h-2 bg-pastry-gold/30 z-0"></span>
                </h2>
                <p className="text-gray-600 mb-8">
                  We're currently located in Metro Manila, serving the best Filipino pastries and breads. 
                  Come visit our bakery to experience the rich flavors of our traditional recipes!
                </p>
                
                <div className="space-y-10">
                  <div className="bg-gradient-to-r from-pastry-background to-pastry-background/50 rounded-lg p-6 transition-transform hover:-translate-y-1 duration-300 hover:shadow-md group">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mt-1 bg-white p-2 rounded-full group-hover:bg-pastry-gold/20 transition-colors">
                        <MapPin className="h-6 w-6 text-pastry-berry" />
                      </div>
                      <div className="ml-4">
                        <h3 className="font-medium text-pastry-brown">Manila Shop</h3>
                        <address className="not-italic text-gray-600 mt-1">
                          123 Rizal Avenue<br />
                          Makati City, Metro Manila<br />
                          Philippines 1200
                        </address>
                        <p className="text-xs mt-2 bg-pastry-gold/20 px-2 py-1 rounded-full inline-block text-pastry-brown">
                          Near Greenbelt Shopping Center
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-pastry-background to-pastry-background/50 rounded-lg p-6 transition-transform hover:-translate-y-1 duration-300 hover:shadow-md group">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mt-1 bg-white p-2 rounded-full group-hover:bg-pastry-gold/20 transition-colors">
                        <Clock className="h-6 w-6 text-pastry-berry" />
                      </div>
                      <div className="ml-4">
                        <h3 className="font-medium text-pastry-brown">Opening Hours</h3>
                        <div className="text-gray-600 mt-1 space-y-1">
                          <div className="flex justify-between">
                            <span>Monday - Friday:</span>
                            <span className="font-medium">7:00 AM - 8:00 PM</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Saturday:</span>
                            <span className="font-medium">8:00 AM - 9:00 PM</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Sunday:</span>
                            <span className="font-medium">8:00 AM - 6:00 PM</span>
                          </div>
                          <div className="flex justify-between text-pastry-berry">
                            <span>Fiesta Days:</span>
                            <span className="font-medium">7:00 AM - 10:00 PM</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8 relative">
                    <div className="absolute -inset-2 bg-gradient-to-r from-pastry-gold/20 to-pastry-berry/10 rounded-lg blur-sm"></div>
                    <div className="p-6 rounded-lg bg-white relative border border-pastry-gold/30">
                      <h3 className="font-serif text-xl text-pastry-brown mb-4">Special Orders</h3>
                      <p className="text-gray-600 mb-4">
                        Planning a birthday party, wedding, or corporate event? We offer customized Filipino-inspired pastries and cakes for special occasions!
                      </p>
                      <div className="space-y-2">
                        <div className="flex items-center">
                          <Phone className="h-4 w-4 text-pastry-berry mr-2" />
                          <span className="text-pastry-brown font-medium">+63 (2) 8987-6543</span>
                        </div>
                        <div className="flex items-center">
                          <Mail className="h-4 w-4 text-pastry-berry mr-2" />
                          <span className="text-pastry-brown font-medium">events@pastrypalace.ph</span>
                        </div>
                      </div>
                      <div className="mt-4 pt-4 border-t border-dashed border-pastry-gold/30 text-sm text-gray-500">
                        <p>Please allow 3-5 days advance notice for special orders</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-100 relative">
                {/* Decorative element */}
                <div className="absolute -top-3 -left-3 w-16 h-16 bg-pastry-gold/20 rounded-full blur-xl"></div>
                <div className="absolute -bottom-5 -right-5 w-20 h-20 bg-pastry-berry/10 rounded-full blur-xl"></div>
                
                <div className="relative">
                  <h2 className="text-2xl font-serif font-bold text-pastry-brown mb-6 relative">
                    <span className="relative z-10">Send us a Message</span>
                    <span className="absolute left-0 bottom-0 w-24 h-2 bg-pastry-gold/30 z-0"></span>
                  </h2>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    <Badge variant="outline" className="bg-pastry-background/50 border-pastry-gold/20 flex items-center gap-1 px-3 py-1">
                      <MessageSquare className="h-3.5 w-3.5" />
                      <span>Questions</span>
                    </Badge>
                    <Badge variant="outline" className="bg-pastry-background/50 border-pastry-gold/20 flex items-center gap-1 px-3 py-1">
                      <CalendarDays className="h-3.5 w-3.5" />
                      <span>Reservations</span>
                    </Badge>
                    <Badge variant="outline" className="bg-pastry-background/50 border-pastry-gold/20 flex items-center gap-1 px-3 py-1">
                      <FileText className="h-3.5 w-3.5" />
                      <span>Feedback</span>
                    </Badge>
                    <Badge variant="outline" className="bg-pastry-background/50 border-pastry-gold/20 flex items-center gap-1 px-3 py-1">
                      <Send className="h-3.5 w-3.5" />
                      <span>Partnerships</span>
                    </Badge>
                  </div>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2 group">
                        <Label htmlFor="name" className="text-pastry-brown group-focus-within:text-pastry-berry transition-colors">Your Name</Label>
                        <div className="relative">
                          <Input 
                            id="name" 
                            placeholder="Juan dela Cruz" 
                            required 
                            value={formData.name}
                            onChange={handleChange}
                            className="border-gray-200 focus:border-pastry-berry focus:ring-pastry-berry/20 pl-10"
                          />
                          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-pastry-berry">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="5"/><path d="M20 21a8 8 0 1 0-16 0"/></svg>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-2 group">
                        <Label htmlFor="email" className="text-pastry-brown group-focus-within:text-pastry-berry transition-colors">Your Email</Label>
                        <div className="relative">
                          <Input 
                            id="email" 
                            type="email" 
                            placeholder="juan@example.com" 
                            required 
                            value={formData.email}
                            onChange={handleChange}
                            className="border-gray-200 focus:border-pastry-berry focus:ring-pastry-berry/20 pl-10"
                          />
                          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-pastry-berry">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2 group">
                        <Label htmlFor="phone" className="text-pastry-brown group-focus-within:text-pastry-berry transition-colors">Phone Number (Optional)</Label>
                        <div className="relative">
                          <Input 
                            id="phone" 
                            placeholder="+63 912 345 6789" 
                            value={formData.phone}
                            onChange={handleChange}
                            className="border-gray-200 focus:border-pastry-berry focus:ring-pastry-berry/20 pl-10"
                          />
                          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-pastry-berry">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-2 group">
                        <Label htmlFor="subject" className="text-pastry-brown group-focus-within:text-pastry-berry transition-colors">Subject</Label>
                        <div className="relative">
                          <Input 
                            id="subject" 
                            placeholder="How can we help you?" 
                            required 
                            value={formData.subject}
                            onChange={handleChange}
                            className="border-gray-200 focus:border-pastry-berry focus:ring-pastry-berry/20 pl-10"
                          />
                          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-pastry-berry">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><path d="M12 17h.01"/></svg>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-2 group">
                      <Label htmlFor="message" className="text-pastry-brown group-focus-within:text-pastry-berry transition-colors">Message</Label>
                      <textarea 
                        id="message" 
                        rows={5} 
                        className="w-full rounded-md border border-gray-200 bg-background px-3 py-2 text-sm focus-visible:outline-none focus:border-pastry-berry focus:ring-pastry-berry/20" 
                        placeholder="Tell us more about your inquiry... Kumusta po?" 
                        required
                        value={formData.message}
                        onChange={handleChange}
                      ></textarea>
                    </div>
                    
                    <div className="flex items-center space-x-2 mb-2">
                      <input type="checkbox" id="subscribe" className="rounded text-pastry-berry focus:ring-pastry-berry/20" />
                      <label htmlFor="subscribe" className="text-sm text-gray-600">
                        Subscribe to our newsletter for special Filipino pastry promotions
                      </label>
                    </div>
                    
                    <div className="pt-2">
                      <Button 
                        type="submit" 
                        disabled={isSubmitting}
                        className="w-full bg-pastry-brown text-white hover:bg-pastry-brown/90 transition-colors h-12 relative overflow-hidden group"
                      >
                        <span className="absolute inset-0 w-full h-full transition-all duration-1000 ease-out transform translate-x-full bg-pastry-berry group-hover:translate-x-0 group-hover:scale-102"></span>
                        <span className="absolute inset-0 w-full h-full flex items-center justify-center transition-all duration-300">
                          {isSubmitting ? 'Sending...' : 'Send Message'}
                          <Send className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
                        </span>
                      </Button>
                    </div>
                    
                    <p className="text-center text-gray-500 text-sm">
                      <span className="inline-block border-b border-dashed border-gray-300 pb-0.5">
                        We respect your privacy and will never share your information
                      </span>
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="py-16 bg-pastry-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 relative">
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-pastry-gold/30 rounded-full"></div>
            <h2 className="text-3xl font-serif font-bold text-pastry-brown relative inline-block">
              <span className="relative z-10">Find Us in Manila</span>
              <span className="absolute left-0 bottom-0 w-full h-2 bg-pastry-gold/30 z-0"></span>
            </h2>
            <p className="mt-4 text-gray-600 max-w-xl mx-auto">
              We're conveniently located in Makati City, just a few minutes from Greenbelt Shopping Center. 
              Come visit us and experience our freshly-baked Filipino pastries!
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <div className="rounded-lg overflow-hidden shadow-xl border-8 border-white relative group hover:shadow-2xl transition-shadow duration-300">
              <div className="relative pb-[56.25%] h-0 overflow-hidden">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3860.410646515874!2d121.04882857483134!3d14.632240776996116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b7c71ddf289f%3A0x7328813ca811efa3!2sMakati%2C%20Metro%20Manila%2C%20Philippines!5e0!3m2!1sen!2sus!4v1681308269889!5m2!1sen!2sus" 
                  className="absolute top-0 left-0 w-full h-full border-0"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Pastry Palace Manila Location"
                ></iframe>
              </div>
              
              {/* Map Overlay Card */}
              <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm p-4 rounded-lg shadow-md max-w-xs border-l-4 border-pastry-berry transition-all duration-300 hover:scale-105">
                <h3 className="font-serif text-lg text-pastry-brown font-medium mb-2">Pastry Palace Manila</h3>
                <p className="text-sm text-gray-600 mb-2">
                  123 Rizal Avenue, Makati City, Metro Manila, Philippines 1200
                </p>
                <div className="flex items-center text-pastry-berry text-sm font-medium">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span>Get Directions</span>
                </div>
              </div>
            </div>
            
            <div className="flex justify-between mt-6 px-4">
              <div className="text-sm text-gray-500">
                <span className="font-medium text-pastry-brown mr-1">Parking:</span> Available at Greenbelt Mall
              </div>
              <div className="text-sm text-gray-500">
                <span className="font-medium text-pastry-brown mr-1">Public Transport:</span> Nearby MRT station
              </div>
            </div>
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
              <div className="bg-pastry-background p-6 rounded-lg hover:shadow-md transition-shadow cursor-pointer group">
                <h3 className="text-xl font-serif text-pastry-brown mb-3 group-hover:text-pastry-berry transition-colors">Do you deliver across the Philippines?</h3>
                <p className="text-gray-600">
                  Currently, we offer delivery within Metro Manila only. We're working on expanding our delivery services to other regions of the Philippines in the near future. Stay tuned for updates!
                </p>
              </div>
              
              <div className="bg-pastry-background p-6 rounded-lg hover:shadow-md transition-shadow cursor-pointer group">
                <h3 className="text-xl font-serif text-pastry-brown mb-3 group-hover:text-pastry-berry transition-colors">How far in advance should I place special orders?</h3>
                <p className="text-gray-600">
                  For custom cakes and large orders, we recommend placing your order at least 3-5 days in advance. For weddings and large events, 2-3 weeks notice is preferable to ensure we can accommodate your specific requests.
                </p>
              </div>
              
              <div className="bg-pastry-background p-6 rounded-lg hover:shadow-md transition-shadow cursor-pointer group">
                <h3 className="text-xl font-serif text-pastry-brown mb-3 group-hover:text-pastry-berry transition-colors">Do you offer Halal or dietary-specific options?</h3>
                <p className="text-gray-600">
                  We offer a range of vegetarian pastries and can accommodate some dietary restrictions. Please inquire directly for specific requirements and our current Halal-certified options. We're always expanding our menu to be more inclusive.
                </p>
              </div>
              
              <div className="bg-pastry-background p-6 rounded-lg hover:shadow-md transition-shadow cursor-pointer group">
                <h3 className="text-xl font-serif text-pastry-brown mb-3 group-hover:text-pastry-berry transition-colors">Can I request Filipino regional specialties?</h3>
                <p className="text-gray-600">
                  Yes! We love creating regional Filipino pastry specialties. Whether it's Vigan empanadas, Cebuano torta, or other provincial delicacies, we can usually accommodate special requests with advance notice.
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
                className="bg-white text-pastry-brown hover:bg-pastry-cream relative group overflow-hidden"
              >
                <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-y-full bg-white/20 group-hover:translate-y-0"></span>
                <span className="relative flex items-center">
                  <Facebook className="mr-2 h-5 w-5" />
                  Facebook
                </span>
              </Button>
              <Button 
                size="lg"
                className="bg-pastry-gold text-pastry-brown hover:bg-pastry-gold/90 relative group overflow-hidden"
              >
                <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-y-full bg-white/20 group-hover:translate-y-0"></span>
                <span className="relative flex items-center">
                  <Instagram className="mr-2 h-5 w-5" />
                  Instagram
                </span>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Contact;
