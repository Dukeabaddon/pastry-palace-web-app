
import React from 'react';
import AdminLayout from '@/components/layout/AdminLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart, DollarSign, ShoppingCart, Users } from 'lucide-react';
import { 
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent
} from '@/components/ui/chart';
import { 
  Bar, 
  BarChart as RechartsBarChart, 
  CartesianGrid, 
  Legend, 
  Line, 
  LineChart, 
  ResponsiveContainer, 
  Tooltip, 
  XAxis, 
  YAxis 
} from 'recharts';

const salesData = [
  { name: 'Jan', total: 3200 },
  { name: 'Feb', total: 3800 },
  { name: 'Mar', total: 4200 },
  { name: 'Apr', total: 3900 },
  { name: 'May', total: 4900 },
  { name: 'Jun', total: 5400 },
  { name: 'Jul', total: 4700 },
];

const productPerformance = [
  { name: 'Croissant', sales: 120, revenue: 598 },
  { name: 'Chocolate Cake', sales: 105, revenue: 2625 },
  { name: 'Eclair', sales: 90, revenue: 360 },
  { name: 'Macaron', sales: 70, revenue: 280 },
  { name: 'Baguette', sales: 45, revenue: 315 },
];

const Dashboard = () => {
  return (
    <AdminLayout title="Dashboard">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total Revenue
            </CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$45,231.89</div>
            <p className="text-xs text-muted-foreground">
              +20.1% from last month
            </p>
            <div className="mt-2 h-1 w-full bg-gray-100 rounded-full">
              <div className="h-1 rounded-full bg-green-500 w-[65%]"></div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              New Orders
            </CardTitle>
            <ShoppingCart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+124</div>
            <p className="text-xs text-muted-foreground">
              +14% from last month
            </p>
            <div className="mt-2 h-1 w-full bg-gray-100 rounded-full">
              <div className="h-1 rounded-full bg-blue-500 w-[45%]"></div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              New Customers
            </CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+573</div>
            <p className="text-xs text-muted-foreground">
              +5.2% from last month
            </p>
            <div className="mt-2 h-1 w-full bg-gray-100 rounded-full">
              <div className="h-1 rounded-full bg-purple-500 w-[38%]"></div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Active Sessions
            </CardTitle>
            <BarChart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+758</div>
            <p className="text-xs text-muted-foreground">
              +19% from last hour
            </p>
            <div className="mt-2 h-1 w-full bg-gray-100 rounded-full">
              <div className="h-1 rounded-full bg-amber-500 w-[72%]"></div>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7 mt-6">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Sales Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <ChartContainer
                config={{
                  total: {
                    theme: {
                      light: "hsl(var(--primary))",
                      dark: "hsl(var(--primary))",
                    },
                  },
                }}
              >
                <LineChart data={salesData}>
                  <XAxis 
                    dataKey="name" 
                    stroke="#888888" 
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                  />
                  <YAxis
                    stroke="#888888"
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                    tickFormatter={(value) => `$${value}`}
                  />
                  <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                  <Tooltip 
                    content={({ active, payload }) => {
                      if (active && payload && payload.length) {
                        return (
                          <div className="rounded-lg border bg-background p-2 shadow-sm">
                            <div className="grid grid-cols-2 gap-2">
                              <div className="flex flex-col">
                                <span className="text-[0.70rem] uppercase text-muted-foreground">Month</span>
                                <span className="font-bold text-muted-foreground">{payload[0].payload.name}</span>
                              </div>
                              <div className="flex flex-col">
                                <span className="text-[0.70rem] uppercase text-muted-foreground">Sales</span>
                                <span className="font-bold">${payload[0].payload.total}</span>
                              </div>
                            </div>
                          </div>
                        )
                      }
                      return null
                    }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="total" 
                    stroke="#8b5cf6" 
                    strokeWidth={3}
                    dot={{ fill: "#8b5cf6", r: 4 }}
                    activeDot={{ r: 6 }}
                  />
                </LineChart>
              </ChartContainer>
            </div>
          </CardContent>
        </Card>
        
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Top Products</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <ChartContainer
                config={{
                  sales: {
                    theme: {
                      light: "#8b5cf6",
                      dark: "#8b5cf6",
                    },
                  },
                }}
              >
                <RechartsBarChart data={productPerformance} layout="vertical" barSize={20}>
                  <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                  <XAxis type="number" />
                  <YAxis 
                    dataKey="name" 
                    type="category" 
                    scale="band" 
                    width={100}
                    style={{ fontSize: '0.75rem' }}
                  />
                  <Tooltip
                    content={({ active, payload }) => {
                      if (active && payload && payload.length) {
                        return (
                          <div className="rounded-lg border bg-background p-2 shadow-sm">
                            <div className="grid gap-2">
                              <div className="font-semibold">{payload[0].payload.name}</div>
                              <div className="grid grid-cols-2 gap-8">
                                <div className="flex flex-col">
                                  <span className="text-[0.70rem] uppercase text-muted-foreground">Sales</span>
                                  <span className="font-bold">{payload[0].payload.sales} units</span>
                                </div>
                                <div className="flex flex-col">
                                  <span className="text-[0.70rem] uppercase text-muted-foreground">Revenue</span>
                                  <span className="font-bold">${payload[0].payload.revenue}</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        )
                      }
                      return null
                    }}
                  />
                  <Bar dataKey="sales" name="Sales" fill="#8b5cf6" radius={[0, 4, 4, 0]} />
                </RechartsBarChart>
              </ChartContainer>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <div className="grid gap-4 mt-6">
        <Card>
          <CardHeader>
            <CardTitle>Recent Orders</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="rounded-md border">
              <div className="grid grid-cols-5 text-sm font-medium border-b">
                <div className="p-3">Order ID</div>
                <div className="p-3">Customer</div>
                <div className="p-3">Date</div>
                <div className="p-3">Status</div>
                <div className="p-3 text-right">Total</div>
              </div>
              
              {[
                { id: 'ORD-1001', customer: 'Sarah Johnson', date: '2025-04-07', status: 'Completed', total: 79.99 },
                { id: 'ORD-1002', customer: 'Michael Chen', date: '2025-04-07', status: 'Processing', total: 124.50 },
                { id: 'ORD-1003', customer: 'Emily Wilson', date: '2025-04-06', status: 'Completed', total: 43.25 },
                { id: 'ORD-1004', customer: 'David Garcia', date: '2025-04-06', status: 'Shipped', total: 86.75 },
                { id: 'ORD-1005', customer: 'Lisa Taylor', date: '2025-04-05', status: 'Completed', total: 59.99 },
              ].map((order) => (
                <div key={order.id} className="grid grid-cols-5 text-sm border-b">
                  <div className="p-3 font-medium">{order.id}</div>
                  <div className="p-3">{order.customer}</div>
                  <div className="p-3">{order.date}</div>
                  <div className="p-3">
                    <span className={`inline-block px-2 py-1 text-xs font-semibold rounded-full
                      ${order.status === 'Completed' ? 'bg-green-100 text-green-800' : 
                        order.status === 'Processing' ? 'bg-amber-100 text-amber-800' :
                        'bg-blue-100 text-blue-800'}`}>
                      {order.status}
                    </span>
                  </div>
                  <div className="p-3 text-right">${order.total.toFixed(2)}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
};

export default Dashboard;
