
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

const Reviews = () => {
  return (
    <AdminLayout title="Review Management">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-lg font-medium">Product Reviews</h1>
        <div className="flex space-x-2">
          <Button variant="outline">Filter</Button>
        </div>
      </div>
      
      <div className="bg-white p-4 rounded-md shadow">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[80px]">ID</TableHead>
              <TableHead>Product</TableHead>
              <TableHead>Customer</TableHead>
              <TableHead>Rating</TableHead>
              <TableHead>Comment</TableHead>
              <TableHead>Date</TableHead>
              <TableHead className="text-center">Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {[
              { id: 1, product: 'Chocolate Cake', customer: 'John D.', rating: 5, comment: 'Absolutely delicious!', date: '2025-04-05', approved: true },
              { id: 2, product: 'Croissant', customer: 'Sarah J.', rating: 4, comment: 'Flaky and buttery, just like in Paris.', date: '2025-04-04', approved: true },
              { id: 3, product: 'Blueberry Muffin', customer: 'Mike T.', rating: 3, comment: 'Good but could use more blueberries.', date: '2025-04-03', approved: true },
              { id: 4, product: 'Eclair', customer: 'Lisa M.', rating: 2, comment: 'The filling was too sweet for my taste.', date: '2025-04-02', approved: false },
              { id: 5, product: 'Sourdough Bread', customer: 'Robert K.', rating: 5, comment: 'Perfect crust and texture!', date: '2025-04-01', approved: false }
            ].map((review) => (
              <TableRow key={review.id}>
                <TableCell>{review.id}</TableCell>
                <TableCell>{review.product}</TableCell>
                <TableCell>{review.customer}</TableCell>
                <TableCell>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className={i < review.rating ? "text-yellow-400" : "text-gray-300"}>★</span>
                    ))}
                  </div>
                </TableCell>
                <TableCell className="max-w-xs truncate">{review.comment}</TableCell>
                <TableCell>{review.date}</TableCell>
                <TableCell className="text-center">
                  <span className={`inline-block px-2 py-1 text-xs font-semibold rounded-full
                    ${review.approved ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                    {review.approved ? 'Approved' : 'Pending'}
                  </span>
                </TableCell>
                <TableCell className="text-right">
                  <Button variant="outline" size="sm" className="mr-2">View</Button>
                  {!review.approved ? (
                    <Button variant="outline" size="sm" className="mr-2 bg-green-50 text-green-800 hover:bg-green-100">Approve</Button>
                  ) : (
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

export default Reviews;
