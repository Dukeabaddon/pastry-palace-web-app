
import React from 'react';
import AdminLayout from '@/components/layout/AdminLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { PlusCircle } from 'lucide-react';

const Inventory = () => {
  return (
    <AdminLayout title="Inventory Management">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-lg font-medium">Stock Status</h1>
        <div className="flex space-x-2">
          <Button className="bg-pastry-brown hover:bg-pastry-berry">
            <PlusCircle className="h-4 w-4 mr-2" /> Add Stock
          </Button>
        </div>
      </div>
      
      <div className="grid gap-4 md:grid-cols-3 mb-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Low Stock Items</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">Needs attention</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Out of Stock Items</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground">Critical</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Inventory Value</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$12,457.83</div>
            <p className="text-xs text-muted-foreground">Based on current stock</p>
          </CardContent>
        </Card>
      </div>
      
      <div className="bg-white p-4 rounded-md shadow">
        <h2 className="text-lg font-medium mb-4">Inventory Overview</h2>
        <p className="text-gray-500">This section will display detailed inventory management tools.</p>
        <div className="h-64 flex items-center justify-center border rounded mt-4 bg-gray-50">
          <p className="text-gray-400">Inventory data visualization will appear here</p>
        </div>
      </div>
    </AdminLayout>
  );
};

export default Inventory;
