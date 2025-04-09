
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { Check, X, Tag } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Badge } from '@/components/ui/badge';

export interface Voucher {
  id: string;
  code: string;
  description: string;
  discountType: 'percentage' | 'fixed';
  discountValue: number;
  minSpend: number;
  expiryDate: string;
  isActive: boolean;
}

interface VoucherModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSelectVoucher: (voucher: Voucher | null) => void;
  subtotal: number;
  currentVoucher: Voucher | null;
}

const VoucherModal: React.FC<VoucherModalProps> = ({ 
  open, 
  onOpenChange, 
  onSelectVoucher, 
  subtotal,
  currentVoucher
}) => {
  const { toast } = useToast();
  const [selectedVoucherId, setSelectedVoucherId] = useState<string | null>(
    currentVoucher ? currentVoucher.id : null
  );
  
  // Sample voucher data
  const vouchers: Voucher[] = [
    {
      id: 'v1',
      code: 'WELCOME10',
      description: 'Welcome discount for new customers',
      discountType: 'percentage',
      discountValue: 10,
      minSpend: 0,
      expiryDate: '2025-12-31',
      isActive: true,
    },
    {
      id: 'v2',
      code: 'HOLIDAY25',
      description: 'Holiday season special discount',
      discountType: 'percentage',
      discountValue: 25,
      minSpend: 1500,
      expiryDate: '2025-06-30',
      isActive: true,
    },
    {
      id: 'v3',
      code: 'FLAT200',
      description: '₱200 off your order',
      discountType: 'fixed',
      discountValue: 200,
      minSpend: 1000,
      expiryDate: '2025-08-15',
      isActive: true,
    },
    {
      id: 'v4',
      code: 'BDAY50',
      description: '50% off for birthday month celebrations',
      discountType: 'percentage',
      discountValue: 50,
      minSpend: 2000,
      expiryDate: '2025-12-31',
      isActive: true,
    },
    {
      id: 'v5',
      code: 'FREESHIP',
      description: 'Free shipping on your order',
      discountType: 'fixed',
      discountValue: 150,
      minSpend: 800,
      expiryDate: '2025-05-01',
      isActive: true,
    }
  ];

  const handleSelectVoucher = (voucher: Voucher | null) => {
    if (!voucher) {
      setSelectedVoucherId(null);
      onSelectVoucher(null);
      toast({
        description: "Voucher removed from your order",
      });
      return;
    }

    if (subtotal < voucher.minSpend) {
      toast({
        title: "Cannot apply voucher",
        description: `Minimum spend of ₱${voucher.minSpend.toFixed(2)} required`,
        variant: "destructive"
      });
      return;
    }

    setSelectedVoucherId(voucher.id);
    onSelectVoucher(voucher);
    toast({
      title: "Voucher Applied!",
      description: `${voucher.code} has been applied to your order`,
    });
    onOpenChange(false);
  };

  const formatDiscount = (voucher: Voucher) => {
    return voucher.discountType === 'percentage' 
      ? `${voucher.discountValue}% off` 
      : `₱${voucher.discountValue.toFixed(2)} off`;
  };

  const isVoucherEligible = (voucher: Voucher) => {
    return subtotal >= voucher.minSpend;
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center text-xl font-serif mb-2">Available Vouchers</DialogTitle>
        </DialogHeader>
        
        <div className="flex flex-col space-y-1.5 py-2">
          <div className="overflow-y-auto max-h-[400px]">
            {vouchers.length > 0 ? (
              <div className="space-y-2">
                {/* Option to remove voucher */}
                <div 
                  className="p-4 border rounded-lg cursor-pointer hover:bg-gray-50 transition-colors"
                  onClick={() => handleSelectVoucher(null)}
                >
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <X className="h-5 w-5 text-pastry-berry mr-2" />
                      <span>Remove voucher</span>
                    </div>
                    {selectedVoucherId === null && (
                      <Check className="h-5 w-5 text-green-500" />
                    )}
                  </div>
                </div>
                
                {/* List of vouchers */}
                {vouchers.map((voucher) => {
                  const isEligible = isVoucherEligible(voucher);
                  return (
                    <div 
                      key={voucher.id} 
                      className={`p-4 border rounded-lg relative overflow-hidden ${
                        isEligible ? 'cursor-pointer hover:bg-gray-50' : 'opacity-70'
                      } transition-colors`}
                      onClick={() => isEligible && handleSelectVoucher(voucher)}
                    >
                      {/* Diagonal pattern for selected voucher */}
                      {selectedVoucherId === voucher.id && (
                        <div className="absolute inset-0 bg-pastry-gold/10 pointer-events-none" />
                      )}
                      
                      <div className="flex justify-between">
                        <div className="flex items-start space-x-3">
                          <div className="bg-pastry-gold/20 p-2 rounded">
                            <Tag className="h-5 w-5 text-pastry-brown" />
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <h3 className="font-medium text-pastry-brown">{voucher.code}</h3>
                              <Badge variant="outline" className="text-xs">
                                {formatDiscount(voucher)}
                              </Badge>
                            </div>
                            <p className="text-sm text-gray-600 mt-1">{voucher.description}</p>
                            <div className="text-xs text-gray-500 mt-1 flex items-center gap-2">
                              <span>Min. spend: ₱{voucher.minSpend.toFixed(2)}</span>
                              <span>•</span>
                              <span>Expires: {new Date(voucher.expiryDate).toLocaleDateString()}</span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="ml-4 flex items-center">
                          {selectedVoucherId === voucher.id && (
                            <Check className="h-5 w-5 text-green-500" />
                          )}
                          {!isEligible && (
                            <Badge variant="outline" className="text-xs border-orange-400 text-orange-600">
                              Spend ₱{(voucher.minSpend - subtotal).toFixed(2)} more
                            </Badge>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="text-center py-8">
                <p>No vouchers available at the moment</p>
              </div>
            )}
          </div>
        </div>
          
        <DialogFooter className="sm:justify-center">
          <Button 
            variant="outline"
            onClick={() => onOpenChange(false)}
            className="w-full sm:w-auto"
          >
            Close
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default VoucherModal;
