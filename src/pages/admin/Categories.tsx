
import React from 'react';
import AdminLayout from '@/components/layout/AdminLayout';
import { Button } from '@/components/ui/button';
import { PlusCircle } from 'lucide-react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

const Categories = () => {
  return (
    <AdminLayout title="Category Management">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-lg font-medium">All Categories</h1>
        <Button className="bg-pastry-brown hover:bg-pastry-berry">
          <PlusCircle className="h-4 w-4 mr-2" /> Add Category
        </Button>
      </div>
      
      <div className="bg-white p-4 rounded-md shadow">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[80px]">ID</TableHead>
              <TableHead className="w-[100px]">Icon</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Products</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {[
              { id: 1, name: 'Cakes', products: 24 },
              { id: 2, name: 'Cupcakes', products: 18 },
              { id: 3, name: 'Donuts', products: 15 },
              { id: 4, name: 'Macaroons', products: 12 },
              { id: 5, name: 'Pastry', products: 30 },
              { id: 6, name: 'Bread', products: 10 },
            ].map((category) => (
              <TableRow key={category.id}>
                <TableCell>{category.id}</TableCell>
                <TableCell>
                  <div className="w-8 h-8 bg-gray-100 rounded-full"></div>
                </TableCell>
                <TableCell>{category.name}</TableCell>
                <TableCell>{category.products} products</TableCell>
                <TableCell className="text-right">
                  <Button variant="outline" size="sm" className="mr-2">Edit</Button>
                  <Button variant="destructive" size="sm">Delete</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </AdminLayout>
  );
};

export default Categories;
