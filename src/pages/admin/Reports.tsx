
import React from 'react';
import AdminLayout from '@/components/layout/AdminLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  AreaChart,
  Area,
  PieChart, 
  Pie, 
  ResponsiveContainer, 
  Cell,
  BarChart as RechartsBarChart,
  Bar,
  Tooltip,
  Legend,
  CartesianGrid,
  XAxis,
  YAxis
} from 'recharts';
import {
  ChartContainer,
  ChartTooltipContent
} from '@/components/ui/chart';
import { CalendarIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { cn } from '@/lib/utils';

const salesData = [
  { month: 'Jan', total: 14589, orders: 320, averageOrder: 45.59 },
  { month: 'Feb', total: 16237, orders: 345, averageOrder: 47.06 },
  { month: 'Mar', total: 18432, orders: 390, averageOrder: 47.26 },
  { month: 'Apr', total: 17895, orders: 370, averageOrder: 48.36 },
  { month: 'May', total: 21543, orders: 425, averageOrder: 50.69 },
  { month: 'Jun', total: 19874, orders: 410, averageOrder: 48.47 },
  { month: 'Jul', total: 23542, orders: 460, averageOrder: 51.18 },
  { month: 'Aug', total: 24320, orders: 480, averageOrder: 50.67 },
  { month: 'Sep', total: 21834, orders: 430, averageOrder: 50.78 },
  { month: 'Oct', total: 22971, orders: 450, averageOrder: 51.05 },
  { month: 'Nov', total: 25432, orders: 490, averageOrder: 51.90 },
  { month: 'Dec', total: 29875, orders: 580, averageOrder: 51.51 },
];

const categoryData = [
  { name: 'Cakes', value: 35, color: '#8b5cf6' },
  { name: 'Cupcakes', value: 20, color: '#ec4899' },
  { name: 'Donuts', value: 15, color: '#14b8a6' },
  { name: 'Macaroons', value: 10, color: '#f59e0b' },
  { name: 'Pastry', value: 12, color: '#ef4444' },
  { name: 'Bread', value: 8, color: '#22c55e' },
];

const customerData = [
  { age: '18-24', male: 15, female: 20 },
  { age: '25-34', male: 25, female: 30 },
  { age: '35-44', male: 20, female: 25 },
  { age: '45-54', male: 10, female: 15 },
  { age: '55-64', male: 8, female: 10 },
  { age: '65+', male: 5, female: 7 },
];

const Reports = () => {
  return (
    <AdminLayout title="Reports & Analytics">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-lg font-medium">Business Insights</h1>
        <div className="flex space-x-2">
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className={cn(
                  "w-[280px] justify-start text-left font-normal",
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                <span>Last 12 months (Apr 2024 - Mar 2025)</span>
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <div className="p-3">
                <div className="space-y-2">
                  <Button variant="outline" className="w-full justify-start text-left">Last 7 days</Button>
                  <Button variant="outline" className="w-full justify-start text-left">Last 30 days</Button>
                  <Button variant="outline" className="w-full justify-start text-left">Last 3 months</Button>
                  <Button variant="outline" className="w-full justify-start text-left">Last 6 months</Button>
                  <Button variant="outline" className="w-full justify-start text-left bg-muted">Last 12 months</Button>
                  <Button variant="outline" className="w-full justify-start text-left">Year to date</Button>
                  <Button variant="outline" className="w-full justify-start text-left">Custom range</Button>
                </div>
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </div>
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Sales</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$256,544.32</div>
            <p className="text-xs text-muted-foreground">+15.2% from previous year</p>
            <div className="mt-4 h-2 w-full bg-gray-100 rounded-full">
              <div className="h-2 rounded-full bg-green-500 w-[84%]"></div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Average Order Value</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$49.65</div>
            <p className="text-xs text-muted-foreground">+5.7% from previous year</p>
            <div className="mt-4 h-2 w-full bg-gray-100 rounded-full">
              <div className="h-2 rounded-full bg-blue-500 w-[62%]"></div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Conversion Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4.3%</div>
            <p className="text-xs text-muted-foreground">+1.2% from previous year</p>
            <div className="mt-4 h-2 w-full bg-gray-100 rounded-full">
              <div className="h-2 rounded-full bg-purple-500 w-[45%]"></div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Customer Acquisition Cost</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$9.40</div>
            <p className="text-xs text-muted-foreground">-12% from previous year</p>
            <div className="mt-4 h-2 w-full bg-gray-100 rounded-full">
              <div className="h-2 rounded-full bg-green-500 w-[75%]"></div>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <div className="grid gap-6 md:grid-cols-2 mb-6">
        <Card>
          <CardHeader>
            <CardTitle>Annual Sales Overview</CardTitle>
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
                <AreaChart
                  data={salesData}
                  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                >
                  <defs>
                    <linearGradient id="colorTotal" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                  <XAxis dataKey="month" />
                  <YAxis tickFormatter={(value) => `$${value.toLocaleString()}`} />
                  <Tooltip
                    content={({ active, payload }) => {
                      if (active && payload && payload.length) {
                        return (
                          <div className="rounded-lg border bg-background p-2 shadow-sm">
                            <div className="grid gap-2">
                              <div className="font-semibold">{payload[0].payload.month}</div>
                              <div className="grid grid-cols-2 gap-8">
                                <div className="flex flex-col">
                                  <span className="text-[0.70rem] uppercase text-muted-foreground">Sales</span>
                                  <span className="font-bold">${payload[0].payload.total.toLocaleString()}</span>
                                </div>
                                <div className="flex flex-col">
                                  <span className="text-[0.70rem] uppercase text-muted-foreground">Orders</span>
                                  <span className="font-bold">{payload[0].payload.orders}</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        )
                      }
                      return null
                    }}
                  />
                  <Area 
                    type="monotone" 
                    dataKey="total" 
                    stroke="#8b5cf6" 
                    fillOpacity={1} 
                    fill="url(#colorTotal)" 
                  />
                </AreaChart>
              </ChartContainer>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Sales by Category</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={categoryData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  >
                    {categoryData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip
                    content={({ active, payload }) => {
                      if (active && payload && payload.length) {
                        return (
                          <div className="rounded-lg border bg-background p-2 shadow-sm">
                            <div className="grid gap-1">
                              <div className="font-semibold">{payload[0].name}</div>
                              <div className="grid grid-cols-2 gap-4">
                                <div className="flex flex-col">
                                  <span className="text-[0.70rem] uppercase text-muted-foreground">Percentage</span>
                                  <span className="font-bold">{payload[0].value}%</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        )
                      }
                      return null
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Customer Demographics</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-80">
            <ChartContainer
              config={{
                male: {
                  theme: {
                    light: "#3b82f6",
                    dark: "#3b82f6",
                  },
                },
                female: {
                  theme: {
                    light: "#ec4899",
                    dark: "#ec4899",
                  },
                },
              }}
            >
              <RechartsBarChart
                data={customerData}
                margin={{
                  top: 20,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                <XAxis dataKey="age" />
                <YAxis />
                <Tooltip
                  content={({ active, payload, label }) => {
                    if (active && payload && payload.length) {
                      return (
                        <div className="rounded-lg border bg-background p-2 shadow-sm">
                          <div className="grid gap-2">
                            <div className="font-semibold">Age: {label}</div>
                            <div className="grid grid-cols-2 gap-8">
                              <div className="flex flex-col">
                                <span className="text-[0.70rem] uppercase text-muted-foreground">Male</span>
                                <span className="font-bold">{payload[0].value}%</span>
                              </div>
                              <div className="flex flex-col">
                                <span className="text-[0.70rem] uppercase text-muted-foreground">Female</span>
                                <span className="font-bold">{payload[1].value}%</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      )
                    }
                    return null
                  }}
                />
                <Legend />
                <Bar dataKey="male" name="Male" fill="#3b82f6" />
                <Bar dataKey="female" name="Female" fill="#ec4899" />
              </RechartsBarChart>
            </ChartContainer>
          </div>
        </CardContent>
      </Card>
    </AdminLayout>
  );
};

export default Reports;
