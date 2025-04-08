
import React, { useState } from 'react';
import AdminLayout from '@/components/layout/AdminLayout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { useToast } from '@/hooks/use-toast';

const Settings = () => {
  const { toast } = useToast();
  const [saving, setSaving] = useState(false);
  
  const handleSave = () => {
    setSaving(true);
    
    // Simulate API save
    setTimeout(() => {
      setSaving(false);
      toast({
        title: "Settings saved",
        description: "Your settings have been successfully updated",
      });
    }, 1000);
  };
  
  return (
    <AdminLayout title="System Settings">
      <Tabs defaultValue="general" className="space-y-4">
        <TabsList>
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="store">Store</TabsTrigger>
          <TabsTrigger value="shipping">Shipping</TabsTrigger>
          <TabsTrigger value="payment">Payment</TabsTrigger>
          <TabsTrigger value="email">Email</TabsTrigger>
        </TabsList>
        
        <TabsContent value="general" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>General Settings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="store-name">Store Name</Label>
                <Input id="store-name" defaultValue="Pastry Palace" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="store-url">Store URL</Label>
                <Input id="store-url" defaultValue="https://pastrypalace.com" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="store-email">Contact Email</Label>
                <Input id="store-email" defaultValue="contact@pastrypalace.com" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="store-phone">Contact Phone</Label>
                <Input id="store-phone" defaultValue="+1 (555) 123-4567" />
              </div>
              
              <div className="flex items-center space-x-2">
                <Switch id="maintenance-mode" />
                <Label htmlFor="maintenance-mode">Maintenance Mode</Label>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="store" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Store Settings</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-500 mb-4">Configure how your store displays products and handles inventory.</p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Switch id="show-out-of-stock" defaultChecked />
                  <Label htmlFor="show-out-of-stock">Show out of stock products</Label>
                </div>
                
                <div className="flex items-center space-x-2">
                  <Switch id="allow-backorders" />
                  <Label htmlFor="allow-backorders">Allow backorders</Label>
                </div>
                
                <div className="flex items-center space-x-2">
                  <Switch id="stock-notifications" defaultChecked />
                  <Label htmlFor="stock-notifications">Low stock notifications</Label>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="low-stock-threshold">Low Stock Threshold</Label>
                  <Input id="low-stock-threshold" type="number" defaultValue="5" />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="shipping" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Shipping Settings</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-500 mb-4">Configure shipping options and delivery zones.</p>
              
              <div className="h-64 flex items-center justify-center border rounded mt-4 bg-gray-50">
                <p className="text-gray-400">Shipping configuration options will appear here</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="payment" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Payment Settings</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-500 mb-4">Configure payment gateways and options.</p>
              
              <div className="h-64 flex items-center justify-center border rounded mt-4 bg-gray-50">
                <p className="text-gray-400">Payment gateway configuration will appear here</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="email" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Email Settings</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-500 mb-4">Configure email templates and notifications.</p>
              
              <div className="h-64 flex items-center justify-center border rounded mt-4 bg-gray-50">
                <p className="text-gray-400">Email template configuration will appear here</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
      
      <div className="mt-6 flex justify-end">
        <Button variant="outline" className="mr-2">Cancel</Button>
        <Button 
          onClick={handleSave}
          disabled={saving}
          className="bg-pastry-brown hover:bg-pastry-berry"
        >
          {saving ? 'Saving...' : 'Save Settings'}
        </Button>
      </div>
    </AdminLayout>
  );
};

export default Settings;
