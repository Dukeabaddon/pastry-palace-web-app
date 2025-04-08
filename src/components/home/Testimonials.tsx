
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  text: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Regular Customer',
    text: 'The pastries here are absolutely divine! Every bite is full of flavor and you can really taste the quality ingredients. The chocolate croissants are my favorite!'
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Food Blogger',
    text: 'As someone who tries pastries across the city, I can confidently say that Pastry Palace offers some of the best baked goods I\'ve ever tasted. Their attention to detail is impressive.'
  },
  {
    id: 3,
    name: 'Emma Rodriguez',
    role: 'Event Planner',
    text: 'I always order from Pastry Palace for my clients\' events. The desserts are consistently excellent and the service is always reliable. Highly recommended!'
  }
];

const Testimonials = () => {
  return (
    <section className="pastry-section bg-white">
      <div className="pastry-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif font-bold text-pastry-brown">What Our Customers Say</h2>
          <p className="text-gray-600 mt-2">Don't just take our word for it</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="border border-pastry-gold/20 bg-pastry-cream/10">
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <svg className="h-8 w-8 text-pastry-gold" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                  </svg>
                  <p className="text-gray-700">{testimonial.text}</p>
                  <div className="font-medium">
                    <p className="text-pastry-brown">{testimonial.name}</p>
                    <p className="text-pastry-berry text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
