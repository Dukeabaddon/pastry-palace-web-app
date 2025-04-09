import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Users, Award, Heart, Clock, MapPin } from 'lucide-react';

const About = () => {
  return (
    <MainLayout>
      {/* Hero Section with Parallax */}
      <section className="relative bg-pastry-brown py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-pastry-brown/90 to-pastry-brown/60"></div>
          <img 
            src="https://images.unsplash.com/photo-1517433670267-08bbd4be890f?q=80&w=1380&auto=format&fit=crop" 
            alt="Filipino bakery" 
            className="w-full h-full object-cover opacity-60"
            style={{
              transform: "scale(1.1)",
              transformOrigin: "center",
              animation: "subtleZoom 30s infinite alternate ease-in-out"
            }}
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-1.5 bg-pastry-gold/90 text-pastry-brown rounded-full text-sm font-medium mb-4 transform animate-bounce">Est. 1995</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 animate-fade-in">Our Filipino Heritage</h1>
            <p className="text-xl text-pastry-cream leading-relaxed mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              A journey of passion, tradition, and Filipino baking excellence for over 25 years
            </p>
            <div className="flex gap-6 justify-center mt-8 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <div className="text-center">
                <div className="font-serif text-4xl text-pastry-gold font-bold">25+</div>
                <div className="text-pastry-cream text-sm">Years of Experience</div>
              </div>
              <div className="text-center">
                <div className="font-serif text-4xl text-pastry-gold font-bold">100+</div>
                <div className="text-pastry-cream text-sm">Unique Recipes</div>
              </div>
              <div className="text-center">
                <div className="font-serif text-4xl text-pastry-gold font-bold">1</div>
                <div className="text-pastry-cream text-sm">Flagship Location</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="relative">
                  <img 
                    src="https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=1472&auto=format&fit=crop" 
                    alt="Traditional Filipino pastries" 
                    className="rounded-lg shadow-xl w-full"
                  />
                  <div className="absolute -bottom-8 -right-8 bg-pastry-gold/90 p-6 rounded-lg shadow-lg hidden md:block">
                    <p className="text-pastry-brown italic font-serif text-lg">"Our secret is in the traditions passed down through generations"</p>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="mb-6 flex items-center">
                  <div className="w-16 h-0.5 bg-pastry-berry mr-4"></div>
                  <h6 className="text-pastry-berry font-medium uppercase tracking-wider text-sm">Our Journey</h6>
                </div>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-pastry-brown mb-6">A Taste of Philippine Heritage</h2>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Pastry Palace began as a small family bakery in Manila back in 1995. Our founder, Maria Santos, learned the art of pastry making from her grandmother who perfected the balance of Spanish influences with native Filipino ingredients.
                </p>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  What started as a modest shop selling pandesal and ensaymada has grown into a beloved institution featuring over 100 unique creations that combine international techniques with distinctly Filipino flavors like ube, pandan, and calamansi.
                </p>
                <p className="text-gray-700 mb-8 leading-relaxed">
                  Through economic challenges and changing times, our commitment to quality and authenticity has remained unwavering. Today, Pastry Palace continues to serve as a cornerstone of Filipino baking excellence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-pastry-background relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h6 className="text-pastry-berry font-medium uppercase tracking-wider text-sm mb-3">Our Core Values</h6>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-pastry-brown mb-6">
              The Heart of Our Bakery
            </h2>
            <p className="text-gray-700">
              These principles have guided our bakery from our humble beginnings in Manila to our multiple locations across the Philippines today.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-16 h-16 bg-pastry-berry/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Heart className="w-8 h-8 text-pastry-berry" />
              </div>
              <h3 className="font-serif font-medium text-xl text-pastry-brown text-center mb-4">Passion for Quality</h3>
              <p className="text-gray-600 text-center">
                We use only premium local ingredients, from Batangas butter to Davao chocolate, ensuring every bite is exceptional.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-16 h-16 bg-pastry-berry/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Users className="w-8 h-8 text-pastry-berry" />
              </div>
              <h3 className="font-serif font-medium text-xl text-pastry-brown text-center mb-4">Family Heritage</h3>
              <p className="text-gray-600 text-center">
                We preserve traditional Filipino baking methods while embracing innovation, creating a perfect blend of old and new.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-16 h-16 bg-pastry-berry/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Award className="w-8 h-8 text-pastry-berry" />
              </div>
              <h3 className="font-serif font-medium text-xl text-pastry-brown text-center mb-4">Community First</h3>
              <p className="text-gray-600 text-center">
                We actively support local farmers, participate in barangay events, and provide baking workshops for underprivileged youth.
              </p>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Team Section with Filipino Context */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h6 className="text-pastry-berry font-medium uppercase tracking-wider text-sm mb-3">Our Team</h6>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-pastry-brown mb-6">The Masters Behind Our Creations</h2>
            <p className="text-gray-700">
              Meet the talented people who combine Filipino tradition with modern techniques to create our delicious pastries.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="text-center group">
              <div className="relative mb-6 mx-auto">
                <div className="w-48 h-48 rounded-full overflow-hidden mx-auto mb-4 border-4 border-pastry-gold/30 p-1 transform transition-all duration-300 group-hover:border-pastry-gold">
                  <img 
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1470&auto=format&fit=crop" 
                    alt="Head Pastry Chef" 
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-pastry-gold text-pastry-brown px-4 py-1 rounded-full text-sm font-medium">
                  Founder
                </div>
              </div>
              <h3 className="font-serif font-medium text-xl text-pastry-brown">Maria Santos</h3>
              <p className="text-pastry-berry mb-3">Head Pastry Chef</p>
              <p className="text-gray-600 max-w-xs mx-auto">
                A culinary arts graduate from the University of the Philippines who specialized in traditional Filipino desserts.
              </p>
            </div>
            
            <div className="text-center group">
              <div className="relative mb-6 mx-auto">
                <div className="w-48 h-48 rounded-full overflow-hidden mx-auto mb-4 border-4 border-pastry-gold/30 p-1 transform transition-all duration-300 group-hover:border-pastry-gold">
                  <img 
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1470&auto=format&fit=crop" 
                    alt="Executive Baker" 
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-pastry-gold text-pastry-brown px-4 py-1 rounded-full text-sm font-medium">
                  Executive Chef
                </div>
              </div>
              <h3 className="font-serif font-medium text-xl text-pastry-brown">David Reyes</h3>
              <p className="text-pastry-berry mb-3">Executive Baker</p>
              <p className="text-gray-600 max-w-xs mx-auto">
                Trained in France but specializes in incorporating local ingredients from Bicol and Pampanga regions.
              </p>
            </div>
            
            <div className="text-center group">
              <div className="relative mb-6 mx-auto">
                <div className="w-48 h-48 rounded-full overflow-hidden mx-auto mb-4 border-4 border-pastry-gold/30 p-1 transform transition-all duration-300 group-hover:border-pastry-gold">
                  <img 
                    src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1398&auto=format&fit=crop" 
                    alt="Head Decorator" 
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-pastry-gold text-pastry-brown px-4 py-1 rounded-full text-sm font-medium">
                  Creative Lead
                </div>
              </div>
              <h3 className="font-serif font-medium text-xl text-pastry-brown">Sarah Mendoza</h3>
              <p className="text-pastry-berry mb-3">Head Decorator</p>
              <p className="text-gray-600 max-w-xs mx-auto">
                Known for incorporating traditional Filipino art patterns into her cake decorations and pastry designs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Locations Map Section - Updated for single location */}
      <section className="py-20 bg-pastry-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h6 className="text-pastry-berry font-medium uppercase tracking-wider text-sm mb-3">Our Location</h6>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-pastry-brown mb-6">Visit Our Flagship Store</h2>
            <p className="text-gray-700 mb-8">
              We're currently located in Metro Manila, serving our delicious Filipino pastries to local customers.
            </p>
            <div className="bg-white p-6 rounded-lg shadow-md mb-10 max-w-2xl mx-auto">
              <div className="flex items-center justify-center gap-2 text-pastry-berry mb-4">
                <MapPin className="h-5 w-5" />
                <span className="font-medium">Service Area Notice</span>
              </div>
              <p className="text-gray-700">
                We are currently only accepting orders within Metro Manila. We're working hard to expand our delivery services outside the metro area soon. Thank you for your patience and support!
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-8">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1604054094723-3a949e24311f?q=80&w=1470&auto=format&fit=crop" 
                  alt="Manila map" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
            
            <div className="lg:col-span-4">
              <div className="bg-white p-6 rounded-lg shadow-lg h-full">
                <h3 className="font-serif font-medium text-xl text-pastry-brown mb-6">Our Flagship Store</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <MapPin className="h-5 w-5 text-pastry-berry" />
                    </div>
                    <div className="ml-4">
                      <h4 className="font-medium text-pastry-brown">Manila Flagship</h4>
                      <p className="text-gray-600 text-sm mt-1">
                        123 Rizal Avenue, Makati City, Metro Manila, Philippines 1200
                      </p>
                      <p className="text-xs mt-2 text-pastry-berry">
                        Near Greenbelt Shopping Center
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <Clock className="h-5 w-5 text-pastry-berry" />
                    </div>
                    <div className="ml-4">
                      <h4 className="font-medium text-pastry-brown">Opening Hours</h4>
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
                
                <div className="mt-8">
                  <Button variant="outline" className="w-full border-pastry-brown text-pastry-brown hover:bg-pastry-brown hover:text-white" asChild>
                    <Link to="/contact">
                      Contact Us
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-pastry-brown">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">Experience Filipino Pastry Excellence</h2>
          <p className="text-pastry-cream mb-8 max-w-2xl mx-auto text-lg">
            From traditional pandesal to innovative ube-cheese ensaymada, taste why we've been the Philippines' favorite bakery for over two decades.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Button 
              size="lg" 
              className="bg-pastry-gold text-pastry-brown hover:bg-pastry-gold/90 shadow-lg"
              asChild
            >
              <Link to="/menu">
                Explore Our Menu
              </Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-pastry-cream text-pastry-cream hover:bg-pastry-cream/10 border-2"
              asChild
            >
              <Link to="/contact">
                Contact Us
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default About;
