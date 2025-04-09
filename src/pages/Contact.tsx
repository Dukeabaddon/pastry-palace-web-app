
import React, { useState } from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  MapPin, Phone, Mail, Clock, 
  Send, MessageSquare, CalendarDays, 
  ArrowRight, CheckCircle2, AlertCircle
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

// Form schema validation
const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().optional(),
  subject: z.string().min(3, { message: "Subject must be at least 3 characters." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
  subscribe: z.boolean().default(false)
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);

  // Initialize form
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
      subscribe: false
    }
  });

  // Form submission handler
  const onSubmit = (values: ContactFormValues) => {
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for reaching out. We'll respond within 24 hours.",
        variant: "default",
      });
      setIsSubmitting(false);
      form.reset();
    }, 1500);
  };

  return (
    <MainLayout>
      {/* Hero Section - Modern Design with Custom Graphics */}
      <section className="relative bg-gradient-to-br from-pastry-brown to-pastry-berry overflow-hidden">
        <div className="absolute inset-0 opacity-15 mix-blend-overlay">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="grid" width="8" height="8" patternUnits="userSpaceOnUse">
                <path d="M 8 0 L 0 0 0 8" fill="none" stroke="currentColor" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        <div className="container mx-auto px-4 py-20 lg:py-32 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 
                          drop-shadow-md animate-fade-in relative">
              <span className="bg-clip-text text-transparent bg-gradient-to-r 
                              from-white to-pastry-cream">
                Connect With Us
              </span>
              <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 
                            w-24 h-1 bg-pastry-gold rounded-full"></div>
            </h1>
            <p className="text-xl text-pastry-cream leading-relaxed mb-8 max-w-2xl mx-auto">
              We'd love to hear from you! Whether you have questions about our Filipino pastries,
              need to place a special order, or want to provide feedback.
            </p>

            {/* Quick Contact Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12 max-w-4xl mx-auto">
              <div 
                className="group"
                onMouseEnter={() => setActiveSection('call')}
                onMouseLeave={() => setActiveSection(null)}
              >
                <Card className="bg-white/10 backdrop-blur border-none h-full transform transition duration-300 
                                group-hover:translate-y-[-8px] group-hover:shadow-lg overflow-hidden">
                  <CardContent className="p-6 text-center relative">
                    <div className={`mx-auto mb-4 rounded-full p-4 w-16 h-16 flex items-center justify-center
                                  transition-all duration-300 ${activeSection === 'call' ? 
                                  'bg-pastry-gold text-pastry-brown' : 'bg-white/20 text-white'}`}>
                      <Phone className="h-6 w-6" />
                    </div>
                    <h3 className="font-serif font-medium text-white text-xl mb-2">Call Us</h3>
                    <p className="text-pastry-cream mt-1">+63 (2) 8123-4567</p>
                    <p className="text-pastry-cream/80 text-sm mt-2">Available Mon-Sat, 9AM-6PM</p>
                    
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-pastry-gold/0 
                                  via-pastry-gold to-pastry-gold/0 transform scale-x-0 group-hover:scale-x-100 
                                  transition-transform duration-300"></div>
                  </CardContent>
                </Card>
              </div>

              <div 
                className="group"
                onMouseEnter={() => setActiveSection('visit')}
                onMouseLeave={() => setActiveSection(null)}
              >
                <Card className="bg-white/10 backdrop-blur border-none h-full transform transition duration-300 
                                group-hover:translate-y-[-8px] group-hover:shadow-lg overflow-hidden">
                  <CardContent className="p-6 text-center relative">
                    <div className={`mx-auto mb-4 rounded-full p-4 w-16 h-16 flex items-center justify-center
                                  transition-all duration-300 ${activeSection === 'visit' ? 
                                  'bg-pastry-gold text-pastry-brown' : 'bg-white/20 text-white'}`}>
                      <MapPin className="h-6 w-6" />
                    </div>
                    <h3 className="font-serif font-medium text-white text-xl mb-2">Visit Us</h3>
                    <p className="text-pastry-cream mt-1">456 Katipunan Avenue, Quezon City</p>
                    <p className="text-pastry-cream/80 text-sm mt-2">Near Ateneo de Manila University</p>
                    
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-pastry-gold/0 
                                  via-pastry-gold to-pastry-gold/0 transform scale-x-0 group-hover:scale-x-100 
                                  transition-transform duration-300"></div>
                  </CardContent>
                </Card>
              </div>

              <div 
                className="group"
                onMouseEnter={() => setActiveSection('email')}
                onMouseLeave={() => setActiveSection(null)}
              >
                <Card className="bg-white/10 backdrop-blur border-none h-full transform transition duration-300 
                                group-hover:translate-y-[-8px] group-hover:shadow-lg overflow-hidden">
                  <CardContent className="p-6 text-center relative">
                    <div className={`mx-auto mb-4 rounded-full p-4 w-16 h-16 flex items-center justify-center
                                  transition-all duration-300 ${activeSection === 'email' ? 
                                  'bg-pastry-gold text-pastry-brown' : 'bg-white/20 text-white'}`}>
                      <Mail className="h-6 w-6" />
                    </div>
                    <h3 className="font-serif font-medium text-white text-xl mb-2">Email Us</h3>
                    <p className="text-pastry-cream mt-1">info@pastrypalace.ph</p>
                    <p className="text-pastry-cream/80 text-sm mt-2">We reply within 24 hours</p>
                    
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-pastry-gold/0 
                                  via-pastry-gold to-pastry-gold/0 transform scale-x-0 group-hover:scale-x-100 
                                  transition-transform duration-300"></div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
        
        {/* Wave Separator */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-0 transform">
          <svg className="relative block w-full h-[50px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" 
                  fill="#ffffff" opacity="1"></path>
          </svg>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-20 bg-white relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column - Store Information */}
            <div className="lg:col-span-5 xl:col-span-4">
              <div className="sticky top-24">
                <h2 className="text-3xl font-serif font-bold text-pastry-brown mb-8 relative inline-block">
                  <span>Our Bakery</span>
                  <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-pastry-gold to-pastry-berry/30"></div>
                </h2>

                {/* Location Card */}
                <Card className="mb-8 overflow-hidden border-none shadow-md bg-gradient-to-br from-white to-pastry-background/30">
                  <CardContent className="p-0">
                    {/* Map Preview */}
                    <div className="relative h-48 overflow-hidden">
                      <div className="absolute inset-0 bg-black/10 backdrop-blur-sm flex items-center justify-center">
                        <img 
                          src="https://maps.googleapis.com/maps/api/staticmap?center=Quezon+City,Metro+Manila,Philippines&zoom=13&size=600x300&maptype=roadmap&markers=color:red%7CQuezon+City,Metro+Manila,Philippines&key=DEMO_KEY" 
                          alt="Map of Pastry Palace" 
                          className="w-full h-full object-cover opacity-90"
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <Button 
                            variant="default" 
                            size="sm"
                            className="bg-pastry-brown hover:bg-pastry-berry text-white"
                            onClick={() => window.open("https://maps.google.com/?q=Quezon+City,Metro+Manila,Philippines", "_blank")}
                          >
                            Open in Google Maps
                          </Button>
                        </div>
                      </div>
                    </div>

                    {/* Address Details */}
                    <div className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="bg-pastry-brown/10 p-3 rounded-full text-pastry-berry">
                          <MapPin className="h-5 w-5" />
                        </div>
                        <div>
                          <h3 className="font-medium text-pastry-brown text-lg">Quezon City Shop</h3>
                          <p className="text-gray-600 mt-1">
                            456 Katipunan Avenue<br />
                            Loyola Heights, Quezon City<br />
                            Metro Manila, Philippines 1108
                          </p>
                          <p className="text-sm mt-3 bg-pastry-gold/10 px-3 py-1 rounded-full inline-block text-pastry-brown">
                            <span className="font-medium">Landmark:</span> Near Ateneo de Manila University
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Opening Hours Card */}
                <Card className="mb-8 overflow-hidden border-none shadow-md bg-gradient-to-br from-white to-pastry-background/30">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-pastry-brown/10 p-3 rounded-full text-pastry-berry">
                        <Clock className="h-5 w-5" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-medium text-pastry-brown text-lg">Opening Hours</h3>
                        <div className="mt-4 space-y-2">
                          <div className="flex justify-between items-center p-2 hover:bg-pastry-background/30 rounded-md transition-colors">
                            <span className="text-gray-600">Monday - Friday</span>
                            <span className="font-medium text-pastry-brown">7:00 AM - 8:00 PM</span>
                          </div>
                          <div className="flex justify-between items-center p-2 hover:bg-pastry-background/30 rounded-md transition-colors">
                            <span className="text-gray-600">Saturday</span>
                            <span className="font-medium text-pastry-brown">8:00 AM - 9:00 PM</span>
                          </div>
                          <div className="flex justify-between items-center p-2 hover:bg-pastry-background/30 rounded-md transition-colors">
                            <span className="text-gray-600">Sunday</span>
                            <span className="font-medium text-pastry-brown">8:00 AM - 6:00 PM</span>
                          </div>
                          <div className="flex justify-between items-center p-2 bg-pastry-gold/10 rounded-md">
                            <span className="text-pastry-berry">Fiesta Days</span>
                            <span className="font-medium text-pastry-berry">7:00 AM - 10:00 PM</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Special Orders Card */}
                <Card className="border-none shadow-md overflow-hidden">
                  <CardContent className="p-0">
                    <div className="bg-gradient-to-br from-pastry-berry/80 to-pastry-brown text-white p-6">
                      <h3 className="font-serif text-xl font-medium mb-2">Special Orders</h3>
                      <p className="text-pastry-cream/90 text-sm">
                        Planning a birthday party, wedding, or corporate event? We offer customized 
                        Filipino-inspired pastries and cakes!
                      </p>
                    </div>
                    <div className="p-6 bg-white">
                      <div className="space-y-3">
                        <div className="flex items-center">
                          <Phone className="h-4 w-4 text-pastry-berry mr-3" />
                          <span className="text-pastry-brown font-medium">+63 (2) 8987-6543</span>
                        </div>
                        <div className="flex items-center">
                          <Mail className="h-4 w-4 text-pastry-berry mr-3" />
                          <span className="text-pastry-brown font-medium">events@pastrypalace.ph</span>
                        </div>
                        <div className="flex items-center">
                          <CalendarDays className="h-4 w-4 text-pastry-berry mr-3" />
                          <span className="text-gray-700">3-5 days advance notice</span>
                        </div>
                      </div>

                      <Button 
                        variant="outline" 
                        className="mt-4 w-full border-pastry-berry text-pastry-berry hover:bg-pastry-berry hover:text-white"
                      >
                        Request Special Order
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
            
            {/* Right Column - Contact Form */}
            <div className="lg:col-span-7 xl:col-span-8">
              <div className="bg-white rounded-xl shadow-xl overflow-hidden border border-gray-100">
                <div className="p-8 md:p-12">
                  <div className="flex items-center justify-between mb-8">
                    <h2 className="text-3xl font-serif font-bold text-pastry-brown relative inline-block">
                      <span>Send Us a Message</span>
                      <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-pastry-gold to-pastry-berry/30"></div>
                    </h2>
                    <Badge className="bg-pastry-gold/90 text-pastry-brown hover:bg-pastry-gold">
                      We respond within 24 hours
                    </Badge>
                  </div>
                  
                  {/* Contact Form with validation */}
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-pastry-brown">Your Name</FormLabel>
                              <FormControl>
                                <div className="relative">
                                  <Input 
                                    placeholder="Juan dela Cruz" 
                                    className="pl-10 border-gray-200 focus:border-pastry-berry focus:ring-pastry-berry/20"
                                    {...field} 
                                  />
                                  <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="5"/><path d="M20 21a8 8 0 1 0-16 0"/></svg>
                                  </div>
                                </div>
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-pastry-brown">Email Address</FormLabel>
                              <FormControl>
                                <div className="relative">
                                  <Input 
                                    placeholder="juan@example.com" 
                                    className="pl-10 border-gray-200 focus:border-pastry-berry focus:ring-pastry-berry/20"
                                    {...field} 
                                  />
                                  <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                                  </div>
                                </div>
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="phone"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-pastry-brown">Phone Number (Optional)</FormLabel>
                              <FormControl>
                                <div className="relative">
                                  <Input 
                                    placeholder="+63 912 345 6789" 
                                    className="pl-10 border-gray-200 focus:border-pastry-berry focus:ring-pastry-berry/20"
                                    {...field} 
                                  />
                                  <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                                  </div>
                                </div>
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="subject"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-pastry-brown">Subject</FormLabel>
                              <FormControl>
                                <div className="relative">
                                  <Input 
                                    placeholder="How can we help you?" 
                                    className="pl-10 border-gray-200 focus:border-pastry-berry focus:ring-pastry-berry/20"
                                    {...field} 
                                  />
                                  <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><path d="M12 17h.01"/></svg>
                                  </div>
                                </div>
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      
                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-pastry-brown">Your Message</FormLabel>
                            <FormControl>
                              <Textarea 
                                placeholder="Tell us more about your inquiry... Kumusta po?" 
                                className="min-h-[120px] resize-y border-gray-200 focus:border-pastry-berry focus:ring-pastry-berry/20"
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="subscribe"
                        render={({ field }) => (
                          <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4 border-pastry-gold/20 bg-pastry-gold/5">
                            <FormControl>
                              <input
                                type="checkbox"
                                className="rounded border-gray-300 text-pastry-berry focus:ring-pastry-berry/20 mt-1"
                                checked={field.value}
                                onChange={field.onChange}
                              />
                            </FormControl>
                            <div className="space-y-1 leading-none">
                              <FormLabel className="text-sm text-gray-600">
                                Subscribe to our newsletter for special Filipino pastry promotions
                              </FormLabel>
                            </div>
                          </FormItem>
                        )}
                      />
                      
                      <div className="pt-4">
                        <Button 
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full bg-pastry-brown text-white hover:bg-pastry-berry transition-colors h-12 relative overflow-hidden group"
                        >
                          <span className="absolute inset-0 w-0 bg-gradient-to-r from-pastry-gold to-pastry-berry transition-all duration-500 ease-out group-hover:w-full"></span>
                          <span className="relative flex items-center justify-center">
                            {isSubmitting ? (
                              <>
                                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                Processing...
                              </>
                            ) : (
                              <>
                                Send Message
                                <Send className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
                              </>
                            )}
                          </span>
                        </Button>
                      </div>
                    </form>
                  </Form>

                  {/* Success Message Template - hidden by default */}
                  <div className="hidden mt-8 p-4 border border-green-200 rounded-lg bg-green-50 text-green-800">
                    <div className="flex">
                      <CheckCircle2 className="h-5 w-5 mr-2" />
                      <div>
                        <h3 className="font-medium">Message Sent Successfully!</h3>
                        <p className="text-sm">Thank you for contacting us. We'll get back to you soon.</p>
                      </div>
                    </div>
                  </div>

                  {/* Error Message Template - hidden by default */}
                  <div className="hidden mt-8 p-4 border border-red-200 rounded-lg bg-red-50 text-red-800">
                    <div className="flex">
                      <AlertCircle className="h-5 w-5 mr-2" />
                      <div>
                        <h3 className="font-medium">Something went wrong!</h3>
                        <p className="text-sm">Please try again or contact us directly.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Find Us in Quezon City Section */}
      <section className="py-20 bg-pastry-background relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-white to-transparent"></div>
        <div className="absolute -top-16 right-16 w-32 h-32 rounded-full bg-pastry-gold opacity-10 blur-3xl"></div>
        <div className="absolute bottom-16 left-16 w-48 h-48 rounded-full bg-pastry-berry opacity-10 blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-pastry-brown mb-4 relative inline-block">
              <span>Find Us in Quezon City</span>
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-pastry-gold to-pastry-berry/30"></div>
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              We're conveniently located in Loyola Heights, just a few minutes from Ateneo de Manila University. 
              Come visit us and experience our freshly-baked Filipino pastries!
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto">
            {/* Interactive Map Card */}
            <div className="rounded-xl overflow-hidden shadow-xl border-8 border-white relative group hover:shadow-2xl transition-shadow duration-300">
              <div className="relative pb-[56.25%] h-0 overflow-hidden">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61765.12085134767!2d121.01479846726777!3d14.63529587620903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b7685462a75f%3A0x8bfb93bd1a3824a7!2sQuezon%20City%2C%20Metro%20Manila!5e0!3m2!1sen!2sph!4v1681308269889!5m2!1sen!2sph" 
                  className="absolute top-0 left-0 w-full h-full border-0"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Pastry Palace Quezon City Location"
                ></iframe>
              </div>
              
              {/* Map Overlay Card */}
              <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm p-4 rounded-lg shadow-md max-w-xs border-l-4 border-pastry-berry transition-all duration-300 hover:scale-105">
                <h3 className="font-serif text-lg text-pastry-brown font-medium mb-2">Pastry Palace Quezon City</h3>
                <p className="text-sm text-gray-600 mb-2">
                  456 Katipunan Avenue, Loyola Heights, Quezon City, Metro Manila, Philippines 1108
                </p>
                <div className="flex items-center text-pastry-berry text-sm font-medium">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span>Get Directions</span>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="bg-white p-4 rounded-lg shadow-md">
                <div className="flex items-center">
                  <div className="bg-pastry-gold/20 p-2 rounded-full mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-pastry-brown"><circle cx="12" cy="12" r="10"/><path d="m16 10-4 4-4-4"/></svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-pastry-brown">Parking</h3>
                    <p className="text-sm text-gray-600">Available on premises</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow-md">
                <div className="flex items-center">
                  <div className="bg-pastry-gold/20 p-2 rounded-full mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-pastry-brown"><rect width="16" height="16" x="4" y="4" rx="2"/><path d="M4 12h16"/><path d="M12 4v16"/></svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-pastry-brown">Public Transport</h3>
                    <p className="text-sm text-gray-600">Nearby jeepney routes available</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow-md">
                <div className="flex items-center">
                  <div className="bg-pastry-gold/20 p-2 rounded-full mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-pastry-brown"><path d="M12 2H2v10h10V2Z"/><path d="M22 12h-10v10h10V12Z"/><path d="M12 12H2v10h10V12Z"/><path d="M22 2h-10v10h10V2Z"/></svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-pastry-brown">Landmarks</h3>
                    <p className="text-sm text-gray-600">Near Ateneo de Manila University</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions with Improved Design */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-serif font-bold text-pastry-brown mb-4 relative inline-block">
                <span>Frequently Asked Questions</span>
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-pastry-gold to-pastry-berry/30"></div>
              </h2>
              <p className="text-gray-600 mt-4">
                Find answers to the most common questions about our services and products
              </p>
            </div>
            
            <div className="space-y-4">
              {/* FAQ Item 1 */}
              <div className="bg-gradient-to-r from-white to-pastry-background/20 rounded-xl shadow-sm overflow-hidden group hover:shadow-md transition-all duration-300">
                <details className="group [&_summary::-webkit-details-marker]:hidden">
                  <summary className="flex items-center gap-4 p-6 cursor-pointer">
                    <div className="bg-pastry-gold/20 p-2 rounded-full text-pastry-brown group-hover:bg-pastry-gold/30 transition-colors">
                      <MessageSquare className="h-5 w-5" />
                    </div>
                    <h3 className="text-xl font-serif text-pastry-brown group-hover:text-pastry-berry transition-colors flex-1">
                      Do you deliver outside Metro Manila?
                    </h3>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transform transition-transform group-open:rotate-180 text-pastry-brown/70"><path d="m6 9 6 6 6-6"/></svg>
                  </summary>
                  
                  <div className="px-6 pb-6 pt-2 text-gray-600">
                    <p className="mb-3">
                      Currently, we only accept orders within Metro Manila. We're working hard to expand our 
                      delivery services outside the metro area soon.
                    </p>
                    <p className="text-sm text-pastry-berry">
                      Please check back in a few months as we plan to serve nearby provinces by 2025!
                    </p>
                  </div>
                </details>
              </div>
              
              {/* FAQ Item 2 */}
              <div className="bg-gradient-to-r from-white to-pastry-background/20 rounded-xl shadow-sm overflow-hidden group hover:shadow-md transition-all duration-300">
                <details className="group [&_summary::-webkit-details-marker]:hidden">
                  <summary className="flex items-center gap-4 p-6 cursor-pointer">
                    <div className="bg-pastry-gold/20 p-2 rounded-full text-pastry-brown group-hover:bg-pastry-gold/30 transition-colors">
                      <CalendarDays className="h-5 w-5" />
                    </div>
                    <h3 className="text-xl font-serif text-pastry-brown group-hover:text-pastry-berry transition-colors flex-1">
                      How far in advance should I place special orders?
                    </h3>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transform transition-transform group-open:rotate-180 text-pastry-brown/70"><path d="m6 9 6 6 6-6"/></svg>
                  </summary>
                  
                  <div className="px-6 pb-6 pt-2 text-gray-600">
                    <p className="mb-3">
                      For custom cakes and large orders, we recommend placing your order at least 3-5 days in advance. 
                      For weddings and large events, 2-3 weeks notice is preferable to ensure we can accommodate your specific requests.
                    </p>
                    <div className="grid grid-cols-2 gap-4 mt-4 text-sm">
                      <div className="bg-pastry-gold/10 p-3 rounded-lg">
                        <p className="font-medium text-pastry-brown">Regular Special Orders</p>
                        <p>3-5 days notice</p>
                      </div>
                      <div className="bg-pastry-gold/10 p-3 rounded-lg">
                        <p className="font-medium text-pastry-brown">Wedding & Large Events</p>
                        <p>2-3 weeks notice</p>
                      </div>
                    </div>
                  </div>
                </details>
              </div>
              
              {/* FAQ Item 3 */}
              <div className="bg-gradient-to-r from-white to-pastry-background/20 rounded-xl shadow-sm overflow-hidden group hover:shadow-md transition-all duration-300">
                <details className="group [&_summary::-webkit-details-marker]:hidden">
                  <summary className="flex items-center gap-4 p-6 cursor-pointer">
                    <div className="bg-pastry-gold/20 p-2 rounded-full text-pastry-brown group-hover:bg-pastry-gold/30 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12.5 3H3"/><path d="M21 7.5H3"/><path d="M12.5 12H3"/><path d="M21 16.5H3"/><path d="M12.5 21H3"/></svg>
                    </div>
                    <h3 className="text-xl font-serif text-pastry-brown group-hover:text-pastry-berry transition-colors flex-1">
                      Do you offer special dietary options?
                    </h3>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transform transition-transform group-open:rotate-180 text-pastry-brown/70"><path d="m6 9 6 6 6-6"/></svg>
                  </summary>
                  
                  <div className="px-6 pb-6 pt-2 text-gray-600">
                    <p className="mb-4">
                      Yes! We offer various options to accommodate different dietary needs:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                      <div className="flex items-center bg-pastry-background/30 p-2 rounded-md">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-pastry-berry mr-2"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/><path d="m9 12 2 2 4-4"/></svg>
                        <span className="text-sm">Vegetarian options</span>
                      </div>
                      <div className="flex items-center bg-pastry-background/30 p-2 rounded-md">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-pastry-berry mr-2"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/><path d="m9 12 2 2 4-4"/></svg>
                        <span className="text-sm">Sugar-free pastries</span>
                      </div>
                      <div className="flex items-center bg-pastry-background/30 p-2 rounded-md">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-pastry-berry mr-2"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/><path d="m9 12 2 2 4-4"/></svg>
                        <span className="text-sm">Gluten-free options</span>
                      </div>
                    </div>
                    <p className="mt-3 text-sm">
                      Please inform us of any dietary restrictions when placing your order, and we'll do our best to accommodate your needs.
                    </p>
                  </div>
                </details>
              </div>
              
              {/* FAQ Item 4 */}
              <div className="bg-gradient-to-r from-white to-pastry-background/20 rounded-xl shadow-sm overflow-hidden group hover:shadow-md transition-all duration-300">
                <details className="group [&_summary::-webkit-details-marker]:hidden">
                  <summary className="flex items-center gap-4 p-6 cursor-pointer">
                    <div className="bg-pastry-gold/20 p-2 rounded-full text-pastry-brown group-hover:bg-pastry-gold/30 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4.02 19c.42.5.97.8 1.58.01M7.32 15c3.09.86 5.6-1.38 5.6-4 0-1.12-.44-2.18-1.22-3M4 7c0-1.66 1.34-3 3-3s3 1.34 3 3-1.34 3-3 3c-.6 0-1.16-.18-1.62-.48"/><path d="M5.38 11a4 4 0 0 0-3.09 5.43"/><path d="M15 5.5A4 4 0 0 1 19 3c2.5 0 4 2 4 4s-1.5 4-4 4"/><path d="M20 17c-.54 1.28-1.7 2-3 2-1.5 0-4-1-4-4 0-.5 0-1 .19-1.41"/><path d="M4 21h16"/></svg>
                    </div>
                    <h3 className="text-xl font-serif text-pastry-brown group-hover:text-pastry-berry transition-colors flex-1">
                      Can I request Filipino regional specialties?
                    </h3>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transform transition-transform group-open:rotate-180 text-pastry-brown/70"><path d="m6 9 6 6 6-6"/></svg>
                  </summary>
                  
                  <div className="px-6 pb-6 pt-2 text-gray-600">
                    <p className="mb-3">
                      Absolutely! We take pride in creating authentic regional Filipino pastry specialties from across the Philippines.
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-4 text-sm">
                      <span className="bg-pastry-gold/10 px-3 py-1 rounded-full text-center">Vigan empanadas</span>
                      <span className="bg-pastry-gold/10 px-3 py-1 rounded-full text-center">Cebuano torta</span>
                      <span className="bg-pastry-gold/10 px-3 py-1 rounded-full text-center">Ensaymada</span>
                      <span className="bg-pastry-gold/10 px-3 py-1 rounded-full text-center">Bibingka</span>
                    </div>
                    <p className="mt-3">
                      Just let us know what provincial delicacy you're craving, and with advance notice, we can usually accommodate your request!
                    </p>
                  </div>
                </details>
              </div>
              
              {/* FAQ Item 5 */}
              <div className="bg-gradient-to-r from-white to-pastry-background/20 rounded-xl shadow-sm overflow-hidden group hover:shadow-md transition-all duration-300">
                <details className="group [&_summary::-webkit-details-marker]:hidden">
                  <summary className="flex items-center gap-4 p-6 cursor-pointer">
                    <div className="bg-pastry-gold/20 p-2 rounded-full text-pastry-brown group-hover:bg-pastry-gold/30 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 16 4 4 4-4"/><path d="M7 20V4"/><path d="M12 6h8l-4-4-4 4Z"/><path d="M17 10h-5a2 2 0 0 0 0 4h2a2 2 0 0 1 0 4H4"/></svg>
                    </div>
                    <h3 className="text-xl font-serif text-pastry-brown group-hover:text-pastry-berry transition-colors flex-1">
                      Do you offer gift packaging?
                    </h3>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transform transition-transform group-open:rotate-180 text-pastry-brown/70"><path d="m6 9 6 6 6-6"/></svg>
                  </summary>
                  
                  <div className="px-6 pb-6 pt-2 text-gray-600">
                    <p className="mb-3">
                      Yes, we offer beautiful Filipino-inspired gift packaging for all occasions. Our special bilao packaging is perfect 
                      for celebrations, and we can customize messages on gift cards in Filipino or English.
                    </p>
                    <div className="bg-pastry-background/30 p-3 rounded-md mt-3">
                      <p className="text-sm font-medium text-pastry-brown">Gift Packaging Options:</p>
                      <ul className="list-disc list-inside text-sm mt-1 space-y-1">
                        <li>Traditional bilao presentation</li>
                        <li>Personalized gift cards</li>
                        <li>Custom boxes with Filipino patterns</li>
                        <li>Special occasion ribbons</li>
                      </ul>
                      <p className="text-xs mt-2 text-pastry-brown/70">Additional gift wrapping fees may apply based on packaging type.</p>
                    </div>
                  </div>
                </details>
              </div>
              
              {/* More Questions CTA */}
              <div className="mt-10 text-center">
                <p className="text-gray-600 mb-4">Still have questions? We're here to help!</p>
                <Button className="bg-pastry-brown text-white hover:bg-pastry-berry">
                  Ask a Question
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-br from-pastry-brown to-pastry-berry text-white relative overflow-hidden">
        {/* Decorative Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="smallGrid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#smallGrid)" />
          </svg>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 drop-shadow-sm">Join Our Filipino Baking Community</h2>
            <p className="text-lg text-pastry-cream/90 mb-8">
              Follow us on social media for the latest updates, special promotions, and to share your #PastryPalacePH moments!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                className="bg-white text-pastry-brown hover:bg-pastry-cream transition-colors px-6 py-2 rounded-full"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                Facebook
              </Button>
              <Button 
                className="bg-pastry-gold text-pastry-brown hover:bg-pastry-gold/90 transition-colors px-6 py-2 rounded-full"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                Instagram
              </Button>
              <Button 
                variant="outline"
                className="border-white text-white hover:bg-white/10 transition-colors px-6 py-2 rounded-full"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
                Twitter
              </Button>
            </div>
            
            <div className="mt-10 pt-8 border-t border-white/20 text-sm text-pastry-cream/70">
              <p>© 2023 Pastry Palace PH. All rights reserved. Proudly serving authentic Filipino pastries in Metro Manila.</p>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Contact;
