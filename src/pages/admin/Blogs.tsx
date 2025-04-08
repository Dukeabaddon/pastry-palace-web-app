
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

const Blogs = () => {
  return (
    <AdminLayout title="Blog Management">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-lg font-medium">All Posts</h1>
        <Button className="bg-pastry-brown hover:bg-pastry-berry">
          <PlusCircle className="h-4 w-4 mr-2" /> New Post
        </Button>
      </div>
      
      <div className="bg-white p-4 rounded-md shadow">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[80px]">ID</TableHead>
              <TableHead>Title</TableHead>
              <TableHead>Author</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Published</TableHead>
              <TableHead className="text-center">Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {[
              { id: 1, title: 'Top 10 Pastry Trends of 2025', author: 'Chef Maria', category: 'Trends', published: '2025-04-01', status: 'Published' },
              { id: 2, title: 'How to Make the Perfect Croissant', author: 'Baker John', category: 'Recipes', published: '2025-03-28', status: 'Published' },
              { id: 3, title: 'Seasonal Ingredients for Spring Baking', author: 'Chef Maria', category: 'Ingredients', published: '2025-03-15', status: 'Published' },
              { id: 4, title: 'Gluten-Free Baking Guide', author: 'Nutritionist Sarah', category: 'Health', published: '', status: 'Draft' },
              { id: 5, title: 'The History of French Pastries', author: 'Food Historian David', category: 'History', published: '', status: 'Draft' }
            ].map((blog) => (
              <TableRow key={blog.id}>
                <TableCell>{blog.id}</TableCell>
                <TableCell>{blog.title}</TableCell>
                <TableCell>{blog.author}</TableCell>
                <TableCell>{blog.category}</TableCell>
                <TableCell>{blog.published || 'Not published'}</TableCell>
                <TableCell className="text-center">
                  <span className={`inline-block px-2 py-1 text-xs font-semibold rounded-full
                    ${blog.status === 'Published' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                    {blog.status}
                  </span>
                </TableCell>
                <TableCell className="text-right">
                  <Button variant="outline" size="sm" className="mr-2">Edit</Button>
                  {blog.status === 'Draft' ? (
                    <Button variant="outline" size="sm" className="mr-2 bg-green-50 text-green-800 hover:bg-green-100">Publish</Button>
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

export default Blogs;
