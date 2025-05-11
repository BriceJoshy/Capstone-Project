import React, { useState } from 'react';
import { Calendar, Clock, Package, ShoppingBag } from 'lucide-react';

const TailorDashboard = () => {
  const [activeTab, setActiveTab] = useState('orders');

  const orders = [
    {
      id: 1,
      customerName: 'John Doe',
      product: 'Custom Shirt',
      status: 'pending',
      dueDate: '2025-02-20',
      measurements: { chest: 40, waist: 34, shoulder: 18 }
    },
    // Add more orders as needed
  ];

  const schedule = [
    {
      id: 1,
      task: 'Shirt Fitting - John Doe',
      time: '10:00 AM',
      date: '2025-02-19'
    },
    // Add more scheduled tasks
  ];

  const renderOrders = () => (
    <div className="bg-white rounded-lg shadow p-6">
      <h3 className="text-xl font-semibold mb-4">Current Orders</h3>
      <div className="space-y-4">
        {orders.map(order => (
          <div key={order.id} className="border rounded-lg p-4">
            <div className="flex justify-between items-center mb-2">
              <h4 className="font-medium">{order.customerName}</h4>
              <span className={`px-2 py-1 rounded text-sm ${
                order.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                order.status === 'in_progress' ? 'bg-blue-100 text-blue-800' :
                'bg-green-100 text-green-800'
              }`}>
                {order.status}
              </span>
            </div>
            <p className="text-gray-600 text-sm">{order.product}</p>
            <p className="text-gray-500 text-sm">Due: {order.dueDate}</p>
            <select 
              className="mt-2 border rounded p-1 text-sm"
              defaultValue={order.status}
              onChange={(e) => console.log('Status changed:', e.target.value)}
            >
              <option value="pending">Pending</option>
              <option value="in_progress">In Progress</option>
              <option value="completed">Completed</option>
            </select>
          </div>
        ))}
      </div>
    </div>
  );

  const renderSchedule = () => (
    <div className="bg-white rounded-lg shadow p-6">
      <h3 className="text-xl font-semibold mb-4">Schedule</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Today's Schedule */}
        <div className="border rounded-lg p-4">
          <h4 className="font-medium mb-3">Today</h4>
          {schedule.filter(task => task.date === '2025-02-19').map(task => (
            <div key={task.id} className="mb-2 p-2 bg-gray-50 rounded">
              <p className="font-medium">{task.task}</p>
              <p className="text-sm text-gray-600">{task.time}</p>
            </div>
          ))}
        </div>
        {/* Tomorrow's Schedule */}
        <div className="border rounded-lg p-4">
          <h4 className="font-medium mb-3">Tomorrow</h4>
          {schedule.filter(task => task.date === '2025-02-20').map(task => (
            <div key={task.id} className="mb-2 p-2 bg-gray-50 rounded">
              <p className="font-medium">{task.task}</p>
              <p className="text-sm text-gray-600">{task.time}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">Tailor Dashboard</h1>
        
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-white p-4 rounded-lg shadow flex items-center">
            <Package className="text-blue-500 mr-3" />
            <div>
              <p className="text-sm text-gray-600">Pending Orders</p>
              <p className="text-xl font-semibold">12</p>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow flex items-center">
            <Clock className="text-green-500 mr-3" />
            <div>
              <p className="text-sm text-gray-600">In Progress</p>
              <p className="text-xl font-semibold">5</p>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow flex items-center">
            <ShoppingBag className="text-purple-500 mr-3" />
            <div>
              <p className="text-sm text-gray-600">Completed</p>
              <p className="text-xl font-semibold">28</p>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow flex items-center">
            <Calendar className="text-red-500 mr-3" />
            <div>
              <p className="text-sm text-gray-600">Today's Tasks</p>
              <p className="text-xl font-semibold">4</p>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex space-x-4 mb-6">
          <button
            className={`px-4 py-2 rounded-lg ${activeTab === 'orders' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
            onClick={() => setActiveTab('orders')}
          >
            Orders
          </button>
          <button
            className={`px-4 py-2 rounded-lg ${activeTab === 'schedule' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
            onClick={() => setActiveTab('schedule')}
          >
            Schedule
          </button>
        </div>

        {/* Content */}
        {activeTab === 'orders' ? renderOrders() : renderSchedule()}
      </div>
    </div>
  );
};

export default TailorDashboard;