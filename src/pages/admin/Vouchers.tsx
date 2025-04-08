
import React, { useState } from 'react';
import AdminLayout from '@/components/layout/AdminLayout';
import { Button } from '@/components/ui/button';
import { PlusCircle, Pencil, Trash2, Copy } from 'lucide-react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

const Vouchers = () => {
  const [vouchers, setVouchers] = useState([
    { id: 1, code: 'SPRING25', description: 'Spring Sale', discount: '25%', validFrom: '2025-03-01', expires: '2025-04-30', uses: '45/100', active: true },
    { id: 2, code: 'WELCOME10', description: 'New Customer', discount: '10%', validFrom: '2025-01-01', expires: '2025-12-31', uses: '132/500', active: true },
    { id: 3, code: 'BDAY2025', description: 'Birthday Special', discount: '$15', validFrom: '2025-01-01', expires: '2025-12-31', uses: '78/200', active: true },
    { id: 4, code: 'SUMMER20', description: 'Summer Sale', discount: '20%', validFrom: '2024-06-01', expires: '2024-08-31', uses: '245/300', active: false },
    { id: 5, code: 'FLASH50', description: 'Flash Sale', discount: '50%', validFrom: '2025-04-15', expires: '2025-04-16', uses: '0/50', active: false }
  ]);
  
  const [showAddDialog, setShowAddDialog] = useState(false);
  const [showEditDialog, setShowEditDialog] = useState(false);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [currentVoucher, setCurrentVoucher] = useState(null);
  
  const handleEdit = (voucher) => {
    setCurrentVoucher(voucher);
    setShowEditDialog(true);
  };
  
  const handleDelete = (voucher) => {
    setCurrentVoucher(voucher);
    setShowDeleteDialog(true);
  };
  
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    // In a real app, you would show a toast notification here
    console.log(`Copied ${text} to clipboard`);
  };

  return (
    <AdminLayout title="Voucher Management">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-lg font-medium">All Vouchers</h1>
        <Button 
          className="bg-pastry-brown hover:bg-pastry-berry"
          onClick={() => setShowAddDialog(true)}
        >
          <PlusCircle className="h-4 w-4 mr-2" /> Create Voucher
        </Button>
      </div>
      
      <div className="bg-white p-4 rounded-md shadow">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[120px]">Code</TableHead>
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
            {vouchers.map((voucher) => (
              <TableRow key={voucher.id}>
                <TableCell className="font-medium">
                  <div className="flex items-center">
                    {voucher.code}
                    <button 
                      className="ml-2 text-gray-400 hover:text-gray-700"
                      onClick={() => copyToClipboard(voucher.code)}
                    >
                      <Copy className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </TableCell>
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
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="mr-2"
                    onClick={() => handleEdit(voucher)}
                  >
                    <Pencil className="h-4 w-4 mr-1" /> Edit
                  </Button>
                  <Button 
                    variant="destructive" 
                    size="sm"
                    onClick={() => handleDelete(voucher)}
                  >
                    <Trash2 className="h-4 w-4 mr-1" /> Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      
      {/* Add Voucher Dialog */}
      <Dialog open={showAddDialog} onOpenChange={setShowAddDialog}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>Create New Voucher</DialogTitle>
            <DialogDescription>
              Create a new discount voucher for your customers. Click save when you're done.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <label htmlFor="code" className="text-right">
                Code
              </label>
              <div className="col-span-3 flex">
                <input
                  id="code"
                  className="flex-1 h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm uppercase"
                  placeholder="VOUCHER25"
                />
                <button className="ml-2 px-3 py-2 bg-gray-100 rounded hover:bg-gray-200 text-sm">
                  Generate
                </button>
              </div>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <label htmlFor="description" className="text-right">
                Description
              </label>
              <input
                id="description"
                className="col-span-3 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                placeholder="Voucher Description"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <label htmlFor="discount-type" className="text-right">
                Discount Type
              </label>
              <select
                id="discount-type"
                className="col-span-3 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
              >
                <option value="percentage">Percentage Discount</option>
                <option value="fixed">Fixed Amount Discount</option>
              </select>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <label htmlFor="discount-value" className="text-right">
                Value
              </label>
              <input
                id="discount-value"
                type="number"
                min="0"
                className="col-span-3 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                placeholder="25"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <label htmlFor="valid-from" className="text-right">
                Valid From
              </label>
              <input
                id="valid-from"
                type="date"
                className="col-span-3 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <label htmlFor="expires" className="text-right">
                Expires
              </label>
              <input
                id="expires"
                type="date"
                className="col-span-3 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <label htmlFor="usage-limit" className="text-right">
                Usage Limit
              </label>
              <input
                id="usage-limit"
                type="number"
                min="0"
                className="col-span-3 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                placeholder="100"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <label className="text-right">
                Status
              </label>
              <div className="col-span-3 flex items-center gap-2">
                <input type="checkbox" id="active" defaultChecked />
                <label htmlFor="active">Active</label>
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowAddDialog(false)}>Cancel</Button>
            <Button type="submit" onClick={() => setShowAddDialog(false)}>Create Voucher</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      
      {/* Edit Voucher Dialog */}
      <Dialog open={showEditDialog} onOpenChange={setShowEditDialog}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>Edit Voucher</DialogTitle>
            <DialogDescription>
              Make changes to the voucher. Click save when you're done.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <label htmlFor="edit-code" className="text-right">
                Code
              </label>
              <div className="col-span-3 flex">
                <input
                  id="edit-code"
                  className="flex-1 h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm uppercase"
                  defaultValue={currentVoucher?.code}
                  readOnly
                />
              </div>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <label htmlFor="edit-description" className="text-right">
                Description
              </label>
              <input
                id="edit-description"
                className="col-span-3 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                defaultValue={currentVoucher?.description}
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <label htmlFor="edit-discount" className="text-right">
                Discount
              </label>
              <input
                id="edit-discount"
                className="col-span-3 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                defaultValue={currentVoucher?.discount}
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <label htmlFor="edit-valid-from" className="text-right">
                Valid From
              </label>
              <input
                id="edit-valid-from"
                type="date"
                className="col-span-3 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                defaultValue={currentVoucher?.validFrom}
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <label htmlFor="edit-expires" className="text-right">
                Expires
              </label>
              <input
                id="edit-expires"
                type="date"
                className="col-span-3 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                defaultValue={currentVoucher?.expires}
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <label htmlFor="edit-usage-limit" className="text-right">
                Usage Limit
              </label>
              <input
                id="edit-usage-limit"
                type="text"
                className="col-span-3 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                defaultValue="100"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <label className="text-right">
                Status
              </label>
              <div className="col-span-3 flex items-center gap-2">
                <input 
                  type="checkbox" 
                  id="edit-active" 
                  defaultChecked={currentVoucher?.active} 
                />
                <label htmlFor="edit-active">Active</label>
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowEditDialog(false)}>Cancel</Button>
            <Button type="submit" onClick={() => setShowEditDialog(false)}>Save Changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      
      {/* Delete Confirmation Dialog */}
      <AlertDialog open={showDeleteDialog} onOpenChange={setShowDeleteDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This will permanently delete the voucher code "{currentVoucher?.code}" and cannot be undone.
              Any customers currently using this code will no longer be able to apply it.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction className="bg-red-600 hover:bg-red-700">Delete Voucher</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </AdminLayout>
  );
};

export default Vouchers;
