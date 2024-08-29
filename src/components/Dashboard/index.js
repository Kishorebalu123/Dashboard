import React from 'react';
import {  PieChart, Pie, Cell,LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './index.css';

const data = [
  { name: '6/30/2024 - 7/6/2024', orders: 4, sales: 1404 },
  { name: '7/7/2024 - 7/13/2024', orders: 2, sales: 800 },
  { name: '7/21/2024 - 7/27/2024', orders: 1, sales: 400 },
];

const pieData = [
  { name: 'WooCommerce Store', value: 44.2 },
  { name: 'Shopify Store', value: 55.8 },
];

const COLORS = ['#FF6F61', '#2EC4B6'];

function Dashboard() {
  return (
    <div className="dashboard">
      <div className="chart-container">
        <h3>Sales vs Orders</h3>
        
        <ResponsiveContainer width="100%" height={300}>
        
          <LineChart data={data}>
          <Legend verticalAlign="top" align="center" height={36} />
          <CartesianGrid strokeDasharray="3 3" /> 
            <XAxis dataKey="name" />
            <YAxis yAxisId="left" tickFormatter={(value) => `${value}k`} />
            <YAxis yAxisId="right" orientation="right" />
            <Tooltip />
             
            <Line yAxisId="left" type="monotone" dataKey="sales" stroke="#FF6F61" />
          <Line yAxisId="right" type="monotone" dataKey="orders" stroke="#2EC4B6" />
          
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div className="pie-container">
        <h3>Portion of Sales</h3>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={pieData}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={({ name, value }) => `${name} (${value}%)`}
              outerRadius={100}
              fill="#8884d8"
              dataKey="value"
            >
              {pieData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        <div className="pie-total">
          <p>Total: 2659</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
