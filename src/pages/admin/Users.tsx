
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

const Users = () => {
  return (
    <AdminLayout title="User Management">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-lg font-medium">All Users</h1>
        <Button variant="outline">Export Users</Button>
      </div>
      
      <div className="bg-white p-4 rounded-md shadow">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[80px]">ID</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Role</TableHead>
              <TableHead>Joined</TableHead>
              <TableHead className="text-center">Orders</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {[
              { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Customer', joined: '2024-03-15', orders: 5 },
              { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'Customer', joined: '2024-02-28', orders: 8 },
              { id: 3, name: 'Admin User', email: 'aaronmecate182@gmail.com', role: 'Admin', joined: '2023-12-01', orders: 0 },
              { id: 4, name: 'Mark Wilson', email: 'mark@example.com', role: 'Customer', joined: '2024-04-01', orders: 2 },
              { id: 5, name: 'Sarah Johnson', email: 'sarah@example.com', role: 'Customer', joined: '2024-03-22', orders: 3 }
            ].map((user) => (
              <TableRow key={user.id}>
                <TableCell>{user.id}</TableCell>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>
                  <span className={`inline-block px-2 py-1 text-xs font-semibold rounded-full
                    ${user.role === 'Admin' ? 'bg-purple-100 text-purple-800' : 'bg-blue-100 text-blue-800'}`}>
                    {user.role}
                  </span>
                </TableCell>
                <TableCell>{user.joined}</TableCell>
                <TableCell className="text-center">{user.orders}</TableCell>
                <TableCell className="text-right">
                  <Button variant="outline" size="sm" className="mr-2">Edit</Button>
                  {user.role !== 'Admin' && (
                    <Button variant="destructive" size="sm">Delete</Button>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </AdminLayout>
  );
};

export default Users;
