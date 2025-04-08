
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

const Products = () => {
  return (
    <AdminLayout title="Product Management">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-lg font-medium">All Products</h1>
        <Button className="bg-pastry-brown hover:bg-pastry-berry">
          <PlusCircle className="h-4 w-4 mr-2" /> Add Product
        </Button>
      </div>
      
      <div className="bg-white p-4 rounded-md shadow">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[80px]">ID</TableHead>
              <TableHead className="w-[100px]">Image</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Category</TableHead>
              <TableHead className="text-right">Price</TableHead>
              <TableHead className="text-center">Stock</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {[
              { id: 1, name: 'Chocolate Croissant', category: 'Pastry', price: 3.99, stock: 45 },
              { id: 2, name: 'Blueberry Muffin', category: 'Pastry', price: 2.99, stock: 32 },
              { id: 3, name: 'Red Velvet Cake', category: 'Cake', price: 28.99, stock: 8 },
              { id: 4, name: 'Strawberry Macaron', category: 'Macarons', price: 1.99, stock: 120 },
              { id: 5, name: 'Sourdough Bread', category: 'Bread', price: 6.99, stock: 25 }
            ].map((product) => (
              <TableRow key={product.id}>
                <TableCell>{product.id}</TableCell>
                <TableCell>
                  <div className="w-10 h-10 bg-gray-100 rounded"></div>
                </TableCell>
                <TableCell>{product.name}</TableCell>
                <TableCell>{product.category}</TableCell>
                <TableCell className="text-right">${product.price.toFixed(2)}</TableCell>
                <TableCell className="text-center">{product.stock}</TableCell>
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

export default Products;
