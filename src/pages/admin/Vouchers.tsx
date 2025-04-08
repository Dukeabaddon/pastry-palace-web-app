
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

const Vouchers = () => {
  return (
    <AdminLayout title="Voucher Management">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-lg font-medium">All Vouchers</h1>
        <Button className="bg-pastry-brown hover:bg-pastry-berry">
          <PlusCircle className="h-4 w-4 mr-2" /> Create Voucher
        </Button>
      </div>
      
      <div className="bg-white p-4 rounded-md shadow">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Code</TableHead>
              <TableHead>Description</TableHead>
              <TableHead>Discount</TableHead>
              <TableHead>Valid From</TableHead>
              <TableHead>Expires</TableHead>
              <TableHead>Uses</TableHead>
              <TableHead className="text-center">Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {[
              { code: 'SPRING25', description: 'Spring Sale', discount: '25%', validFrom: '2025-03-01', expires: '2025-04-30', uses: '45/100', active: true },
              { code: 'WELCOME10', description: 'New Customer', discount: '10%', validFrom: '2025-01-01', expires: '2025-12-31', uses: '132/500', active: true },
              { code: 'BDAY2025', description: 'Birthday Special', discount: '$15', validFrom: '2025-01-01', expires: '2025-12-31', uses: '78/200', active: true },
              { code: 'SUMMER20', description: 'Summer Sale', discount: '20%', validFrom: '2024-06-01', expires: '2024-08-31', uses: '245/300', active: false },
              { code: 'FLASH50', description: 'Flash Sale', discount: '50%', validFrom: '2025-04-15', expires: '2025-04-16', uses: '0/50', active: false }
            ].map((voucher) => (
              <TableRow key={voucher.code}>
                <TableCell className="font-medium">{voucher.code}</TableCell>
                <TableCell>{voucher.description}</TableCell>
                <TableCell>{voucher.discount}</TableCell>
                <TableCell>{voucher.validFrom}</TableCell>
                <TableCell>{voucher.expires}</TableCell>
                <TableCell>{voucher.uses}</TableCell>
                <TableCell className="text-center">
                  <span className={`inline-block px-2 py-1 text-xs font-semibold rounded-full
                    ${voucher.active ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}>
                    {voucher.active ? 'Active' : 'Inactive'}
                  </span>
                </TableCell>
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

export default Vouchers;
