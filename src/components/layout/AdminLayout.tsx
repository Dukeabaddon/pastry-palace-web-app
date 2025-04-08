
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  SidebarProvider, 
  Sidebar, 
  SidebarContent, 
  SidebarMenu, 
  SidebarMenuItem, 
  SidebarMenuButton,
  SidebarHeader,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent
} from "@/components/ui/sidebar";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { 
  LayoutDashboard, 
  Package, 
  ShoppingBag, 
  Users, 
  Clipboard, 
  Tag, 
  Star, 
  Book, 
  BarChart, 
  Settings, 
  LogOut
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

interface AdminLayoutProps {
  children: React.ReactNode;
  title: string;
}

const AdminLayout = ({ children, title }: AdminLayoutProps) => {
  const navigate = useNavigate();
  const { toast } = useToast();
  
  // Check if user is logged in as admin
  React.useEffect(() => {
    const isAdmin = localStorage.getItem('isAdmin') === 'true';
    if (!isAdmin) {
      toast({
        title: "Unauthorized",
        description: "You must be logged in as an admin to access this page",
        variant: "destructive",
      });
      navigate('/login');
    }
  }, [navigate, toast]);

  const handleLogout = () => {
    localStorage.removeItem('isAdmin');
    localStorage.removeItem('adminEmail');
    toast({
      title: "Logged out",
      description: "You have been successfully logged out",
    });
    navigate('/login');
  };

  const adminEmail = localStorage.getItem('adminEmail') || '';

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        <Sidebar>
          <SidebarHeader className="border-b px-4 py-2">
            <div className="flex items-center">
              <span className="text-xl font-serif font-bold text-pastry-brown">Pastry Palace</span>
              <span className="ml-2 text-xs bg-pastry-berry text-white px-2 py-0.5 rounded-full">Admin</span>
            </div>
          </SidebarHeader>
          
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel>Management</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <a href="/admin/dashboard">
                        <LayoutDashboard className="h-5 w-5" />
                        <span>Dashboard</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <a href="/admin/products">
                        <Package className="h-5 w-5" />
                        <span>Products</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <a href="/admin/categories">
                        <Tag className="h-5 w-5" />
                        <span>Categories</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <a href="/admin/orders">
                        <ShoppingBag className="h-5 w-5" />
                        <span>Orders</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <a href="/admin/users">
                        <Users className="h-5 w-5" />
                        <span>Users</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>

            <SidebarGroup>
              <SidebarGroupLabel>Catalog</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <a href="/admin/inventory">
                        <Clipboard className="h-5 w-5" />
                        <span>Inventory</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <a href="/admin/vouchers">
                        <Tag className="h-5 w-5" />
                        <span>Vouchers</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
            
            <SidebarGroup>
              <SidebarGroupLabel>Content</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <a href="/admin/reviews">
                        <Star className="h-5 w-5" />
                        <span>Reviews</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <a href="/admin/blogs">
                        <Book className="h-5 w-5" />
                        <span>Blogs</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
            
            <SidebarGroup>
              <SidebarGroupLabel>Analytics</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <a href="/admin/reports">
                        <BarChart className="h-5 w-5" />
                        <span>Reports</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
          
          <SidebarFooter className="border-t p-4">
            <div className="flex flex-col space-y-4">
              <div className="flex items-center space-x-2 text-sm">
                <span className="font-medium">{adminEmail}</span>
              </div>
              
              <div className="flex justify-between">
                <Button 
                  variant="ghost" 
                  size="sm"
                  asChild
                >
                  <a href="/admin/settings">
                    <Settings className="h-4 w-4 mr-1" />
                    Settings
                  </a>
                </Button>
                
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={handleLogout}
                  className="text-red-500 hover:text-red-700 hover:bg-red-50"
                >
                  <LogOut className="h-4 w-4 mr-1" />
                  Logout
                </Button>
              </div>
            </div>
          </SidebarFooter>
        </Sidebar>
        
        <div className="flex-1">
          <div className="p-6 bg-white border-b">
            <h1 className="text-2xl font-serif font-bold text-pastry-brown">{title}</h1>
          </div>
          <div className="p-6">
            {children}
          </div>
        </div>
      </div>
      <Toaster />
      <Sonner />
    </SidebarProvider>
  );
};

export default AdminLayout;
