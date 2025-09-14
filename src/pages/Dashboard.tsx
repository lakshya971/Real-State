import React, { useState } from 'react';
import { Plus, Edit, Trash2, Eye, BarChart3, Users, Home as HomeIcon } from 'lucide-react';
import { properties } from '../data/properties';
import { Property } from '../types';

const Dashboard = () => {
  const [userRole] = useState<'buyer' | 'builder' | 'broker'>('broker'); // Simulated user role
  const [activeTab, setActiveTab] = useState('overview');
  const [userProperties] = useState(properties.slice(0, 3)); // Simulated user's properties

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    }).format(price);
  };

  const renderOverview = () => (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <HomeIcon className="w-6 h-6 text-blue-600" />
            </div>
            <span className="text-2xl font-bold text-gray-900">
              {userRole === 'buyer' ? '12' : '8'}
            </span>
          </div>
          <h3 className="text-sm font-medium text-gray-600">
            {userRole === 'buyer' ? 'Saved Properties' : 'Active Listings'}
          </h3>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <BarChart3 className="w-6 h-6 text-green-600" />
            </div>
            <span className="text-2xl font-bold text-gray-900">
              {userRole === 'buyer' ? '5' : '24'}
            </span>
          </div>
          <h3 className="text-sm font-medium text-gray-600">
            {userRole === 'buyer' ? 'Viewed Properties' : 'Total Views'}
          </h3>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
              <Users className="w-6 h-6 text-yellow-600" />
            </div>
            <span className="text-2xl font-bold text-gray-900">
              {userRole === 'buyer' ? '3' : '15'}
            </span>
          </div>
          <h3 className="text-sm font-medium text-gray-600">
            {userRole === 'buyer' ? 'Inquiries Sent' : 'Inquiries Received'}
          </h3>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <BarChart3 className="w-6 h-6 text-purple-600" />
            </div>
            <span className="text-2xl font-bold text-gray-900">$2.1M</span>
          </div>
          <h3 className="text-sm font-medium text-gray-600">
            {userRole === 'buyer' ? 'Budget Range' : 'Total Value'}
          </h3>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
        <div className="space-y-4">
          <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
              <Eye className="w-5 h-5 text-blue-600" />
            </div>
            <div className="flex-1">
              <p className="font-medium text-gray-900">New property view</p>
              <p className="text-sm text-gray-600">Modern Downtown Apartment - 2 hours ago</p>
            </div>
          </div>
          <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
            <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
              <Plus className="w-5 h-5 text-green-600" />
            </div>
            <div className="flex-1">
              <p className="font-medium text-gray-900">Property inquiry received</p>
              <p className="text-sm text-gray-600">Luxury Family Villa - 5 hours ago</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderProperties = () => (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">
          {userRole === 'buyer' ? 'Saved Properties' : 'My Listings'}
        </h2>
        {userRole !== 'buyer' && (
          <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-200 flex items-center space-x-2">
            <Plus className="w-5 h-5" />
            <span>Add Property</span>
          </button>
        )}
      </div>

      {/* Properties List */}
      <div className="grid grid-cols-1 gap-6">
        {userProperties.map((property) => (
          <div key={property.id} className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-start space-x-6">
              <img
                src={property.images[0]}
                alt={property.title}
                className="w-32 h-24 object-cover rounded-lg flex-shrink-0"
              />
              <div className="flex-1">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-xl font-semibold text-gray-900">{property.title}</h3>
                  <div className="text-xl font-bold text-blue-600">
                    {formatPrice(property.price)}
                  </div>
                </div>
                <p className="text-gray-600 mb-4">{property.location}</p>
                <div className="flex items-center space-x-4 text-sm text-gray-600">
                  <span>{property.bedrooms} beds</span>
                  <span>{property.bathrooms} baths</span>
                  <span>{property.area.toLocaleString()} sq ft</span>
                </div>
              </div>
              <div className="flex items-center space-x-2 flex-shrink-0">
                {userRole !== 'buyer' ? (
                  <>
                    <button className="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-200">
                      <Edit className="w-5 h-5" />
                    </button>
                    <button className="p-2 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors duration-200">
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </>
                ) : (
                  <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200">
                    View Details
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const tabs = userRole === 'buyer' 
    ? [
        { id: 'overview', label: 'Overview' },
        { id: 'saved', label: 'Saved Properties' },
        { id: 'inquiries', label: 'My Inquiries' },
        { id: 'profile', label: 'Profile' },
      ]
    : [
        { id: 'overview', label: 'Overview' },
        { id: 'properties', label: 'My Properties' },
        { id: 'inquiries', label: 'Inquiries' },
        { id: 'analytics', label: 'Analytics' },
        { id: 'profile', label: 'Profile' },
      ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Dashboard
          </h1>
          <p className="text-gray-600 capitalize">
            Welcome back! You're logged in as a {userRole}.
          </p>
        </div>

        {/* Tabs */}
        <div className="mb-8">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-8">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-2 px-1 border-b-2 font-medium text-sm transition-colors duration-200 ${
                    activeTab === tab.id
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Content */}
        <div className="min-h-[500px]">
          {activeTab === 'overview' && renderOverview()}
          {(activeTab === 'properties' || activeTab === 'saved') && renderProperties()}
          {activeTab === 'inquiries' && (
            <div className="bg-white rounded-xl shadow-sm p-8 text-center">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Inquiries</h3>
              <p className="text-gray-600">Inquiry management features will be implemented here.</p>
            </div>
          )}
          {activeTab === 'analytics' && (
            <div className="bg-white rounded-xl shadow-sm p-8 text-center">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Analytics</h3>
              <p className="text-gray-600">Property analytics and insights will be shown here.</p>
            </div>
          )}
          {activeTab === 'profile' && (
            <div className="bg-white rounded-xl shadow-sm p-8 text-center">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Profile Settings</h3>
              <p className="text-gray-600">Profile management features will be implemented here.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;