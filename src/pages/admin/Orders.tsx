
import React from 'react';
import AdminLayout from '@/components/layout/AdminLayout';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';

const Orders = () => {
  return (
    <AdminLayout title="Order Management">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-lg font-medium">Recent Orders</h1>
        <div className="flex space-x-2">
          <Button variant="outline">Export</Button>
          <Button variant="outline">Filter</Button>
        </div>
      </div>
      
      <div className="bg-white p-4 rounded-md shadow">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[80px]">Order ID</TableHead>
              <TableHead>Customer</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Items</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Total</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {[
              { id: 'ORD-1001', customer: 'John Doe', date: '2025-04-07', items: 3, status: 'Processing', total: 42.97 },
              { id: 'ORD-1002', customer: 'Jane Smith', date: '2025-04-07', items: 5, status: 'Shipped', total: 67.45 },
              { id: 'ORD-1003', customer: 'Robert Johnson', date: '2025-04-06', items: 2, status: 'Delivered', total: 29.98 },
              { id: 'ORD-1004', customer: 'Emily Wilson', date: '2025-04-06', items: 7, status: 'Processing', total: 89.93 },
              { id: 'ORD-1005', customer: 'Michael Brown', date: '2025-04-05', items: 1, status: 'Delivered', total: 15.99 }
            ].map((order) => (
              <TableRow key={order.id}>
                <TableCell>{order.id}</TableCell>
                <TableCell>{order.customer}</TableCell>
                <TableCell>{order.date}</TableCell>
                <TableCell>{order.items} items</TableCell>
                <TableCell>
                  <span className={`inline-block px-2 py-1 text-xs font-semibold rounded-full
                    ${order.status === 'Delivered' ? 'bg-green-100 text-green-800' : 
                      order.status === 'Shipped' ? 'bg-blue-100 text-blue-800' : 
                      'bg-yellow-100 text-yellow-800'}`}>
                    {order.status}
                  </span>
                </TableCell>
                <TableCell className="text-right">${order.total.toFixed(2)}</TableCell>
                <TableCell className="text-right">
                  <Button variant="outline" size="sm" className="mr-2">View</Button>
                  <Button variant="outline" size="sm">Update</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </AdminLayout>
  );
};

export default Orders;
