
import React from 'react';
import AdminLayout from '@/components/layout/AdminLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { PlusCircle, AlertTriangle, Package, Clipboard, FileCheck } from 'lucide-react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  ChartContainer,
  ChartTooltipContent
} from '@/components/ui/chart';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  PieChart, 
  Pie, 
  Cell 
} from 'recharts';

const inventoryData = [
  { id: 1, name: 'Flour (All Purpose)', stock: 125, unit: 'kg', reorder: 50, status: 'In Stock' },
  { id: 2, name: 'Sugar (Granulated)', stock: 98, unit: 'kg', reorder: 40, status: 'In Stock' },
  { id: 3, name: 'Butter', stock: 32, unit: 'kg', reorder: 30, status: 'In Stock' },
  { id: 4, name: 'Chocolate Chips', stock: 18, unit: 'kg', reorder: 20, status: 'Low Stock' },
  { id: 5, name: 'Vanilla Extract', stock: 5, unit: 'L', reorder: 10, status: 'Low Stock' },
  { id: 6, name: 'Baking Powder', stock: 12, unit: 'kg', reorder: 5, status: 'In Stock' },
  { id: 7, name: 'Cocoa Powder', stock: 3, unit: 'kg', reorder: 8, status: 'Low Stock' },
  { id: 8, name: 'Eggs', stock: 0, unit: 'dozen', reorder: 10, status: 'Out of Stock' },
  { id: 9, name: 'Milk', stock: 25, unit: 'L', reorder: 15, status: 'In Stock' },
  { id: 10, name: 'Cream Cheese', stock: 0, unit: 'kg', reorder: 8, status: 'Out of Stock' },
  { id: 11, name: 'Almonds', stock: 5, unit: 'kg', reorder: 6, status: 'Low Stock' },
];

const stockStatusData = [
  { name: 'In Stock', value: 6, color: '#22c55e' },
  { name: 'Low Stock', value: 3, color: '#f59e0b' },
  { name: 'Out of Stock', value: 2, color: '#ef4444' },
];

const inventoryLevelsData = [
  { month: 'Jan', flour: 120, sugar: 90, butter: 40 },
  { month: 'Feb', flour: 105, sugar: 85, butter: 35 },
  { month: 'Mar', flour: 130, sugar: 95, butter: 45 },
  { month: 'Apr', flour: 125, sugar: 98, butter: 32 },
];

