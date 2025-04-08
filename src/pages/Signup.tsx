
import React from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '@/components/layout/MainLayout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const Signup = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would handle signup form submission
    console.log('Signup form submitted');
  };

  return (
    <MainLayout>
      <div className="min-h-screen py-12 px-4 sm:px-6 flex flex-col justify-center">
        <div className="max-w-md w-full mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-serif font-bold text-pastry-brown">Create an Account</h1>
            <p className="text-gray-600 mt-2">Join Pastry Palace and start your sweet journey</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" placeholder="John" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" placeholder="Doe" required />
                </div>
              </div>
              
              {/* Email */}
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" type="email" placeholder="john@example.com" required />
              </div>
              
              {/* Password */}
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" required />
                <p className="text-xs text-gray-500 mt-1">
                  Password must be at least 8 characters long with at least one number and one special character.
                </p>
              </div>
              
              {/* Confirm Password */}
              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Confirm Password</Label>
                <Input id="confirmPassword" type="password" required />
              </div>
              
              {/* Terms & Conditions */}
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="terms"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-pastry-brown"
                    required
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="terms" className="text-gray-600">
                    I agree to the <a href="#" className="text-pastry-berry hover:underline">Terms and Conditions</a> and <a href="#" className="text-pastry-berry hover:underline">Privacy Policy</a>
                  </label>
                </div>
              </div>
              
              {/* Submit Button */}
              <Button type="submit" className="w-full bg-pastry-brown text-white hover:bg-pastry-berry">
                Create Account
              </Button>
            </form>
            
            {/* Login Link */}
            <div className="text-center mt-6">
              <p className="text-gray-600">
                Already have an account?{' '}
                <Link to="/login" className="text-pastry-berry hover:underline font-medium">
                  Sign In
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Signup;