const Inventory = () => {
  return (
    <AdminLayout title="Inventory Management">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-lg font-medium">Stock Status</h1>
        <div className="flex space-x-2">
          <Button className="bg-pastry-brown hover:bg-pastry-berry">
            <PlusCircle className="h-4 w-4 mr-2" /> Add Stock
          </Button>
          <Button variant="outline">
            <FileCheck className="h-4 w-4 mr-2" /> Export Report
          </Button>
        </div>
      </div>
      
      <div className="grid gap-4 md:grid-cols-4 mb-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Low Stock Items</CardTitle>
            <AlertTriangle className="h-4 w-4 text-amber-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground">Needs attention</p>
            <div className="mt-4 h-1 w-full bg-gray-100 rounded-full">
              <div className="h-1 rounded-full bg-amber-500 w-[25%]"></div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Out of Stock Items</CardTitle>
            <AlertTriangle className="h-4 w-4 text-red-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2</div>
            <p className="text-xs text-muted-foreground">Critical</p>
            <div className="mt-4 h-1 w-full bg-gray-100 rounded-full">
              <div className="h-1 rounded-full bg-red-500 w-[16%]"></div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">In Stock Items</CardTitle>
            <Package className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">6</div>
            <p className="text-xs text-muted-foreground">Healthy stock levels</p>
            <div className="mt-4 h-1 w-full bg-gray-100 rounded-full">
              <div className="h-1 rounded-full bg-green-500 w-[55%]"></div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Inventory Value</CardTitle>
            <Clipboard className="h-4 w-4 text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$12,457.83</div>
            <p className="text-xs text-muted-foreground">Based on current stock</p>
            <div className="mt-4 h-1 w-full bg-gray-100 rounded-full">
              <div className="h-1 rounded-full bg-blue-500 w-[65%]"></div>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <div className="grid gap-6 md:grid-cols-3 mb-6">
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Inventory Levels (Last 4 Months)</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-72">
              <ChartContainer
                config={{
                  flour: {
                    theme: {
                      light: "#22c55e",
                      dark: "#22c55e",
                    },
                  },
                  sugar: {
                    theme: {
                      light: "#3b82f6",
                      dark: "#3b82f6",
                    },
                  },
                  butter: {
                    theme: {
                      light: "#f59e0b",
                      dark: "#f59e0b",
                    },
                  },
                }}
              >
                <LineChart
                  data={inventoryLevelsData}
                  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip
                    content={({ active, payload, label }) => {
                      if (active && payload && payload.length) {
                        return (
                          <div className="rounded-lg border bg-background p-2 shadow-sm">
                            <div className="grid gap-2">
                              <div className="font-semibold">Month: {label}</div>
                              <div className="grid gap-1">
                                {payload.map((entry, index) => (
                                  <div key={index} className="flex items-center gap-2">
                                    <div 
                                      className="w-3 h-3 rounded-full" 
                                      style={{ backgroundColor: entry.color }}
                                    ></div>
                                    <span className="text-[0.70rem] uppercase text-muted-foreground">
                                      {entry.name}: {entry.value} {entry.name === 'flour' || entry.name === 'sugar' ? 'kg' : entry.name === 'butter' ? 'kg' : ''}
                                    </span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        )
                      }
                      return null
                    }}
                  />
                  <Line type="monotone" dataKey="flour" stroke="#22c55e" activeDot={{ r: 8 }} />
                  <Line type="monotone" dataKey="sugar" stroke="#3b82f6" activeDot={{ r: 8 }} />
                  <Line type="monotone" dataKey="butter" stroke="#f59e0b" activeDot={{ r: 8 }} />
                </LineChart>
              </ChartContainer>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Stock Status Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-72">
              <ChartContainer
                config={{
                  status: {
                    theme: {
                      light: "#8b5cf6",
                      dark: "#8b5cf6",
                    },
                  },
                }}
              >
                <PieChart>
                  <Pie
                    data={stockStatusData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                    label
                  >
                    {stockStatusData.map((entry, index) => (
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
                              <div className="flex items-center gap-2">
                                <div 
                                  className="w-3 h-3 rounded-full" 
                                  style={{ backgroundColor: payload[0].payload.color }}
                                ></div>
                                <span>
                                  {payload[0].value} items ({Math.round((payload[0].value / 11) * 100)}%)
                                </span>
                              </div>
                            </div>
                          </div>
                        )
                      }
                      return null
                    }}
                  />
                </PieChart>
              </ChartContainer>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <div className="bg-white p-4 rounded-md shadow">
        <h2 className="text-lg font-medium mb-4">Inventory Items</h2>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Item Name</TableHead>
              <TableHead>Stock Level</TableHead>
              <TableHead>Unit</TableHead>
              <TableHead>Reorder Point</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {inventoryData.map((item) => (
              <TableRow key={item.id}>
                <TableCell>{item.id}</TableCell>
                <TableCell className="font-medium">{item.name}</TableCell>
                <TableCell>{item.stock}</TableCell>
                <TableCell>{item.unit}</TableCell>
                <TableCell>{item.reorder}</TableCell>
                <TableCell>
                  <span className={`inline-block px-2 py-1 text-xs font-semibold rounded-full
                    ${item.status === 'In Stock' ? 'bg-green-100 text-green-800' : 
                      item.status === 'Low Stock' ? 'bg-amber-100 text-amber-800' : 
                      'bg-red-100 text-red-800'}`}>
                    {item.status}
                  </span>
                </TableCell>
                <TableCell className="text-right">
                  <Button variant="outline" size="sm" className="mr-2">Update</Button>
                  <Button variant="outline" size="sm">History</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </AdminLayout>
  );
};

export default Inventory;
